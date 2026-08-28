import React from "react";
import { SERVICES_DATA } from "../../static/serviceData";

function KeyFeatureSection() {
  const activeService =
    SERVICES_DATA.find((service) => service.id === "road-freight") ||
    SERVICES_DATA[0];
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary">
            KEY FEATURES{" "}
            <span className="text-gray-800 block sm:inline">
              OF {activeService.title.toUpperCase()} SERVICE
            </span>
          </h2>
        </div>

        {/* Feature Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24">
          {activeService.keyFeatures.map((feature) => {
            const Icon = feature.icon as React.ComponentType<{
              className?: string;
            }>;

            return (
              <div key={feature.id}>
                <div className="flex flex-col items-start">
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    {typeof feature.icon === "string" ? (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12"
                      />
                    ) : (
                      <Icon className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 text-secondary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-md">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatureSection;
