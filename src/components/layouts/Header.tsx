import { useState } from "react";
import type { Language } from "../../types";
import NavLinks from "./NavLinks";
import LanguageDropdown from "./LanguageDropdown";
import MobileMenu from "./MobileMenu";
import { LANGUAGES, Logo, NAV_LINKS, ROUTES } from "../../config/site";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function Header() {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [currentLang, setCurrentLang] = useState<Language>(LANGUAGES[0]);

  const handleClick = () => {
    window.open(ROUTES.CUSTOMER_PORTAL, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <nav className="sticky top-0 z-50 bg-transparent">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left: Logo & Links */}
            <div className="flex items-center space-x-2 xs:space-x-4 sm:space-x-8 gap-1">
              <div className="flex-shrink-0 flex items-center bg-white rounded-md shadow-md mt-1">
                <img
                  src={Logo}
                  alt="WTL Logo"
                  className="h-7 sm:h-8 md:h-9 w-auto"
                />
              </div>
              <NavLinks links={NAV_LINKS} />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <LanguageDropdown
                languages={LANGUAGES}
                currentLang={currentLang}
                onSelectLanguage={setCurrentLang}
              />
              <Button
                onClick={handleClick}
                name="Customer Portal"
                className="hidden lg:inline-flex items-center gap-2 text-white bg-secondary text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-md shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              />

              {/*  Hamburger Toggle */}
              <div className="flex lg:hidden items-center">
                <button
                  onClick={() => setIsMobileOpen((prev) => !prev)}
                  className="inline-flex items-center justify-center p-1.5 sm:p-2 shadow-md rounded-md text-secondary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-secondary"
                  aria-expanded={isMobileOpen}
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    {isMobileOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        links={NAV_LINKS}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
}

export default Header;
