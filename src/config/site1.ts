import type { Language, LinkItem } from "../types/index1";
import ukFlagImg from "../assets/uk.png";
import thFlagImg from "../assets/th.png";

const EXTERNAL_ROUTES = {
  CUSTOMER_PORTAL: "",
  EMPLOYEE_PORTAL: "https://fms.yunwuyun.com/#/login?tenantCode=",
  NEW_CUSTOMER: "",
  EXISTING_CUSTOMER:
    "https://fms.yunwuyun.com/routes-ywy.html?tenantCode=SDyvKQ92Ud63fbpRFJ1L2g%3D%3D/",
  FACEBOOK: "",
  INSTAGRAM: "",
  LINKEDIN: "",
  YOUTUBE: "",
  LINE: "",
};

export const ROUTES = {
  HOME: "/",
  SERVICES: "/services",
  SERVICE_DETAIL: (slug: string) => `/services/${slug}`,
  JOBS: "/jobs",
  NEWS: "/news",
  CONTACT: "/contact",
  OFFICES: "/offices",
};

const NAV_LINKS: LinkItem[] = [
  { id: "home", label: "", href: ROUTES.HOME },
  { id: "services", label: "", href: ROUTES.SERVICES },
  { id: "jobs", label: "", href: ROUTES.JOBS },
  { id: "news", label: "", href: ROUTES.NEWS },
  { id: "offices", label: "", href: ROUTES.OFFICES },
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
