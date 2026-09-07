export interface BlogHeroProps {
  title?: string;
  subtitle?: string;
}

function HeroSection({
  title = "Explore Our Blog",
  subtitle = "Want to Know What's Moving the Industry?",
}: BlogHeroProps) {
  return (
    <section className="relative bg-[#e7eef1] -mt-12 pt-10 sm:pt-12 md:pt-14 lg:pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24 text-center">
        <span className="inline-block text-gray-800 text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-5 md:mb-6">
          {subtitle}
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight mb-4">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
