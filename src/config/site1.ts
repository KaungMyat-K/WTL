import type { Language, LinkItem } from "../types/index1";
import ukFlagImg from "../assets/uk.png";
import thFlagImg from "../assets/th.png";

const EXTERNAL_ROUTES = {
  CUSTOMER_PORTAL: "https://www.facebook.com",
  NEW_CUSTOMER_QUOTE: "https://www.facebook.com",
  EXISTING_CUSTOMER_QUOTE: "https://www.facebook.com",
  FACEBOOK: "",
  INSTAGRAM: "",
  LINKEDIN: "",
  YOUTUBE: "",
  LINE: "",
};

const ROUTES = {
  HOME: "/",
  SERVICE: "/services",
  SERVICE_DETAIL: (slug: string) => `/services/${slug}`,
  JOBS: "/jobs",
  BLOGS: "/news",
  CONTACT: "/contact",
};

const NAV_LINKS: LinkItem[] = [
  { id: "home", label: "", href: ROUTES.HOME },
  { id: "services", label: "", href: ROUTES.SERVICE },
  { id: "jobs", label: "", href: ROUTES.JOBS },
  { id: "blogs", label: "", href: ROUTES.BLOGS },
  { id: "contact", label: "", href: ROUTES.CONTACT },
];

const LANGUAGES: Language[] = [
  {
    id: "en",
    name: "English",
    img: {
      id: "en",
      src: ukFlagImg,
      alt: "en",
    },
  },
  {
    id: "th",
    name: "Thai",
    img: {
      id: "th",
      src: thFlagImg,
      alt: "th",
    },
  },
];

const SERVICE_LINKS: LinkItem[] = [
  {
    id: "sea-freight",
    label: "",
    href: ROUTES.SERVICE_DETAIL("sea-freight"),
  },
  {
    id: "land-freight",
    label: "",
    href: ROUTES.SERVICE_DETAIL("land-freight"),
  },
  {
    id: "air-freight",
    label: "",
    href: ROUTES.SERVICE_DETAIL("air-freight"),
  },
  {
    id: "warehousing-&-trucking",
    label: "",
    href: ROUTES.SERVICE_DETAIL("warehousing-&-trucking"),
  },
  {
    id: "local-customs-clearance",
    label: "",
    href: ROUTES.SERVICE_DETAIL("local-customs-clearance"),
  },
  {
    id: "special-project-cargo",
    label: "",
    href: ROUTES.SERVICE_DETAIL("special-project-cargo"),
  },
  {
    id: "combined-logistics",
    label: "",
    href: ROUTES.SERVICE_DETAIL("combined-logistics"),
  },
];

const SOCIAL_LINKS: LinkItem[] = [
  { id: "facebook", label: "Facebook", href: EXTERNAL_ROUTES.FACEBOOK },
  { id: "instagram", label: "Instagram", href: EXTERNAL_ROUTES.INSTAGRAM },
  { id: "linkedin", label: "LinkedIn", href: EXTERNAL_ROUTES.LINKEDIN },
  { id: "youtube", label: "Youtube", href: EXTERNAL_ROUTES.YOUTUBE },
  { id: "line", label: "Line", href: EXTERNAL_ROUTES.LINE },
];

export const siteConfig = {
  language: LANGUAGES,
  externalRoutes: EXTERNAL_ROUTES,
  navLinks: NAV_LINKS,
  serviceLinks: SERVICE_LINKS,
  socialLinks: SOCIAL_LINKS,
};

export type SiteConfig = typeof siteConfig;
