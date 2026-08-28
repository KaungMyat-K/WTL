import { FEATURES, SERVICES_DATA } from "../../static/serviceData";

function ServiceSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP: Header Left + Text Right */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-32 mb-16 md:mb-24 lg:mb-32">
          {/* Left: Header */}
          <div className="lg:w-5/12 w-full">
            <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 text-center lg:text-left">
              What We <span className="text-secondary">Offer</span>
            </h2>
          </div>

          {/* Right: Text */}
          <div className="lg:w-7/12 w-full">
            <p className="text-gray-600 text-xs sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
              We provide comprehensive logistics solutions tailored to meet your
              business needs. From sea and air freight to road and rail
              transportation, we offer reliable services across the globe.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-4">
              {FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs sm:text-sm text-gray-600">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services List */}
        <div>
          {SERVICES_DATA.map((service, index) => {
            const isLast = index === SERVICES_DATA.length - 1;

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
                        {service.description}
                      </p>
                    </div>

                    <a
                      href={service.href}
                      className="inline-flex items-center text-secondary font-medium"
                    >
                      <span className="text-base sm:text-lg md:text-xl">
                        Learn More
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden rounded-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
