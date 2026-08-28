interface LearnMoreLinkProps {
  className?: string;
  href?: string;
}

function LearnMoreLink({ className = "", href = "#" }: LearnMoreLinkProps) {
  return (
    <a
      href={href}
      className={`group items-center text-secondary font-medium relative ${className}`}
    >
      <span className="relative inline-block pb-1">Learn More</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="3"
        stroke="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-1 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}

export default LearnMoreLink;
