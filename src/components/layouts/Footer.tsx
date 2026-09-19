import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "../../config/site1";
import { Images } from "../images";
import type { LinkItem } from "../../types/index1";
import type { ServiceItem } from "../../types";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const navLinks: LinkItem[] = siteConfig.navLinks.map((link) => ({
    ...link,
    label: t(`nav.links.${link.id}`),
  }));

  const services = t("services.servicesList.items", {
    returnObjects: true,
  }) as ServiceItem[];
  const serviceLinks: LinkItem[] = services.map((service) => {
    const link = siteConfig.serviceLinks.find((item) => item.id === service.id);
    return {
      id: service.id,
      label: service.title,
      href: link?.href ?? "#",
    };
  });

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="flex flex-col items-start gap-4 lg:block lg:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3 sm:gap-6 lg:flex-col lg:items-start lg:gap-4">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-3 flex-shrink-0">
                  <img
                    src={Images.logo.src}
                    alt={Images.logo.alt}
                    className="h-10 sm:h-12 w-auto"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm text-left">
                  {t("nav.footer.description")}
                </p>
              </div>

              <div className="flex flex-row items-center gap-3 mt-2 sm:flex-col sm:items-stretch lg:flex-col lg:items-start lg:mt-0">
                <Link
                  to={siteConfig.externalRoutes.CUSTOMER_PORTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    className="flex-1 lg:flex-none lg:w-auto px-4 sm:px-5 py-2.5 text-sm"
                  >
                    {t("button.customerPortalButton")}
                  </Button>
                </Link>
                <Link
                  to={siteConfig.externalRoutes.EMPLOYEE_PORTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="flex-1 lg:flex-none lg:w-auto px-4 sm:px-5 py-2.5 text-sm"
                  >
                    {t("button.employeePortalButton")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <FooterLinks title={t("nav.footer.company")} links={navLinks} />

          <FooterLinks title={t("nav.footer.services")} links={serviceLinks} />

          <SocialLinks title={t("nav.footer.followUs")} />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-row items-center justify-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} World Track Logistics
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
