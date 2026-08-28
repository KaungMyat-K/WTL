import React from "react";

export interface ApplySectionProps {
  sectionTag?: string;
  titleLine1?: string;
  titleLine2?: string;
  buttonText?: string;
  href?: string;
  onApplyClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function ApplySection({
  sectionTag = "Apply Now",
  titleLine1 = "Sounds Interesting?",
  titleLine2 = "Make Your Move Today!",
  buttonText = "Apply Now",
  href = "#",
  onApplyClick,
}: ApplySectionProps) {
  return (
    <section className="bg-gray-50 pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <span className="mb-4 sm:mb-5 lg:mb-7 inline-block text-base sm:text-lg lg:text-xl font-normal text-secondary">
            {sectionTag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
            {titleLine1}
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary">
            {titleLine2}
          </h2>
        </div>

        {/* Apply Button */}
        <a
          href={href}
          onClick={onApplyClick}
          className="group inline-flex items-center gap-2 border border-gray-900 text-gray-900 px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-white"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
