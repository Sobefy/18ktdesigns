import { Document } from "@contentful/rich-text-types";

import { SectionTypes } from "@lib/types/enums";
import { Image, Button } from "@lib/types/types";

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
  desctipion: { json: Document };
}

export interface TestimonialsSection extends DynamicSection {
  topHeading: string;
  heading: string;
  cardsCollection: {
    items: [TestimonialsCollectionItem];
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
