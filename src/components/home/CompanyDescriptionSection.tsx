import { useTranslation } from "react-i18next";

function CompanyDescriptionSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 text-center lg:text-left mb-12 md:mb-16 lg:mb-20">
          <span className="text-secondary">
            {t("home.companyDescription.primaryTitle")}
          </span>{" "}
          <br className="hidden lg:block" />
          {t("home.companyDescription.secondaryTitle")}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center lg:text-left">
          {t("home.companyDescription.description")}
        </p>
      </div>
    </section>
  );
}

export default CompanyDescriptionSection;
