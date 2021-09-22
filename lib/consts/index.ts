import {
  HowDidYouFindUsOptions,
  ShippingOptions,
  StartsWithStyleOptions,
  WhenIsTheSpecialDayOptions,
} from "@lib/machines/CreateCustomRing/types";
import {
  ImageItem,
  CarouselItem,
  ListOption,
  BlogCarouselItem,
  ServicesInfo,
  JewelryTypes,
  SocialNetworkLinkType,
  ListFooterType,
  gridItemsTypes,
  BudgetInfoType,
  AccordionInfoType,
  FaqDataType,
} from "@lib/types";
export const ImageGridContent: ImageItem[] = [
  {
    id: 1,
    alt: "Ryan & Sandy",
    image:
      "/images/beautiful-engagement-proposal-at-sunset-happy-couple-tonythetigersson-tony-andrews-photography-t20-E0lomV.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 2,
    alt: "Ryan and Sandy",
    image:
      "/images/happy-couple-engaged-couple-engagement-ring-couple-in-love-t20-29Zp7E.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 3,
    alt: "Ryan & Sandy",
    image:
      "/images/millennial-diverse-young-married-couple-laughing-and-smiling-for-the-camera-t20-BlXZoO.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 4,
    alt: "Ryan & Sandy",
    image: "/images/lovely-couple-at-the-beach-t20-G0ZGZm.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 5,
    alt: "Ryan & Sandy",
    image: "/images/twenty20-0bade236-d46a-44cb-b8ca-cdcb8913f742.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 6,
    alt: "Ryan & Sandy",
    image: "/images/nominated-already-t20-3w8o4o.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 7,
    alt: "Ryan & Sandy",
    image: "/images/Couple-Laughing-together-at-the-beach.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 8,
    alt: "Ryan & Sandy",
    image:
      "/images/millennial-diverse-young-married-couple-laughing-and-smiling-for-the-camera-t20-BlXZoO.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
  {
    id: 9,
    alt: "Ryan & Sandy",
    image:
      "/images/millennial-diverse-young-married-couple-laughing-and-smiling-for-the-camera-t20-BlXZoO.jpg",
    imageWidth: 371,
    imageHeight: 288,
    imageUnit: "px",
  },
];
export const gridItems: gridItemsTypes[] = [
  {
    id: 1,
    title: "Material and Style",
    content:
      "For now, we’ll do the asking. Who is it for? Have they hinted at an specific type of ring they like? We'll ask lots of questions in order to learn as much as possible about your future partner.",
    svg: "materialAndDesign",
  },
  {
    id: 2,
    title: "Diamonds or Stones?",
    content:
      "Our gem and diamond experts work diligently to find the perfect stone for you and offer guidance through every step of the process.",
    svg: "diamondOrStones",
  },
  {
    id: 3,
    title: "Design Review",
    content:
      "We are able to create realistic 3D renderings that show exactly how the ring will look. We'll tweak and tune until we hear you say: “It looks perfect!",
    svg: "designReview",
  },
  {
    id: 4,
    title: "Ring Manufacturing",
    content:
      "Our master jewelers will bring your custom design to life. Once it's in your hands, we stand behind the ring for life with our Lifetime Customer Service.",
    svg: "ringManufacturing",
  },
];
export const cards: JewelryTypes[] = [
  {
    id: 1,
    title: "Earrings",
    content:
      "A short message that will bring your customers into the world of your imagination. And will allow them to become more familiar with your brand.",
    img: "/images/tabGroup1.jpg",
    textButton: "Shop Earrings",
  },
  {
    id: 2,
    title: "Bracelets",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/images/tabGroup1.jpg",
    textButton: "Shop Bracelets",
  },
  {
    id: 3,
    title: "Chains",
    content:
      "A short message that will bring your customers into the world of your imagination. And will allow them to become more familiar with your brand.",
    img: "/images/tabGroup1.jpg",
    textButton: "Shop Chains",
  },
  {
    id: 4,
    title: "Rings",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/images/tabGroup1.jpg",
    textButton: "Shop Rings",
  },
];
export const socialNetworkLinks: SocialNetworkLinkType[] = [
  {
    id: 1,
    socialIcon: "fb",
    url: "https://translate.google.com/",
    target: "_blank",
  },
  {
    id: 2,
    socialIcon: "tw",
    url: "https://translate.google.com/",
    target: "_blank",
  },
  {
    id: 3,
    socialIcon: "ig",
    url: "https://translate.google.com/",
    target: "_blank",
  },
  {
    id: 4,
    socialIcon: "li",
    url: "https://translate.google.com/",
    target: "_blank",
  },
];
export const listFooter: ListFooterType[] = [
  {
    id: 1,
    value: "partnerships",
    label: "Partnerships",
    url: "https://translate.google.com/",
    target: "_blank",
  },
  {
    id: 2,
    value: "affiliates",
    label: "Affiliates",
    url: "https://translate.google.com/",
    target: "_blank",
  },
  {
    id: 3,
    value: "press",
    label: "Press",
    url: "https://translate.google.com/",
    target: "_blank",
  },
  {
    id: 4,
    value: "privacyPolicy",
    label: "Privacy Policy",
    url: "https://twitter.com/",
    target: "_blank",
  },
];
export const selectStone: ListOption[] = [
  {
    id: 1,
    value: "diamond",
    label: "Diamond",
    image: "/images/18KT-LOGO-100x-2x.png",
    imageWidth: 96,
    imageHeight: 62,
    imageUnit: "px",
  },
  {
    id: 2,
    value: "coloredGemstone",
    label: "Colored Gemstone",
    image: "/images/18KT-LOGO-100x-2x.png",
    imageWidth: 96,
    imageHeight: 62,
    imageUnit: "px",
  },
  {
    id: 3,
    value: "moissanite",
    label: "Moissanite",
    image: "/images/18KT-LOGO-100x-2x.png",
    imageWidth: 96,
    imageHeight: 62,
    imageUnit: "px",
  },
  {
    id: 4,
    value: "noStone",
    label: "No Stone",
    image: "/images/18KT-LOGO-100x-2x.png",
    imageWidth: 96,
    imageHeight: 62,
    imageUnit: "px",
  },
];

export const howDidYouFindUsList = [
  {
    id: 0,
    value: HowDidYouFindUsOptions.EMPTY,
    label: "-- Choose a response --",
  },
  {
    id: 1,
    value: HowDidYouFindUsOptions.INTERNET_SEARCH,
    label: "Internet search (Google, Bing, etc..)",
  },
  {
    id: 2,
    value: HowDidYouFindUsOptions.MY_SIGNIFICANT_OTHER,
    label: "My significant other",
  },
  {
    id: 3,
    value: HowDidYouFindUsOptions.FRIENDS_OR_FAMILY,
    label: "Friends or family",
  },
  {
    id: 4,
    value: HowDidYouFindUsOptions.SOCIAL_MEDIA,
    label: "Social media (Facebook, Pinterest, etc.)",
  },
  {
    id: 5,
    value: HowDidYouFindUsOptions.BLOG,
    label: "Blog or other website (Buzzfeed, etc)",
  },
  {
    id: 6,
    value: HowDidYouFindUsOptions.RADIO_OR_TV,
    label: "Radio / TV",
  },
  {
    id: 7,
    value: HowDidYouFindUsOptions.PRINT,
    label: "Print (Magazine, newspaper, etc.)",
  },
  {
    id: 8,
    value: HowDidYouFindUsOptions.OTHER,
    label: "Other",
  },
];
export const selectAllThatApply = [
  {
    id: 1,
    value: StartsWithStyleOptions.I_HAVE_IMAGES,
    label: "I have images of a specific ring (or rings) I can Share.",
  },
  {
    id: 2,
    value: StartsWithStyleOptions.DROPPED_SOME_HINTS,
    label:
      "My significant other has dropped some hints or given me some ideas.",
  },
  {
    id: 3,
    value: StartsWithStyleOptions.I_KNOW_MY_SO_SENSE_OF_STYLE,
    label: "I know my significant other’s sense of style pretty well.",
  },
  {
    id: 4,
    value: StartsWithStyleOptions.I_HAVE_MY_OWN_IDEAS,
    label: "I have some design ideas of my own.",
  },
];

export const minPrice = [
  {
    id: 1,
    value: "any",
    label: "Any",
  },
  {
    id: 2,
    value: "200",
    label: "$200",
  },
  {
    id: 3,
    value: "300",
    label: "$300",
  },
  {
    id: 4,
    value: "400",
    label: "$400",
  },
  {
    id: 5,
    value: "500",
    label: "$500",
  },
  {
    id: 6,
    value: "600",
    label: "$600",
  },
  {
    id: 7,
    value: "700",
    label: "$700",
  },
  {
    id: 8,
    value: "800",
    label: "$800",
  },
  {
    id: 9,
    value: "900",
    label: "$900",
  },
  {
    id: 10,
    value: "1000",
    label: "$1000",
  },
  {
    id: 11,
    value: "1100",
    label: "$1100",
  },
  {
    id: 12,
    value: "1200",
    label: "$1200",
  },
  {
    id: 13,
    value: "1300",
    label: "$1300",
  },
  {
    id: 14,
    value: "1400",
    label: "$1400",
  },
  {
    id: 15,
    value: "1500",
    label: "$1500",
  },
  {
    id: 16,
    value: "1600",
    label: "$1600",
  },
  {
    id: 17,
    value: "1700",
    label: "$1700",
  },
  {
    id: 18,
    value: "1800",
    label: "$1800",
  },
  {
    id: 19,
    value: "1900",
    label: "$1900",
  },
  {
    id: 20,
    value: "2000",
    label: "$2000",
  },
  {
    id: 21,
    value: "2100",
    label: "$2100",
  },
  {
    id: 22,
    value: "2300",
    label: "$2300",
  },

  {
    id: 24,
    value: "2400",
    label: "$2400",
  },
  {
    id: 25,
    value: "2500",
    label: "$3500",
  },

  {
    id: 30,
    value: "3000",
    label: "$3000",
  },
  {
    id: 31,
    value: "3500",
    label: "$3500",
  },
  {
    id: 32,
    value: "4000",
    label: "$4000",
  },
  {
    id: 33,
    value: "4500",
    label: "$4500",
  },
  {
    id: 34,
    value: "5000",
    label: "$5000",
  },
  {
    id: 35,
    value: "5500",
    label: "$5500",
  },
  {
    id: 36,
    value: "6000",
    label: "$6000",
  },
  {
    id: 37,
    value: "6500",
    label: "$6500",
  },
  {
    id: 38,
    value: "7000",
    label: "$7000",
  },
  {
    id: 39,
    value: "7500",
    label: "$7500",
  },
  {
    id: 40,
    value: "8000",
    label: "$8000",
  },
  {
    id: 41,
    value: "8500",
    label: "$8500",
  },
  {
    id: 42,
    value: "9000",
    label: "$9000",
  },
  {
    id: 43,
    value: "9500",
    label: "$9500",
  },
  {
    id: 44,
    value: "10000",
    label: "$10000",
  },
  {
    id: 45,
    value: "11000",
    label: "$11000",
  },
  {
    id: 46,
    value: "12000",
    label: "$12000",
  },
  {
    id: 47,
    value: "13000",
    label: "$13000",
  },
  {
    id: 48,
    value: "14000",
    label: "$14000",
  },
  {
    id: 49,
    value: "15000",
    label: "$15000",
  },
  {
    id: 50,
    value: "16000",
    label: "$16000",
  },
  {
    id: 51,
    value: "17000",
    label: "$17000",
  },
  {
    id: 52,
    value: "18000",
    label: "$18000",
  },
  {
    id: 53,
    value: "19000",
    label: "$19000",
  },
  {
    id: 54,
    value: "20000",
    label: "$20000",
  },
  {
    id: 55,
    value: "21000",
    label: "$21000",
  },
  {
    id: 56,
    value: "22000",
    label: "$22000",
  },
  {
    id: 57,
    value: "23000",
    label: "$23000",
  },
  {
    id: 58,
    value: "24000",
    label: "$24000",
  },
  {
    id: 59,
    value: "24000+",
    label: "$24000+",
  },
];

export const maxPrice = [
  {
    id: 1,
    value: "any",
    label: "Any",
  },
  {
    id: 2,
    value: "200",
    label: "$200",
  },
  {
    id: 3,
    value: "300",
    label: "$300",
  },
  {
    id: 4,
    value: "400",
    label: "$400",
  },
  {
    id: 5,
    value: "500",
    label: "$500",
  },
  {
    id: 6,
    value: "600",
    label: "$600",
  },
  {
    id: 7,
    value: "700",
    label: "$700",
  },
  {
    id: 8,
    value: "800",
    label: "$800",
  },
  {
    id: 9,
    value: "900",
    label: "$900",
  },
  {
    id: 10,
    value: "1000",
    label: "$1000",
  },
  {
    id: 11,
    value: "1100",
    label: "$1100",
  },
  {
    id: 12,
    value: "1200",
    label: "$1200",
  },
  {
    id: 13,
    value: "1300",
    label: "$1300",
  },
  {
    id: 14,
    value: "1400",
    label: "$1400",
  },
  {
    id: 15,
    value: "1500",
    label: "$1500",
  },
  {
    id: 16,
    value: "1600",
    label: "$1600",
  },
  {
    id: 17,
    value: "1700",
    label: "$1700",
  },
  {
    id: 18,
    value: "1800",
    label: "$1800",
  },
  {
    id: 19,
    value: "1900",
    label: "$1900",
  },
  {
    id: 20,
    value: "2000",
    label: "$2000",
  },
  {
    id: 21,
    value: "2100",
    label: "$2100",
  },
  {
    id: 22,
    value: "2300",
    label: "$2300",
  },

  {
    id: 24,
    value: "2400",
    label: "$2400",
  },
  {
    id: 25,
    value: "2500",
    label: "$3500",
  },

  {
    id: 30,
    value: "3000",
    label: "$3000",
  },
  {
    id: 31,
    value: "3500",
    label: "$3500",
  },
  {
    id: 32,
    value: "4000",
    label: "$4000",
  },
  {
    id: 33,
    value: "4500",
    label: "$4500",
  },
  {
    id: 34,
    value: "5000",
    label: "$5000",
  },
  {
    id: 35,
    value: "5500",
    label: "$5500",
  },
  {
    id: 36,
    value: "6000",
    label: "$6000",
  },
  {
    id: 37,
    value: "6500",
    label: "$6500",
  },
  {
    id: 38,
    value: "7000",
    label: "$7000",
  },
  {
    id: 39,
    value: "7500",
    label: "$7500",
  },
  {
    id: 40,
    value: "8000",
    label: "$8000",
  },
  {
    id: 41,
    value: "8500",
    label: "$8500",
  },
  {
    id: 42,
    value: "9000",
    label: "$9000",
  },
  {
    id: 43,
    value: "9500",
    label: "$9500",
  },
  {
    id: 44,
    value: "10000",
    label: "$10000",
  },
  {
    id: 45,
    value: "11000",
    label: "$11000",
  },
  {
    id: 46,
    value: "12000",
    label: "$12000",
  },
  {
    id: 47,
    value: "13000",
    label: "$13000",
  },
  {
    id: 48,
    value: "14000",
    label: "$14000",
  },
  {
    id: 49,
    value: "15000",
    label: "$15000",
  },
  {
    id: 50,
    value: "16000",
    label: "$16000",
  },
  {
    id: 51,
    value: "17000",
    label: "$17000",
  },
  {
    id: 52,
    value: "18000",
    label: "$18000",
  },
  {
    id: 53,
    value: "19000",
    label: "$19000",
  },
  {
    id: 54,
    value: "20000",
    label: "$20000",
  },
  {
    id: 55,
    value: "21000",
    label: "$21000",
  },
  {
    id: 56,
    value: "22000",
    label: "$22000",
  },
  {
    id: 57,
    value: "23000",
    label: "$23000",
  },
  {
    id: 58,
    value: "24000",
    label: "$24000",
  },
  {
    id: 59,
    value: "24000+",
    label: "$24000+",
  },
];

export const chooseAResponseOptions = [
  {
    id: 0,
    value: WhenIsTheSpecialDayOptions.EMPTY,
    label: "-- Choose a response --",
  },
  {
    id: 1,
    value: WhenIsTheSpecialDayOptions.I_HAVE_A_SPECIFIC_DATE,
    label: "Yes, I have a specific date",
  },
  {
    id: 2,
    value: WhenIsTheSpecialDayOptions.NEXT_1_2_MONTHS,
    label: "No specific date, but soon (in the nex 1-2 months)",
  },
  {
    id: 3,
    value: WhenIsTheSpecialDayOptions.NEXT_6_MONTHS,
    label: "No specific date, but sometime in the next 6 months",
  },
  {
    id: 4,
    value: WhenIsTheSpecialDayOptions.NEXT_12_MONTHS,
    label: "Within the next 12 months",
  },
  {
    id: 5,
    value: WhenIsTheSpecialDayOptions.OVER_A_YEAR,
    label: "Over a year from now",
  },
  {
    id: 6,
    value: WhenIsTheSpecialDayOptions.IM_JUST_LOOKING,
    label: "I'm just looking for now",
  },
];

export const chooseACountry = [
  {
    id: 0,
    value: ShippingOptions.EMPTY,
    label: "-- Choose a response --",
  },
  {
    id: 1,
    value: ShippingOptions.US,
    label: "United States",
  },
  {
    id: 2,
    value: ShippingOptions.CA,
    label: "Canada",
  },
  {
    id: 3,
    value: ShippingOptions.UK,
    label: " United Kingdom",
  },
  {
    id: 4,
    value: ShippingOptions.AU,
    label: "Australia",
  },
  {
    id: 5,
    value: ShippingOptions.OTHER,
    label: "Other",
  },
];

export const chooseRecipientOptions = [
  { id: 0, value: "", label: "-- Choose recipient --" },
  {
    id: 1,
    value: "MY_SIGNIFICANT_OTHER",
    label: "My significant other",
  },
  {
    id: 2,
    value: "ME",
    label: "Me",
  },
];

export const selectResponseOptions = [
  { id: 0, value: "IDLE", label: "-- Select response --" },
  {
    id: 1,
    value: "SHOPPING_AROUND",
    label: "Shopping around",
  },
  {
    id: 2,
    value: "BUYING_MY_OWN_RING",
    label: "Planning to buy my own ring",
  },
  {
    id: 3,
    value: "MY_SO_AND_I_ARE_SHOPPING_TOGHETER",
    label: "My S/O and i are shopping together",
  },
];

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    value: "ryanandsandy",
    label: "Ryan & Sandy",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim quam ultricies, placerat tellus sed, laoreet orci. Duis luctus quam ac metus gravida sodales. Sed a ex accumsan, pellentesque sem eget, scelerisque dolor.",
    image: "/zeus-assets/images/02.png",
    imageWidth: 80,
    imageHeight: 80,
    imageUnit: "px",
    marriedSince: "Married on 08/20/2020",
  },
  {
    id: 2,
    value: "ryanandsandy",
    label: "Ryan and Sandy",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim quam ultricies, placerat tellus sed, laoreet orci. Duis luctus quam ac metus gravida sodales. Sed a ex accumsan, pellentesque sem eget, scelerisque dolor.",
    image: "/zeus-assets/images/02.png",
    imageWidth: 80,
    imageHeight: 80,
    imageUnit: "px",
    marriedSince: "Married on 09/06/2021",
  },
  {
    id: 3,
    value: "ryanandsandy",
    label: "Ryan & Sandy",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim quam ultricies, placerat tellus sed, laoreet orci. Duis luctus quam ac metus gravida sodales. Sed a ex accumsan, pellentesque sem eget, scelerisque dolor.",
    image: "/zeus-assets/images/02.png",
    imageWidth: 80,
    imageHeight: 80,
    imageUnit: "px",
    marriedSince: "Married on 10/27/2018",
  },
];

