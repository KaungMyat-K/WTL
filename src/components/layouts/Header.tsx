import { useState } from "react";
import NavLinks from "./NavLinks";
import LanguageDropdown from "./LanguageDropdown";
import MobileMenu from "./MobileMenu";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { Images } from "../images";
import { useTranslation } from "react-i18next";
import { Icons } from "../icons";
import type { Language, LinkItem } from "../../types/index1";
import { ROUTES, siteConfig } from "../../config/site1";

function Header() {
  const { t } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<Language>(
    siteConfig.language[0]
  );

  const navLinks: LinkItem[] = siteConfig.navLinks.map((link) => ({
    ...link,
    label: t(`nav.links.${link.id}`),
  }));

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-white/20 shadow-md">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 sm:h-14">
            <div className="flex items-center space-x-2 xs:space-x-4 sm:space-x-8 gap-1">
              <Link
                to={ROUTES.HOME}
                className="flex-shrink-0 flex items-center bg-white mt-1"
              >
                <img
                  src={Images.logo.src}
                  alt={Images.logo.alt}
                  className="h-8 sm:h-9 md:h-10 w-auto"
                />
              </Link>
              <NavLinks links={navLinks} />
            </div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <LanguageDropdown
                languages={siteConfig.language}
                currentLang={currentLang}
                onSelectLanguage={setCurrentLang}
              />

              <Button
                variant="primary"
                className="hidden lg:inline-block  px-4 py-2 text-sm"
                asChild
              >
                <Link
                  to={siteConfig.externalRoutes.CUSTOMER_PORTAL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("button.customerPortalButton")}
                </Link>
              </Button>

              {/*  Hamburger Toggle */}
              <div className="flex lg:hidden items-center">
                <Button
                  variant="ghost"
                  onClick={() => setIsMobileOpen((prev) => !prev)}
                  aria-expanded={isMobileOpen}
                  className="p-1.5 sm:p-2 bg-gray-50 text-secondary hover:bg-gray-100 focus:ring-2 focus:ring-secondary"
                >
                  <span className="sr-only">Toggle menu</span>

                  {isMobileOpen ? (
                    <Icons.hamburger
                      strokeWidth="2"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  ) : (
                    <Icons.exit
                      strokeWidth="2"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileOpen}
        links={navLinks}
        onClose={() => setIsMobileOpen(false)}
        btnText={t("button.customerPortalButton")}
      />
    </>
  );
}

export default Header;
