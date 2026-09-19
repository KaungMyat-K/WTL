import { Link } from "react-router-dom";
import type { ServiceItem } from "../../types/index1";
import { Icons } from "../icons";
import { ROUTES, siteConfig } from "../../config/site1";

interface ServiceCardProps {
  service: ServiceItem;
}

function HomeServiceCard({ service }: ServiceCardProps) {
  const serviceLink =
    siteConfig.serviceLinks.find((link) => link.id === service.id)?.href ||
    ROUTES.SERVICES;

  return (
    <Link
      to={serviceLink}
      className="group relative bg-white rounded-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:bg-secondary sm:hover:-translate-y-2 lg:hover:-translate-y-3 xl:hover:-translate-y-4"
    >
      <div className="absolute inset-0 bg-secondary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />

      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col relative z-10">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-8 sm:mb-12 md:mb-16">
          <img
            src={service.img?.src}
            alt={service.img?.alt}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain transition-all duration-200 group-hover:brightness-0 group-hover:invert"
          />
        </div>

        <h3 className="text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 transition-colors duration-200 group-hover:text-white font-medium">
          {service.title}
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10 flex-1 transition-colors duration-200 group-hover:text-white/90 leading-relaxed">
          {service.shortDescription}
        </p>

        <span className="inline-flex items-center text-gray-800 text-sm sm:text-base transition-all duration-200 group-hover:text-white group-hover:gap-2 mt-auto">
          <Icons.rightArrow
            strokeWidth="1.2"
            className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 transition-all duration-75 ease-in-out group-hover:translate-x-3 group-hover:text-white"
          />
        </span>
      </div>
    </Link>
  );
}

export default HomeServiceCard;
