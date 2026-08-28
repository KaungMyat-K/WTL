import seaFreightImg from "../../assets/home/ship-pic.jpg";
import airCargoImg from "../../assets/home/air-pic.jpg";
import storageImg from "../../assets/home/road-pic.jpg";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SlideData } from "../../types";

const SLIDES: SlideData[] = [
  {
    id: 0,
    image: seaFreightImg,
    alt: "Logistics and Shipping",
    titlePrimary: "RELIABLE SEA FREIGHT",
    titleSecondary: "SOLUTIONS",
    description:
      "Connecting businesses worldwide with efficient and cost-effective shipping solutions.",
    buttonText: "Get A Quote",
  },
  {
    id: 1,
    image: airCargoImg,
    alt: "Air Freight",
    titlePrimary: "FAST & SECURE",
    titleSecondary: "AIR CARGO",
    description:
      "Time-sensitive deliveries made easy with our premium air freight services across the globe.",
    buttonText: "Get A Quote",
  },
  {
    id: 2,
    image: storageImg,
    alt: "Warehouse and Logistics",
    titlePrimary: "SMART STORAGE",
    titleSecondary: "SOLUTIONS",
    description:
      "State-of-the-art warehousing and distribution centers to optimize your supply chain.",
    buttonText: "Get A Quote",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

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
      className="relative w-full lg:h-screen h-[96vh] md:h-[80vh] overflow-hidden bg-gray-900 -mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
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
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-3xl px-4 sm:px-6 lg:px-10 pt-10">
                  <h1 className="text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-secondary mb-3 sm:mb-4">
                    {slide.titlePrimary} <br />
                    <span className="text-white">{slide.titleSecondary}</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-xl text-gray-200 mb-6 sm:mb-8">
                    {slide.description}
                  </p>
                  <div>
                    <button
                      type="button"
                      className="group inline-flex items-center gap-3 sm:gap-5 text-white bg-secondary text-base sm:text-lg md:text-xl lg:text-xl pr-3 sm:pr-3 pl-5 sm:pl-6 py-2 sm:py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      {slide.buttonText}
                      <span className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-full bg-[#1f2937] text-white overflow-hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          className="w-4 h-4 sm:w-4 sm:h-4 md:w-4 md:h-4 transition-transform duration-300 group-hover:-translate-y-6 group-hover:translate-x-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          className="w-3 h-3 sm:w-3 sm:h-3 md:w-3 md:h-3 absolute -translate-x-6 translate-y-6 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/*Indicators */}
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
