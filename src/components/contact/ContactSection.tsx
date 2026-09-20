import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import { Images } from "../images";

function ContactSection() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-28 lg:pt-32 -mt-3  overflow-hidden ">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1 top-[5rem] md:-left-1 md:top-[9rem] lg:top-40 lg:-left-1 xl:top-40 xl:left-28 w-20 h-36 md:w-36 md:h-[13rem] lg:w-32 lg:h-[11rem] xl:w-44 xl:h-64 bg-secondary" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 md:mt-10 ">
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

      <div className="relative z-10 mt-20 sm:mt-28 md:mt-32 lg:mt-40 mb-12 sm:mb-16 md:mb-20 flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
        <h2 className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold  tracking-wider mr-10 sm:mr-16 md:mr-24 lg:mr-32">
          <span>" {t("contact.slogan.primaryTitle")}</span>
          <img
            src={Images.home[0].src}
            alt=""
            className="w-16 h-8 xs:w-20 xs:h-8 sm:w-28 sm:h-10 md:w-36 md:h-14 lg:w-44 lg:h-16 xl:w-52 xl:h-20 object-cover mt-2"
          />
        </h2>

        <h2 className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold  tracking-wider text-secondary ml-10 sm:ml-16 md:ml-24 lg:ml-32">
          <img
            src={Images.home[0].src}
            alt=""
            className="w-16 h-8 xs:w-20 xs:h-8 sm:w-28 sm:h-10 md:w-36 md:h-14 lg:w-44 lg:h-16 xl:w-52 xl:h-20 object-cover mt-2"
          />
          <span>{t("contact.slogan.secondaryTitle")} "</span>
        </h2>
      </div>
    </section>
  );
}

export default ContactSection;
