import { useTranslation } from "react-i18next";
import type { ServiceItem } from "../../types/index1";
import SereviceCard from "./SereviceCard";
import { Images } from "../images";
import { siteConfig } from "../../config/site1";
import { useMemo } from "react";

function ServiceListSection() {
  const { t } = useTranslation();

  const translatedItems = t("services.servicesList.items", {
    returnObjects: true,
  }) as ServiceItem[];

  const serviceLinkMap = useMemo(
    () => new Map(siteConfig.serviceLinks.map((link) => [link.id, link.href])),
    [siteConfig.serviceLinks]
  );

  const services = Array.isArray(translatedItems)
    ? translatedItems.map((item) => {
        const imgData = Images.services.img.find((img) => img.id === item.id);
        return {
          ...item,
          img: {
            id: item.id,
            src: imgData.src,
            alt: imgData.alt,
          },
        };
      })
    : [];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-32 mb-16 md:mb-24 lg:mb-32">
          <div className="lg:w-5/12 w-full">
            <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 text-center lg:text-left">
              {t("services.servicesList.primaryTitle")}{" "}
              <span className="text-secondary">
                {t("services.servicesList.secondaryTitle")}
              </span>
            </h2>
          </div>

          <div className="lg:w-7/12 w-full">
            <p className="text-gray-600 text-xs sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
              {t("services.servicesList.description")}
            </p>
          </div>
        </div>

        <div>
          {services.map((service, index) => {
            return (
              <SereviceCard
                key={service.id}
                href={serviceLinkMap.get(service.id)!}
                service={service}
                isLast={index === services.length - 1}
                learnMoreText={t("button.learnMoreButton")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceListSection;
