// States
export enum States {
  landing = "landing",
  recipient = "recipient",
  startsWithStyle = "startsWithStyle",
  yourCenterStone = "yourCenterStone",
  setYourBudget = "setYourBudget",
  whenIsTheSpecialDate = "whenIsTheSpecialDate",
  shipping = "shipping",
  howDidYouFindUs = "howDidYouFindUs",
}

export enum RecipientStates {
  idle = "idle",
  mySignificantOther = "mySignificantOther",
  me = "me",
  hist = "hist",
}

type recipientMe = `${States.recipient}.${RecipientStates.idle}`;

export const recipientMe: recipientMe = `${States.recipient}.${RecipientStates.idle}`;

export interface MachineStates {
  value:
    | States.landing
    | States.recipient
    | `${States.recipient}.${RecipientStates.idle}`
    | `${States.recipient}.${RecipientStates.mySignificantOther}`
    | `${States.recipient}.${RecipientStates.me}`
    | States.startsWithStyle
    | States.yourCenterStone
    | States.setYourBudget
    | States.whenIsTheSpecialDate
    | States.shipping
    | States.howDidYouFindUs;
  context: Context;
}

// Context
export interface Context {
  whoWillBeWearingTheRing: {
    userSelection: RecipientUserSelections;
    me: RecipientMeOptions;
    mySignificantOther: string;
    preferNotToSay: boolean;
  };
  startsWithStyle: {
    styles: StartsWithStyleOptions[];
    iHaveNoIdea: boolean;
  };
  yourCenterStone: {
    stones: YourCenterStoneOptions[];
    imNotSure: boolean;
  };
  setYourBudget: {
    min: BudgetOptions;
    max: BudgetOptions;
    imNotSure: boolean;
  };
  whenIsTheSpecialDate: {
    specialDate: WhenIsTheSpecialDayOptions;
    date: Date;
  };
  shipping: ShippingOptions;
  howDidYouFindUs: HowDidYouFindUsOptions;
}

export enum RecipientMeOptions {
  EMPTY = "",
  SHOPPING_AROUND = "SHOPPING_AROUND",
  BUYING_MY_OWN_RING = "BUYING_MY_OWN_RING",
  SHOPPING_TOGHETER = "SHOPPING_TOGHETER",
  MY_SO_AND_I_ARE_SHOPPING_TOGHETER = "MY_SO_AND_I_ARE_SHOPPING_TOGHETER",
}

export enum RecipientUserSelections {
  EMPTY = "",
  MY_SIGNIFICANT_OTHER = "MY_SIGNIFICANT_OTHER",
  ME = "ME",
}

export enum StartsWithStyleOptions {
  I_HAVE_IMAGES = "I_HAVE_IMAGES",
  DROPPED_SOME_HINTS = "DROPPED_SOME_HINTS",
  I_KNOW_MY_SO_SENSE_OF_STYLE = "I_KNOW_MY_SO_SENSE_OF_STYLE",
  I_HAVE_MY_OWN_IDEAS = "I_HAVE_MY_OWN_IDEAS",
}

export enum YourCenterStoneOptions {
  EMTPY = "",
  DIAMOND = "DIAMOND",
  COLORED_GEMSTONE = "COLORED_GEMSTONE",
  MOISSANITE = "MOISSANITE",
  NO_STONE = "NO_STONE",
}

export enum WhenIsTheSpecialDayOptions {
  EMTPY = "",
  I_HAVE_A_SPECIFIC_DATE = "I_HAVE_A_SPECIFIC_DATE",
  NEXT_1_2_MONTHS = "NEXT_1_2_MONTHS",
  NEXT_6_MONTHS = "NEXT_6_MONTHS",
  NEXT_12_MONTHS = "NEXT_12_MONTHS",
  OVER_A_YEAR = "OVER_A_YEAR",
  IM_JUST_LOOKING = "IM_JUST_LOOKING",
}

export enum ShippingOptions {
  EMPTY = "",
  US = "US",
  CA = "CA",
  UK = "UK",
  AU = "AU",
  OTHER = "OTHER",
}

export enum HowDidYouFindUsOptions {
  EMPTY = "",
  INTERNET_SEARCH = "INTERNET_SEARCH",
  MY_SIGNIFICANT_OTHER = "MY_SIGNIFICANT_OTHER",
  FRIENDS_OR_FAMILY = "FRIENDS_OR_FAMILY",
  SOCIAL_MEDIA = "SOCIAL_MEDIA",
  BLOG = "BLOG",
  RADIO_OR_TV = "RADIO_OR_TV",
  PRINT = "PRINT",
  OTHER = "OTHER",
}

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
