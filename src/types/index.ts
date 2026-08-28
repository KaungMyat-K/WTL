export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface SlideData {
  id: number;
  image: string;
  alt: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  buttonText: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  src: string;
}

export interface ClientMarquee {
  title: string;
  clients: ClientLogo[];
}

export interface KeyFeature {
  id: string | number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }> | React.ReactNode;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  href?: string;
  image: string;
  keyFeatures: KeyFeature[];
}

export interface BlogPost {
  id: string | number;
  title: string;
  date: string;
  imageUrl: string;
  href: string;
}

export interface Job {
  id: string | number;
  title: string;
  href?: string;
}
