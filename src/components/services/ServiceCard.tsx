import type { ServiceItem } from "../../types";

interface ServiceCardProps {
  service: ServiceItem;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-md transition-all duration-300 overflow-hidden flex flex-col cursor-pointer hover:bg-secondary sm:hover:-translate-y-2 lg:hover:-translate-y-3 xl:hover:-translate-y-4">
      {/* Background slide-down effect */}
      <div className="absolute inset-0 bg-secondary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />

      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col relative z-10">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mb-8 sm:mb-12 md:mb-16">
          <img
            src={service.icon}
            alt={service.title}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain transition-all duration-200 group-hover:brightness-0 group-hover:invert"
          />
        </div>

        <h3 className="text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 transition-colors duration-200 group-hover:text-white font-medium">
          {service.title}
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10 flex-1 transition-colors duration-200 group-hover:text-white/90 leading-relaxed">
          {service.description}
        </p>

        <a
          href={service.href || "#"}
          className="inline-flex items-center text-gray-800 text-sm sm:text-base transition-all duration-200 group-hover:text-white group-hover:gap-2 mt-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 transition-all duration-75 ease-in-out group-hover:translate-x-3 group-hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ServiceCard;
