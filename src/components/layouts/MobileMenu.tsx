import { useEffect } from "react";
import type { LinkItem } from "../../types";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site1";

interface MobileMenuProps {
  isOpen: boolean;
  links: LinkItem[];
  onClose: () => void;
  btnText: string;
}

function MobileMenu({ isOpen, links, onClose, btnText }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed right-4 top-16 w-52 bg-gradient-to-r from-[#fcf7f2] to-white border border-gray-200 px-4 pt-2 pb-4 shadow-md rounded-md z-[100]">
      <div className="flex flex-col items-center space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={onClose}
            className="text-gray-700 hover:text-secondary font-medium transition-colors duration-200 px-3 py-2 w-full text-center"
          >
            {link.label}
          </Link>
        ))}

        <Button
          variant="primary"
          className="w-full px-3 py-2 text-center"
          asChild
        >
          <Link
            to={siteConfig.externalRoutes.CUSTOMER_PORTAL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {btnText}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
