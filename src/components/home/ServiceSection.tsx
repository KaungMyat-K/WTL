import { SERVICES_DATA } from "../../static/serviceData";
import ServiceCard from "../services/ServiceCard";
import Button from "../ui/Button";

function ServiceSection() {
  const handleExploreClick = () => {
    console.log("Exploring services...");
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#e7eef1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-36">
          <div className="lg:w-5/12 w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 text-center lg:text-left">
              COMPREHENSIVE <br />
              <span className="text-secondary">LOGISTICS</span> SOLUTIONS
            </h2>
          </div>

          <div className="lg:w-7/12 w-full">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
              We provide end-to-end logistics services to meet all your shipping
              and supply chain needs. From sea and air freight to road and rail
              transportation, we offer reliable solutions tailored to your
              business requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10 lg:gap-7 xl:gap-8">
          {SERVICES_DATA.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="text-center mt-16 sm:mt-16 md:mt-28">
          <Button
            name="Explore Our Service"
            className="group inline-flex items-center justify-center text-white bg-secondary px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-md font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 hover:bg-secondary/80 hover:scale-105 hover:shadow-xl min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
            onClick={handleExploreClick}
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
