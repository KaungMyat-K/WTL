import { useState, type ChangeEvent, type FormEvent } from "react";

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

function ContactSection() {
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

  // Form submit handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Handle form submission logic here (e.g., API call)
    console.log("Submitted Data:", formData);

    // Reset form or handle state after submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 -mt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Square 1 - Responsive */}
        <div className="absolute left-1 top-[5rem] md:-left-1 md:top-[9rem] lg:top-40 lg:-left-1 xl:top-40 xl:left-28 w-20 h-36 md:w-36 md:h-[13rem] lg:w-32 lg:h-[11rem] xl:w-44 xl:h-64 bg-secondary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* LEFT SIDE: Header */}
          <div className="text-left">
            {/* Heading */}
            <div className="lg:w-5/12">
              <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-gray-800 mb-4">
                <span className="block">Streamline</span>
                <span className="block">your</span>
                <span className="block">supply</span>
                <span className="block">chain</span>
                <span className="text-secondary">with us.</span>
              </h1>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg max-w-md mb-6 sm:mb-8 leading-relaxed">
              Have questions or need assistance? Reach out to our team and we'll
              get back to you within 24 hours.
            </p>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="relative">
            <div className="mb-6 sm:mb-8 md:mb-10 text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-secondary">
                Contact Us
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
                  Full Name <span className="text-secondary">*</span>
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
                  Email <span className="text-secondary">*</span>
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
                  Message <span className="text-secondary">*</span>
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-sm sm:text-base md:text-lg lg:text-2xl border-2 border-secondary text-secondary font-semibold px-7 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl transition-all duration-300 hover:bg-secondary/80 hover:border-secondary hover:text-white text-left sm:text-center disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
