import { Document as RichText } from "@contentful/rich-text-types";

import { SectionTypes } from "@lib/types/enums";
import { Image, Button, CTAHeadingSize } from "@lib/types/types";

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

export interface TestimonialsCollectionItem {
  title: string;
  heading: string;
  subHeading: string;
  desctipion: { json: RichText };
}

export interface TestimonialsSection extends DynamicSection {
  topHeading: string;
  heading: string;
  leftArrow: Image;
  rightArrow: Image;
  cardsCollection: {
    items: [TestimonialsCollectionItem];
  };
}

export interface RecentProjectsCollectionItem {
  title: string;
  heading: string;
  excerpt: string;
  featuredImage: Image;
}

export interface RecentProjectsSection extends DynamicSection {
  topHeading: string;
  heading: string;
  leftArrow: Image;
  rightArrow: Image;
  recentProjectsCollection: {
    items: [RecentProjectsCollectionItem];
  };
}

export interface CTASection extends DynamicSection {
  heading: string;
  headingSize: CTAHeadingSize;
  ctaDescription: { json: RichText };
  button: Button;
}

export interface DynamicPage {
  page: {
    title: string;
    sectionsCollection: {
      items: [DynamicSection];
    };
  };
}