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

export interface HeroSection {
  type: ContentfulPageSections.HERO_SECTION;
  topHeading: string;
  title: string;
  description: string;
  heading: string;
  image: ContentfulImage;
  primaryAction: ContentfulButton;
  secondaryAction: ContentfulButton;
}

export interface Home {
  sectionsCollection: HeroSection[];
  type: "page_home";
}

export interface HomeResponse {
  pageCollection: {
    items: Home[];
  };
}
