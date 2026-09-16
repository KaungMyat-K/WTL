import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-[#e7eef1] -mt-12 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <span className="inline-block text-secondary text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6">
          {t("jobs.hero.primaryTitle")}
        </span>

        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-800 mb-4">
          {t("jobs.hero.secondaryTitle")}
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