export const blogCarouselData: BlogCarouselItem[] = [
  {
    id: 1,
    value: "ryanandsandy",
    label: "Ryan & Sandy",
    summary:
      "When Ryan needed to find Sandy the perfect engagement ring. He looked no further than us blah and more text here.",
    image: "/images/waiter-giving-engagement-ring-to-groom-37LT4WV.jpg",
    imageWidth: 864,
    imageHeight: 384,
    imageUnit: "px",
  },
  {
    id: 2,
    value: "ryanandsandy",
    label: "Ryan & Sandy",
    summary:
      "When Ryan needed to find Sandy the perfect engagement ring. He looked no further than us blah and more text here.",
    image: "/images/waiter-giving-engagement-ring-to-groom-37LT4WV.jpg",
    imageWidth: 864,
    imageHeight: 384,
    imageUnit: "px",
  },
  {
    id: 3,
    value: "ryanandsandy",
    label: "Ryan and Sandy",
    summary:
      "When Ryan needed to find Sandy the perfect engagement ring. He looked no further than us blah and more text here.",
    image: "/images/waiter-giving-engagement-ring-to-groom-37LT4WV.jpg",
    imageWidth: 864,
    imageHeight: 384,
    imageUnit: "px",
  },
];

export const servicesData: ServicesInfo[] = [
  {
    id: 1,
    title: "Sketching",
    description:
      "We'll sketch your piece based on your personal taste and specifications.",
  },
  {
    id: 2,
    title: "Gems & Diamonds",
    description:
      "Our experts will be by your side and work hard to find the perfect gems and diamonds for your piece.",
  },
  {
    id: 3,
    title: "Put it all together.",
    description:
      "We then send our design to our manufacturing team of industry designers.",
  },
  {
    id: 4,
    title: "Budget friendly",
    description:
      "We can work with your budget yet create something unique and memorable.",
  },
];

