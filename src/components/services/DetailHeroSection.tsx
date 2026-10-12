import { Link } from "react-router-dom";
import { ROUTES } from "../../config/site1";

interface DetailHeroSectionProps {
  title: string;
  img: string;
  parentLabel: string;
}

function DetailHeroSection({
  title,
  img,
  parentLabel,
}: DetailHeroSectionProps) {
  return (
    <section className="-mt-12 pt-24 md:pt-32 lg:pt-36">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary mb-6 sm:mb-8 md:mb-10">
            {title}
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 sm:gap-2 text-xs md:text-lg text-gray-400 mb-6 sm:mb-8 md:mb-10 min-w-0"
          >
            {/* Parent Services Link */}
            <Link
              to={ROUTES.SERVICES}
              className="hover:text-secondary transition-colors shrink-0 max-w-[120px] sm:max-w-none truncate"
            >
              {parentLabel}
            </Link>

            {/* Separator */}
            <span
              aria-hidden="true"
              className="text-gray-400 shrink-0 select-none"
            >
              ›
            </span>

            {/* Current Service Title */}
            <span
              className="text-secondary font-medium truncate min-w-0 max-w-[160px] xs:max-w-[220px] sm:max-w-[340px] md:max-w-md lg:max-w-xl"
              title={title}
            >
              {title}
            </span>
          </nav>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default DetailHeroSection;
