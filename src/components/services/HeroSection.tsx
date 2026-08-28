export interface ServiceTag {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

// Data array for top row service tags
const PRIMARY_SERVICES: ServiceTag[] = [
  { label: "Sea Freight", href: "#sea-freight" },
  { label: "Air Freight", href: "#air-freight" },
  { label: "Road Freight", href: "#road-freight" },
  { label: "Rail Freight", href: "#rail-freight" },
];

// Data array for bottom row service tags
const SECONDARY_SERVICES: ServiceTag[] = [
  { label: "Full Container Load", href: "#fcl" },
  { label: "Less Than Container Load", href: "#lcl" },
];

// Data array for stats
const STATS: StatItem[] = [
  { value: "10K+", label: "Shipments Delivered" },
  { value: "50+", label: "Countries Served" },
  { value: "99%", label: "Satisfaction Rate" },
];

function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 xl:py-40 -mt-20 w-full lg:h-[60vh] xl:h-screen overflow-hidden flex items-center bg-gray-50">
      {/* Radial Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="mt-8 sm:mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-4 sm:mb-6">
          Seamless Shipping Solutions
          <br />
          <span className="text-gray-800">for Global Logistics</span>
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-xs md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          We provide end-to-end logistics services to meet all your shipping and
          supply chain needs. From sea and air freight to road and rail
          transportation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4 sm:pt-8">
          {/* First Row */}
          {PRIMARY_SERVICES.map((service) => (
            <a
              key={service.label}
              href={service.href}
              className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-transparent hover:bg-secondary text-gray-800 hover:text-white rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border border-gray-800 hover:border-secondary hover:scale-105 hover:shadow-lg"
            >
              {service.label}
            </a>
          ))}

          {/* Second Row - Full width break */}
          <div className="w-full" />

          {/* Third Row */}
          {SECONDARY_SERVICES.map((service) => (
            <a
              key={service.label}
              href={service.href}
              className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-transparent hover:bg-secondary text-gray-800 hover:text-white rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border border-gray-800 hover:border-secondary hover:scale-105 hover:shadow-lg"
            >
              {service.label}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center mt-6 sm:mt-8 md:mt-10">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center px-4 sm:px-6 md:px-10 py-2 ${
                index !== 0 ? "border-l border-gray-200" : ""
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-secondary">
                {stat.value}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
