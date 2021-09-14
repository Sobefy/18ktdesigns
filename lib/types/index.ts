export type gridItemsTypes={
  id: number;
  title:string;
  content:string;
  svg:string;
}
export type ListOption = {
  id: number;
  value: string;
  label: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageUnit?: "px" | "rem";
};

export type CarouselItem = {
  id: number;
  value: string;
  label: string;
  testimonial?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageUnit?: "px" | "rem";
  marriedSince?: string | number;
};

export type BlogCarouselItem = {
  id: number;
  value: string;
  label: string;
  summary?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageUnit?: "px" | "rem";
};

export type ServicesInfo = {
  id: number;
  title: string;
  description: string;
};

export type JewelryTypes = {
  id: number;
  title: string;
  content: string;
  img: string;
  textButton: string;
};

export type SocialNetworkLinkType = {
  id: number;
  socialIcon: string;
  url: string;
  target: string;
};

export type ListFooterType = {
  id: number;
  value: string;
  label: string;
  url: string;
  target: string;
};

export type BudgetOptions =
  | -1 // Note: -1 is repesenting the option ANY
  | 0 // Note: 0 is repesenting the option NULL
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200
  | 1500
  | 1600
  | 1700
  | 1800
  | 1900
  | 2000
  | 2100
  | 2200
  | 2300
  | 2400
  | 2500
  | 3000
  | 3500
  | 4000
  | 4500
  | 5000
  | 5500
  | 6000
  | 6500
  | 7000
  | 7500
  | 8000
  | 8500
  | 9000
  | 9500
  | 10000
  | 11000
  | 12000
  | 13000
  | 14000
  | 15000
  | 16000
  | 17000
  | 18000
  | 19000
  | 20000
  | 21000
  | 22000
  | 23000
  | 24000
  | 24001;
