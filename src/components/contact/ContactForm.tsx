import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type { ContactFormData } from "../../types/index1";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Handle form submission logic here (e.g., API call)
    console.log("Submitted Data:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    }, 1000);
  };
  return (
    <div className="relative">
      <div className="mb-6 sm:mb-8 md:mb-10 text-left">
        <h2 className=" text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-secondary">
          {t("contact.hero.form.title")}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 sm:space-y-5 md:space-y-6"
      >
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

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 md:gap-6 pt-2 sm:pt-3 md:pt-4">
          <div className="sm:w-28 md:w-32 lg:w-40 flex-shrink-0" />
          <Button
            variant="submit"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            className="px-7 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg lg:text-2xl text-left sm:text-center"
          >
            {isSubmitting ? "Sending..." : t("button.sendButton")}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
