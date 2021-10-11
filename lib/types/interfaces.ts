import { Document as RichText } from "@contentful/rich-text-types";

import { SectionTypes } from "@lib/types/enums";
import { MediaHolder, Button, CTAHeadingSize, Input } from "@lib/types/types";

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
  image: MediaHolder;
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
  image: MediaHolder;
  leftIcon: MediaHolder;
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
  leftArrow: MediaHolder;
  rightArrow: MediaHolder;
  cardsCollection: {
    items: [TestimonialsCollectionItem];
  };
}

export interface RecentProjectsCollectionItem {
  title: string;
  heading: string;
  excerpt: string;
  featuredImage: MediaHolder;
}

export interface RecentProjectsSection extends DynamicSection {
  topHeading: string;
  heading: string;
  leftArrow: MediaHolder;
  rightArrow: MediaHolder;
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

export interface CTACollageSection extends DynamicSection {
  topHeading: string;
  heading: string;
  headingSize: "medium";
  ctaDescription: { json: RichText };
  button: Button;
  image: MediaHolder;
}

export interface NewsletterSection extends DynamicSection {
  heading: string;
  input: Input;
  description: string;
  button: Button;
}

export interface RotatingRingSection extends DynamicSection {
  topHeading: string;
  heading: string;
  description: string;
  button: Button;
  mediaHolder: MediaHolder;
}

export interface GridSectionCollectionItem {
  title: string;
  heading: string;
  description: string;
  image: MediaHolder;
}

export interface GridSectionTypes extends DynamicSection {
  gridCardsCollection: {
    items: GridSectionCollectionItem[];
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
