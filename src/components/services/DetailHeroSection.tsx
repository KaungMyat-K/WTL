interface DetailHeroSectionProps {
  title: string;
  img: string;
  category: string;
}

function DetailHeroSection({ title, img, category }: DetailHeroSectionProps) {
  return (
    <section className="-mt-12 pt-28 md:pt-32 lg:pt-40">
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary mb-6 sm:mb-8 md:mb-10">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-xs md:text-sm lg:text-sm text-gray-400 mb-6 sm:mb-8 md:mb-10">
            <span>{category}</span>
            <span>›</span>
            <span className="text-secondary">{title}</span>
          </div>
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
