import LocationList from "./LocationList";
import { useTranslation } from "react-i18next";
import { Images } from "../images";

function LocationSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gray-900  ">
      <div className="hidden md:block absolute inset-0 mt-52 mb-32">
        <img
          src={Images.contact.src}
          alt={Images.contact.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl relative">
          <div className="absolute inset-0 -mx-4 sm:mx-0 sm:hidden">
            <img
              src={Images.contact.src}
              alt={Images.contact.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          </div>

          <div className="relative z-10 px-4 sm:px-0 py-8 sm:py-0">
            <span className="inline-block text-secondary text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              {t("contact.location.hero.primaryTitle")}
            </span>
            <h1 className="max-w-lg md:max-w-md lg:max-w-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-50 leading-tight">
              {t("contact.location.hero.secondaryTitle")}
            </h1>
          </div>
        </div>
        <LocationList />
      </div>
    </section>
  );
}

export default LocationSection;
