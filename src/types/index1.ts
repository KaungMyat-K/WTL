export type Language = {
  id: string;
  name: string;
  img: Image;
};

export type LinkItem = {
  id: string;
  label: string;
  href: string;
};

export type Image = {
  id: string;
  src: string;
  alt: string;
};

export type HeroItem = {
  id?: string;
  primaryTitle: string;
  secondaryTitle?: string;
  description?: string;
};

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
}

export interface ServiceOverview {
  title: string;
  content: string;
}

export interface ServiceKeyFeatures {
  primaryTitle: string;
  secondaryTitle?: string;
  features: FeatureItem[];
}

export interface ServiceDetails {
  overview: ServiceOverview;
  keyFeatures: ServiceKeyFeatures;
}

export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
  shortDescription?: string;
  details: ServiceDetails;
  img?: Image;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export interface ContactPerson {
  name: string;
  email: string;
  label?: string;
}

export interface Location {
  city: string;
  isHQ?: boolean;
  companyName: string;
  address: string;
  phone: string;
  taxId?: string;
  contacts: ContactPerson[];
}
