import { siteConfig } from "../../config/site1";
import { Icons } from "../icons";

function SocialLinks() {
  return (
    <div className="flex flex-row items-start justify-between lg:block lg:text-left">
      <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
      <div className="flex items-center gap-3">
        {siteConfig.socialLinks.map((social) => {
          const Icon = Icons[social.id as keyof typeof Icons];

          return (
            <a
              key={social.id}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
            >
              {Icon && (
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white hover:text-secondary transition-colors duration-300" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SocialLinks;
