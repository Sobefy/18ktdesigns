export enum ContentfulPageSections {
  HERO_SECTION = "hero_section",
}

export interface ContentfulImage {
  url: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export interface ContentfulButton {
  text: string;
  primary: boolean;
}

export type Image = {
  title: string;
  description: string;
  fileName: string;
  contentType: "image/jpeg";
  width: number;
  height: number;
  size: number;
  url: string;
};

export type Button = {
  primary: boolean;
  text: string;
};

export enum SectionTypes {
  heroSection = "heroSection",
  servicesSection = "servicesSection",
  testimonials = "testimonials",
  recentProjects = "recentProjects",
  cta = "cta",
  ctaCollage = "ctaCollage",
  jewelryTypeSection = "jewelryTypeSection",
  newsletterSection = "newsletterSection",
}

export interface DynamicSection {
  title: string;
  type: SectionTypes;
  sys: {
    id: string;
  };
}
export interface HeroSection extends DynamicSection {
  type: SectionTypes.heroSection;
  topHeading: string;
  heading: string;
  description: string;
  image: Image;
  primaryAction: Button;
  secondaryAction: Button;
}

export interface ServicesCollectionItem {
  sys: {
    id: string;
  };
  title: string;
  heading: string;
  description: string;
}

export interface ServicesSection extends DynamicSection {
  heading: string;
  image: Image;
  leftIcon: Image;
  servicesCollection: {
    items: [ServicesCollectionItem];
  };
}

export interface DynamicPage {
  page: {
    title: string;
    sectionsCollection: {
      items: [DynamicSection];
    };
  };
}
