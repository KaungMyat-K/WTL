import type { Language, LinkItem } from "../types";
import logoImg from "../assets/logo.png";
import ukFlagImg from "../assets/uk.png";
import thFlagImg from "../assets/th.png";

export const Logo = logoImg;

export const ROUTES = {
  HOME: "/",
  SERVICE: "/services",
  SERVICE_DETAIL: (slug: string) => `/services/${slug}`,
  JOBS: "/jobs",
  BLOGS: "/blogs",
  CONTACT: "/contact",
  CUSTOMER_PORTAL: "https://www.facebook.com",
  NEW_CUSTOMER_QUOTE: "/quote/new",
  EXISTING_CUSTOMER_QUOTE: "https://portal.yourdomain.com/quote",
} as const;

export const NAV_LINKS: LinkItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Service", href: ROUTES.SERVICE },
  { label: "Jobs", href: ROUTES.JOBS },
  { label: "Blogs", href: ROUTES.BLOGS },
  { label: "Contact Us", href: ROUTES.CONTACT },
];

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: ukFlagImg },
  { code: "th", name: "Thai", flag: thFlagImg },
];

// Fixed duplicate hrefs to map to correct endpoints
export const SERVICE_LINKS: LinkItem[] = [
  { label: "Sea Freight", href: ROUTES.SERVICE_DETAIL("sea-freight") },
  { label: "Road Freight", href: ROUTES.SERVICE_DETAIL("road-freight") },
  { label: "Air Freight", href: ROUTES.SERVICE_DETAIL("air-freight") },
  { label: "Rail Freight", href: ROUTES.SERVICE_DETAIL("rail-freight") },
  {
    label: "Full Container Load",
    href: ROUTES.SERVICE_DETAIL("full-container-load"),
  },
  {
    label: "Less than Container Load",
    href: ROUTES.SERVICE_DETAIL("less-than-container-load"),
  },
];
