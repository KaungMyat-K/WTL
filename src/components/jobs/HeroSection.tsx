export interface CareerHeroProps {
  badgeText?: string;
  title?: string;
  className?: string;
}

function HeroSection({
  badgeText = "Career",
  title = "Join the Team That Keeps Business Moving",
  className = "",
}: CareerHeroProps) {
  return (
    <section className={`relative bg-[#e7eef1] -mt-20 pt-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <span className="inline-block text-secondary text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 sm:mb-6">
          {badgeText}
        </span>

        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-800 mb-4">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
