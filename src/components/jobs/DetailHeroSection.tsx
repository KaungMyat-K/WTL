export interface JobHeaderProps {
  title?: string;
  className?: string;
}

function DetailHeroSection({
  title = "Senior Logistics Manager",
  className = "",
}: JobHeaderProps) {
  return (
    <section
      className={`relative bg-gray-900 -mt-12 pt-32 pb-10 sm:pb-12 md:pb-16 lg:pt-40 lg:pb-20  xl:pb-28 2xl:pb-36 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}

export default DetailHeroSection;
