import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site1";
import { Icons } from "../icons";

interface SocialLinksProps {
  title: string;
}

function SocialLinks({ title }: SocialLinksProps) {
  return (
    <div className="flex flex-row items-start justify-between lg:block lg:text-left">
      <h4 className="text-lg font-bold text-white mb-4">{title}</h4>
      <div className="flex items-center gap-3">
        {siteConfig.socialLinks.map((social) => {
          const Icon = Icons[social.id as keyof typeof Icons];

          return (
            <Link
              key={social.id}
              to={social.href}
              aria-label={social.label}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon && (
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-secondary transition-colors duration-300" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;
