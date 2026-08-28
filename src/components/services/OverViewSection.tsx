export interface CargoSectionProps {
  title?: string;
  description?: string;
  className?: string;
}

function OverViewSection({
  title = "Moving Your Cargo Across the Globe",
  description = `Our air freight services offer fast, reliable, and cost-effective
    solutions for time-sensitive shipments. With a global network and
    priority handling, we ensure your cargo reaches its destination on
    time, every time. Whether you need express delivery or scheduled air
    cargo, our team of experts is dedicated to providing seamless
    logistics solutions tailored to your specific requirements.`,
  className = "",
}: CargoSectionProps) {
  return (
    <section className={`py-12 sm:py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export default OverViewSection;
