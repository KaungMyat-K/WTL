import type { ServiceKeyFeatures } from "../../types/index1";
import { Icons } from "../icons";

export interface KeyFeatureProps {
  features: ServiceKeyFeatures;
}

function KeyFeatureSection({ features }: KeyFeatureProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#e7eef1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary">
            {features.primaryTitle}{" "}
            <span className="text-gray-800 block sm:inline">
              {features.secondaryTitle}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-24">
          {features.features?.map((feature) => {
            const IconComponent = Icons[feature.id as keyof typeof Icons];

            return (
              <div key={feature.id}>
                <div className="flex flex-col items-start">
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 sm:w-8 sm:h-8 md:w-12 md:h-12 text-secondary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-lg md:text-2xl lg:text-2xl font-medium text-gray-800 mb-2 sm:mb-3">
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
