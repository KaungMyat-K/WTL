import { NavLink } from "react-router-dom";
import type { LinkItem } from "../../types";

interface NavLinksProps {
  links: LinkItem[];
}

function NavLinks({ links }: NavLinksProps) {
  return (
    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 px-6 xl:px-6">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.href}
          className={({ isActive }) =>
            `text-md font-medium transition-colors duration-200 pb-1 whitespace-nowrap ${
              isActive ? "text-secondary" : "text-gray-700 hover:text-secondary"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