export const budgetInfo: BudgetInfoType[] = [
  {
    id: 1,
    weight: "18kt",
    purity: "75.0",
    diamondCarat: "",
    materials: "",
    complexity: "",
    price: "1500",
  },
  {
    id: 2,
    weight: "22kt",
    purity: "91.7.0",
    diamondCarat: "",
    materials: "",
    complexity: "",
    price: "3500",
  },
  {
    id: 3,
    weight: "24kt",
    purity: "99.9",
    diamondCarat: "",
    materials: "",
    complexity: "",
    price: "6000",
  },
];

export const accordionInfo: AccordionInfoType[] = [
  {
    id: 1,
    title: "How long does a custom ring take to make?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
    defaultChecked: true,
  },
  {
    id: 2,
    title: "What if I already know the design I want?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
  },
  {
    id: 3,
    title: "Can I see the design before I pay?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
  },
  {
    id: 4,
    title: "What is your current warranty?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
  },
  {
    id: 5,
    title: "Do you offer cleaning & maintenance?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligula urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
  },
];

export const faqData: FaqDataType[] = [
  {
    id: 1,
    buttonText: "General",
    buttonCategory: "generalquestion",
    questions: [
      {
        id: 1,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
        defaultChecked: true,
      },
      {
        id: 2,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 3,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 4,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 5,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
    ],
    defaultChecked: true,
  },
  {
    id: 2,
    buttonText: "Warranty",
    buttonCategory: "warrantyquestion",
    questions: [
      {
        id: 1,
        title: "Eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
        defaultChecked: true,
      },
      {
        id: 2,
        title: "Eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 3,
        title: "Eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 4,
        title: "Eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 5,
        title: "Eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
    ],
  },
  {
    id: 3,
    buttonText: "Payment",
    buttonCategory: "paymentquestion",
    questions: [
      {
        id: 1,
        title: "Nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
        defaultChecked: true,
      },
      {
        id: 2,
        title: "Nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 3,
        title: "Nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 4,
        title: "Nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 5,
        title: "Nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
    ],
  },
  {
    id: 4,
    buttonText: "Returns",
    buttonCategory: "returnquestion",
    questions: [
      {
        id: 1,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
        defaultChecked: true,
      },
      {
        id: 2,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 3,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 4,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 5,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
    ],
  },
  {
    id: 5,
    buttonText: "Maintenance",
    buttonCategory: "maintenancequestion",
    questions: [
      {
        id: 1,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
        defaultChecked: true,
      },
      {
        id: 2,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 3,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 4,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
      {
        id: 5,
        title: "Fusce eget nunc et libero accumsan rutrum quis nec lectus?",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod orci sed tristique placerat. Fusce in ligul urna. Fusce eget nunc et libero accumsan rutrum quis nec lectus. Quisque luctus sem nibh, quis ornare neque consectetur varius. Maecenas rhoncus consectetur rutrum.",
      },
    ],
  },
];
