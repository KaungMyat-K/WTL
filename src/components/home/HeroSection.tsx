import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import type { HeroItem } from "../../types/index1";
import { useTranslation } from "react-i18next";
import { Images } from "../images";
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/site1";

function HeroSection() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const SLIDES = Images.home;

  const heroContent = t("home.hero.items", { returnObjects: true }) as HeroItem;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, [SLIDES.length]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="relative w-full lg:h-screen h-[96vh] md:h-[80vh] overflow-hidden bg-gray-900 -mt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`slide absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

              <div className="absolute inset-0 flex items-center md:pl-10 ">
                <div className="max-w-3xl px-4 sm:px-6 lg:px-10 pt-10">
                  <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-secondary mb-3 sm:mb-4">
                    {t("home.hero.items.primaryTitle")} <br />
                    <span className="text-white">
                      {t("home.hero.items.secondaryTitle")}
                    </span>
                  </h1>
                  <p className="text-md sm:text-md md:text-xl text-gray-200 mb-6 sm:mb-8  md:max-w-sm lg:max-w-md ">
                    {heroContent.description}
                  </p>
                  <div>
                    <Button
                      variant="primary"
                      className=" px-5 sm:px-5 md:px-9 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-sm md:text-base lg:text-xl"
                      asChild
                    >
                      <Link to={ROUTES.CONTACT}>
                        {t("button.contactUsButton")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {SLIDES.map((_, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-sm transition-all duration-300 ${
                isActive
                  ? "bg-secondary w-8 sm:w-10 md:w-12"
                  : "bg-white/40 w-4 sm:w-5 md:w-6 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}

export default HeroSection;
