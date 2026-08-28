import React, { useEffect } from "react";
import type { NavLinkItem } from "../../types";
import Button from "../ui/Button";
import { ROUTES } from "../../config/site";

interface MobileMenuProps {
  isOpen: boolean;
  links: NavLinkItem[];
  onClose: () => void;
}

function MobileMenu({ isOpen, links, onClose }: MobileMenuProps) {
  const handleClick = () => {
    window.open(ROUTES.CUSTOMER_PORTAL, "_blank", "noopener,noreferrer");
  };

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
          <a
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="text-gray-700 hover:text-secondary font-medium transition-colors duration-200 px-3 py-2 w-full text-center"
          >
            {link.label}
          </a>
        ))}

        <Button
          onClick={handleClick}
          name="Customer Portal"
          className="text-white bg-secondary font-medium transition-all duration-200 px-3 py-2 rounded-md w-full text-center hover:bg-[#b6530e] active:scale-95"
        />
      </div>
    </div>
  );
}

export default MobileMenu;
