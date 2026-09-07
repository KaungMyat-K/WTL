import LocationList from "./LocationList";
import mapBg from "../../assets/home/w1.png";

interface HeroLocationProps {
  imageSrc?: string;
  imageAlt?: string;
  subtitle?: string;
  titleLine1?: string;
  titleLine2?: string;
}

function ContactSection({
  imageSrc = mapBg,
  imageAlt = "Locations",
  subtitle = "Find Us Here",
  titleLine1 = "WE WORK ALL",
  titleLine2 = "OVER THE WORLD",
}: HeroLocationProps) {
  return (
    <section className="relative overflow-hidden bg-gray-900  ">
      {/* Background Image for Desktop */}
      <div className="hidden md:block absolute inset-0 mt-52 mb-32">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl relative">
          {/* Background image for mobile only */}
          <div className="absolute inset-0 -mx-4 sm:mx-0 sm:hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 px-4 sm:px-0 py-8 sm:py-0">
            <span className="inline-block text-secondary text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
              {subtitle}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-50 leading-tight">
              {titleLine1} <br className="hidden sm:block" />
              {titleLine2}
            </h1>
          </div>
        </div>
        <LocationList />
      </div>
    </section>
  );
}

export default ContactSection;
