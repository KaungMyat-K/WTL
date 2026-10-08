import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import type { ContactFormData } from "../../types/index1";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const [honeypot, setHoneypot] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) {
      console.warn("Bot submission detected via honeypot.");
      return;
    }

    // 2. Turnstile Token Check
    if (!turnstileToken) {
      alert("Please complete the Turnstile security check.");
      return;
    }

    setIsSubmitting(true);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        alert("Verification or submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
      // Reset Turnstile token and widget state
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  };

  return (
    <div className="relative">
      <div className="mb-6 sm:mb-8 md:mb-10 text-left">
        <h2 className="text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-secondary">
          {t("contact.hero.form.title")}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5 md:space-y-6"
      >
        {/* Honeypot Field - Visually hidden from real users */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="website_confirm"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        {/* Full Name */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6">
          <label
            htmlFor="fullName"
            className="sm:w-28 md:w-32 lg:w-40 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 flex-shrink-0"
          >
            {t("contact.hero.form.name")}{" "}
            <span className="text-secondary">*</span>
          </label>
          <div className="flex-1 w-full">
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-200 focus:border-secondary outline-none transition-all duration-300 placeholder:text-gray-400 text-sm sm:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6">
          <label
            htmlFor="email"
            className="sm:w-28 md:w-32 lg:w-40 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 flex-shrink-0"
          >
            {t("contact.hero.form.email")}{" "}
            <span className="text-secondary">*</span>
          </label>
          <div className="flex-1 w-full">
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-200 focus:border-secondary outline-none transition-all duration-300 placeholder:text-gray-400 text-sm sm:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 md:gap-6">
          <label
            htmlFor="message"
            className="sm:w-28 md:w-32 lg:w-40 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 flex-shrink-0"
          >
            {t("contact.hero.form.message")}{" "}
            <span className="text-secondary">*</span>
          </label>
          <div className="flex-1 w-full">
            <textarea
              id="message"
              name="message"
              rows={3}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full px-0 py-2 bg-transparent border-0 border-b-2 border-gray-200 focus:border-secondary outline-none transition-all duration-300 resize-none placeholder:text-gray-400 text-sm sm:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* Cloudflare Turnstile Widget */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 pt-2">
          {/* Spacer appears only on large screens */}
          <div className="hidden lg:block lg:w-40 flex-shrink-0" />

          <div className="flex-1 w-full origin-left scale-90 sm:scale-95 md:scale-90 lg:scale-100">
            <Turnstile
              ref={turnstileRef}
              siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onSuccess={(token) => setTurnstileToken(token)}
              onExpire={() => setTurnstileToken(null)}
              onError={() => setTurnstileToken(null)}
              options={{
                theme: "auto",
                size: "normal",
              }}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 pt-2 sm:pt-3 md:pt-4">
          <div className="sm:w-28 md:w-32 lg:w-40 flex-shrink-0" />
          <Button
            variant="submit"
            type="submit"
            disabled={isSubmitting || !turnstileToken}
            isLoading={isSubmitting}
            className="px-7 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg lg:text-2xl text-left sm:text-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : t("button.sendButton")}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
