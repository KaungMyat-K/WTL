import type { LinkItem } from "../../types";

interface FooterColumnProps {
  title: string;
  links: LinkItem[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-row items-start justify-between lg:block lg:text-left">
      <h4 className="text-lg font-bold text-white flex-shrink-0">{title}</h4>
      <ul className="space-y-2.5 text-right lg:text-left lg:mt-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm inline-block"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
