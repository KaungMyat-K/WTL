import logoImg from "../assets/logo.png";
import type { Language, LinkItem } from "../types/index1";
import ukFlagImg from "../assets/uk.png";
import thFlagImg from "../assets/th.png";

const EXTERNAL_ROUTES = {
  CUSTOMER_PORTAL: "https://www.facebook.com",
  NEW_CUSTOMER_QUOTE: "https://www.facebook.com",
  EXISTING_CUSTOMER_QUOTE: "https://www.facebook.com",
  FACEBOOK: "https://www.facebook.com",
  LINKEDIN: "https://www.linkedin.com",
};

const ROUTES = {
  HOME: "/",
  SERVICE: "services",
  SERVICE_DETAIL: (slug: string) => `/services/${slug}`,
  JOBS: "jobs",
  BLOGS: "blogs",
  CONTACT: "contact",
};

const NAV_LINKS: LinkItem[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Service", href: ROUTES.SERVICE },
  { label: "Jobs", href: ROUTES.JOBS },
  { label: "Blogs", href: ROUTES.BLOGS },
  { label: "Contact Us", href: ROUTES.CONTACT },
];

const LANGUAGES: Language[] = [
  {
    code: "en",
    name: "English",
    img: {
      id: "lang-en",
      src: ukFlagImg,
      alt: "UK Flag",
    },
  },
  {
    code: "th",
    name: "Thai",
    img: {
      id: "lang-th",
      src: thFlagImg,
      alt: "Thai Flag",
    },
  },
];

const SERVICE_LINKS: LinkItem[] = [
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

const SOCIAL_LINKS: LinkItem[] = [
  { label: "Facebook", href: EXTERNAL_ROUTES.FACEBOOK },
  { label: "LinkedIn", href: EXTERNAL_ROUTES.LINKEDIN },
];

export const siteConfig = {
  logo: logoImg,
  name: "WTL",
  description: "A WTL build with react router.",
  language: LANGUAGES,
  externalRoutes: EXTERNAL_ROUTES,
  navLinks: NAV_LINKS,
  serviceLinks: SERVICE_LINKS,
  socialLinks: SOCIAL_LINKS,
};

export type SiteConfig = typeof siteConfig;
