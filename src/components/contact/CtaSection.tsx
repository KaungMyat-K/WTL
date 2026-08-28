import { ROUTES } from "../../config/site";
import Button from "../ui/Button";

export interface CtaSectionProps {
  title?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

function CtaSection({
  title = "Ready to Move Your Business Forward? Get in touch.",
  buttonLabel = "Get in Touch",
  onButtonClick,
}: CtaSectionProps) {
  const handleDefaultClick = () => {
    window.location.href = ROUTES.CONTACT;
  };
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 sm:gap-8">
          {/* Left: Text */}
          <div className="text-left w-full md:w-auto">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-light leading-tight">
              {title}
            </h2>
          </div>

          {/* Right: Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <Button
              onClick={onButtonClick || handleDefaultClick}
              name={buttonLabel}
              className="w-full md:w-auto inline-flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl font-medium transition-all duration-300 hover:bg-white hover:text-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
