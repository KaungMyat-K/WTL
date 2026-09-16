import type { ServiceItem } from "../../types/index1";
import LearnMoreLink from "../ui/LearnMoreLink";

interface ServiceRowProps {
  service: ServiceItem;
  isLast: boolean;
  learnMoreText?: string;
  href: string;
}

function SereviceCard({
  service,
  isLast,
  learnMoreText,
  href,
}: ServiceRowProps) {
  return (
    <div
      key={service.id}
      className={`group ${
        !isLast
          ? "border-b border-gray-200 pb-10 sm:pb-12 md:pb-14 lg:pb-16 mb-10 sm:mb-12 md:mb-14 lg:mb-16"
          : "pb-10 sm:pb-12 md:pb-14 lg:pb-16"
      }`}
    >
      <div className="mb-8 sm:mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 sm:mb-6 md:mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl">
              {service.shortDescription}
            </p>
          </div>

          <LearnMoreLink
            href={href}
            className="inline-flex"
            title={learnMoreText}
          />
        </div>
      </div>

      <div className="relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden rounded-xl">
        <img
          src={service.img.src}
          alt={service.img.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    </div>
  );
}

export default SereviceCard;
