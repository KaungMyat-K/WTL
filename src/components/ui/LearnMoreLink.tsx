import { Link } from "react-router-dom";
import { Icons } from "../icons";

interface LearnMoreLinkProps {
  className?: string;
  href: string;
  title: string;
}

function LearnMoreLink({ className, href, title }: LearnMoreLinkProps) {
  return (
    <Link
      to={href}
      className={`group items-center text-secondary font-medium relative ${className}`}
    >
      <span className="relative inline-block pb-1 text-base sm:text-lg md:text-xl lg:text-2xl">
        {title}
      </span>
      <Icons.rightTopArrow
        strokeWidth="2.5"
        className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 ml-1"
      />
    </Link>
  );
}

export default LearnMoreLink;
