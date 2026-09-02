import { Logo, NAV_LINKS, SERVICE_LINKS } from "../../config/site";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-row items-center gap-4 lg:block lg:space-y-4">
            <div className="flex items-center gap-3 flex-shrink-0">
              <img src={Logo} alt="WTL Logo" className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm text-left">
              We provide end-to-end logistics services to meet all your shipping
              and supply chain needs worldwide.
            </p>
          </div>

          <FooterColumn title="Quick Links" links={NAV_LINKS} />

          <FooterColumn title="Our Services" links={SERVICE_LINKS} />

          <SocialLinks />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} WTL Logistics
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary text-sm transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
