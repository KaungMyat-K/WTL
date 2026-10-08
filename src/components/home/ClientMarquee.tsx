import { useTranslation } from "react-i18next";
import ClientLogoItem from "../ui/ClientLogo";
import { useQuery } from "@tanstack/react-query";
import { fetchNetworksQuery } from "../../api/query";
import { useEffect, useRef, useState } from "react";

function ClientMarquee() {
  const { t } = useTranslation();
  const {
    data: networks = [],
    isPending,
    isError,
  } = useQuery(fetchNetworksQuery());

  const trackRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(2);
  const shiftPercent = 100 / repeat;

  useEffect(() => {
    if (!networks.length) return;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;

      const containerWidth = track.parentElement?.offsetWidth ?? 0;
      if (containerWidth === 0) return;

      const oneSetWidth = track.scrollWidth / repeat;
      if (oneSetWidth === 0) return;

      const needed = Math.ceil((containerWidth * 2) / oneSetWidth) + 1;

      if (needed !== repeat) setRepeat(needed);
    };
    const raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    if (trackRef.current?.parentElement) {
      ro.observe(trackRef.current.parentElement);
    }
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [networks, repeat]);

  if (!isPending && !isError && networks.length === 0) {
    return null;
  }

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-lg sm:text-lg md:text-lg text-gray-400 tracking-wider">
            {t("home.clients.title")}
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <style>{`
            @keyframes marquee-scroll {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-${shiftPercent}%); }
            }
          `}</style>

          <div
            ref={trackRef}
            className="marquee-track flex w-max"
            style={{
              animation: `marquee-scroll 20s linear infinite`,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {Array.from({ length: repeat }).map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex flex-shrink-0 items-center"
                aria-hidden={setIndex > 0}
              >
                {networks.map((logo) => (
                  <ClientLogoItem
                    key={`set${setIndex}-${logo.name}`}
                    logo={logo}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

export default ClientMarquee;
