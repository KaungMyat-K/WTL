import { useTranslation } from "react-i18next";
import type { ServiceItem } from "../../types/index1";
import Button from "../ui/Button";

function HeroSection() {
  const { t } = useTranslation();

  const serviceItems = t("services.servicesList.items", {
    returnObjects: true,
  }) as ServiceItem[];

  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 xl:py-40 md:-mt-18 -mt-12  w-full lg:h-[60vh] xl:h-screen overflow-hidden flex items-center bg-gray-50">
      <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px] bg-secondary/5 rounded-full blur-3xl" />
      <div className="mt-8 sm:mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-4 sm:mb-6">
          {t("services.hero.primaryTitle")}
          <br />
          <span className="text-gray-800">
            {t("services.hero.secondaryTitle")}
          </span>
        </h1>
        <p className="text-gray-500 text-xs md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          {t("services.hero.description")}
        </p>

        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4 pt-4 sm:pt-8">
          {serviceItems.map((service) => (
            <Button
              variant="tag"
              rounded="full"
              key={service.id}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(
                  `service-${service.id}`
                );
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {service.title}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
