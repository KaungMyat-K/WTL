import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

function ContactSection() {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 -mt-3  overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1 top-[5rem] md:-left-1 md:top-[9rem] lg:top-40 lg:-left-1 xl:top-40 xl:left-28 w-20 h-36 md:w-36 md:h-[13rem] lg:w-32 lg:h-[11rem] xl:w-44 xl:h-64 bg-secondary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          <div className="text-left">
            <div className="lg:w-5/12">
              <h1 className="whitespace-pre-line text-4xl md:text-6xl lg:text-5xl xl:text-7xl font-bold text-gray-800 mb-4">
                {t("contact.hero.primaryTitle")}{" "}
                <span className="text-secondary">
                  {t("contact.hero.secondaryTitle")}
                </span>
              </h1>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg max-w-md mb-6 sm:mb-8 leading-relaxed">
              {t("contact.hero.description")}
            </p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
