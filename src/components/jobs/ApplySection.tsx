import Button from "../ui/Button";
import { useTranslation } from "react-i18next";

export default function ApplySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-50 pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <span className="mb-4 sm:mb-5 lg:mb-7 inline-block text-base sm:text-lg lg:text-xl font-normal text-secondary">
            {t("jobs.apply.tag")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
            {t("jobs.apply.primaryTitle")}
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary">
            {t("jobs.apply.secondaryTitle")}
          </h2>
        </div>

        {/* Apply Button */}
        <Button
          variant="darkOutline"
          className="px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg md:text-xl gap-2"
        >
          {t("button.applyButton")}
        </Button>
      </div>
    </section>
  );
}
