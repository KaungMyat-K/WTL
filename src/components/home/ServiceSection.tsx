import { useTranslation } from "react-i18next";
import HomeServiceCard from "../services/HomeServiceCard";
import Button from "../ui/Button";
import { Images } from "../images";
import type { ServiceItem } from "../../types/index1";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/site1";

function ServiceSection() {
  const { t } = useTranslation();
  const translatedItems = t("services.servicesList.items", {
    returnObjects: true,
  }) as ServiceItem[];

  const services = Array.isArray(translatedItems)
    ? translatedItems.map((item) => {
        const imgData = Images.services.iconImg.find(
          (img) => img.id === item.id
        );
        return {
          ...item,
          img: {
            id: item.id,
            src: imgData?.src || "",
            alt: imgData?.alt || item.title,
          },
        };
      })
    : [];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#e7eef1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-36">
          <div className="lg:w-5/12 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 text-center lg:text-left">
              {t("home.services.primaryTitle")}{" "}
              <span className="text-secondary inline-block">
                {t("home.services.secondaryTitle")}
              </span>
            </h2>
          </div>

          <div className="lg:w-7/12 w-full">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
              {t("home.services.description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 lg:gap-7 xl:gap-8">
          {services.slice(0, 4).map((service) => (
            <HomeServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-16 md:mt-28">
          <Button
            variant="primary"
            className="min-w-35 sm:min-w-40 md:min-w-45 lg:min-w-50 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base lg:text-lg"
            asChild
          >
            <Link to={ROUTES.SERVICES}>
              {t("button.exploreOurServicesButton")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
