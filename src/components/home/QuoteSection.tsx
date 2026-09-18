import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import { siteConfig } from "../../config/site1";
import { Link } from "react-router-dom";

function QuoteSection() {
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="z-10 max-w-7xl mx-auto rounded-md px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 text-center bg-gray-900 w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8">
          {t("home.getAQuote.primaryTitle")}
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
          {t("home.getAQuote.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          <Button
            variant="primary"
            className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg"
            asChild
          >
            <Link
              to={siteConfig.externalRoutes.NEW_CUSTOMER}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("button.newCustomerButton")}
            </Link>
          </Button>

          <Button
            variant="glass"
            className="min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px] px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg"
          >
            <Link
              to={siteConfig.externalRoutes.EXISTING_CUSTOMER}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("button.existingCustomerButton")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
