import { useTranslation } from "react-i18next";

import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/site";

function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 sm:gap-8">
          {/* Left: Text */}
          <div className="text-left w-full md:w-auto">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-light leading-tight">
              {t("contact.CTA.primaryTitle")}
            </h2>
          </div>

          {/* Right: Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button
              variant="getInTouch"
              className="w-full md:w-auto px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <Link to={ROUTES.CONTACT}>{t("button.getInTouchButton")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
