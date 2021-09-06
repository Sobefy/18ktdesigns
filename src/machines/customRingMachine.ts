import { createMachine, assign } from "xstate";

import { BudgetOptions } from "../../lib/types";
export interface CustomRingContext {
  whoWillBeWearingTheRing: {
    userSelection: "" | "ME" | "MY_SIGNIFICANT_OTHER";
    me: RecipientSetMeOptions;
    mySignificantOther: string;
    preferNotToSay: boolean;
  };
  startsWithStyle: {
    styles: StartstWithStylesOptions[];
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

const initialContext: CustomRingContext = {
  whoWillBeWearingTheRing: {
    userSelection: "",
    me: "",
    mySignificantOther: "",
    preferNotToSay: false,
  },
  startsWithStyle: {
    styles: [],
    iHaveNoIdea: false,
  },
  yourCenterStone: {
    stones: [],
    imNotSure: false,
  },
  setYourBudget: {
    min: 0,
    max: 0,
    imNotSure: false,
  },
  whenIsTheSpecialDate: {
    specialDate: "",
    date: new Date(),
  },
  shipping: "",
  howDidYouFindUs: "",
};

type StartstWithStylesOptions =
  | ""
  | "I_HAVE_IMAGES"
  | "DROPPED_SOME_HINTS"
  | "I_KNOW_MY_SO_SENSE_OF_STYLE"
  | "I_HAVE_MY_OWN_IDEAS";

type YourCenterStoneOptions =
  | ""
  | "DIAMOND"
  | "COLORED_GEMSTONE"
  | "MOISSANITE"
  | "NO_STONE";

type WhenIsTheSpecialDayOptions =
  | ""
  | "I_HAVE_A_SPECIFIC_DATE"
  | "NEXT_1_2_MONTHS"
  | "NEXT_6_MONTHS"
  | "NEXT_12_MONTHS"
  | "OVER_A_YEAR"
  | "IM_JUST_LOOKING";

type ShippingOptions = "" | "US" | "CA" | "UK" | "AU" | "OTHER";

type HowDidYouFindUsOptions =
  | ""
  | "INTERNET_SEARCH"
  | "MY_SIGNIFICANT_OTHER"
  | "FRIENDS_OR_FAMILY"
  | "SOCIAL_MEDIA"
  | "BLOG"
  | "RADIO_OR_TV"
  | "PRINT"
  | "OTHER";

type Next = {
  type: "NEXT";
};

type Back = {
  type: "BACK";
};

type LandingDesignOtherJewerly = {
  type: "DESIGN_OTHER_JEWERLY";
};

type RecipientIdle = {
  type: "IDLE";
};

type RecipientMySignificantOther = {
  type: "MY_SIGNIFICANT_OTHER";
};

type RecipientMe = {
  type: "ME";
};

type RecipientSetMySignificantOther = {
  type: "SET_MY_SIGNIFICANT_OTHER";
  value: string;
};

type RecipientSetPrefferNotToSay = {
  type: "SET_PREFFER_NOT_TO_SAY";
  value: boolean;
};

export type RecipientSetMeOptions =
  | ""
  | "SHOPPING_AROUND"
  | "BUYING_MY_OWN_RING"
  | "SHOPPING_TOGHETER"
  | "MY_SO_AND_I_ARE_SHOPPING_TOGHETER";

type RecipientSetMe = {
  type: "SET_ME";
  value: RecipientSetMeOptions;
};

type StartsWithStyleSetStyles = {
  type: "SET_STYLES";
  styles: StartstWithStylesOptions[];
};

type StartsWithStyleSetIHaveNoIdea = {
  type: "SET_I_HAVE_NO_IDEA";
};

type YourCenterStoneSetStones = {
  type: "SET_STONES";
  stones: YourCenterStoneOptions[];
};

type YourCenterStoneSetImNotSure = {
  type: "SET_IM_NOT_SURE";
};

type SetYourBudgetSetMin = {
  type: "SET_MIN";
  value: BudgetOptions;
};

type SetYourBudgetSetMax = {
  type: "SET_MAX";
  value: BudgetOptions;
};

type SetYourBudgetSetImNotSure = {
  type: "SET_YOUR_BUDGET_SET_IM_NOT_SURE";
};

type WhenIsTheSpecialDateSetSpecialDate = {
  type: "SET_SPECIAL_DATE";
  value: WhenIsTheSpecialDayOptions;
};

type WhenIsTheSpecialDateSetDate = {
  type: "SET_DATE";
  date: Date;
};

type SetShipping = {
  type: "SET_SHIPPING";
  value: ShippingOptions;
};

type SetHowDidYouFindUs = {
  type: "SET_HOW_DID_YOU_FIND_US";
  value: HowDidYouFindUsOptions;
};

export type CustomRingEvents =
  | Next
  | Back
  | LandingDesignOtherJewerly
  | RecipientIdle
  | RecipientMySignificantOther
  | RecipientSetMySignificantOther
  | RecipientMe
  | RecipientSetMe
  | RecipientSetPrefferNotToSay
  | StartsWithStyleSetStyles
  | StartsWithStyleSetIHaveNoIdea
  | YourCenterStoneSetStones
  | YourCenterStoneSetImNotSure
  | SetYourBudgetSetMin
  | SetYourBudgetSetMax
  | SetYourBudgetSetImNotSure
  | WhenIsTheSpecialDateSetSpecialDate
  | WhenIsTheSpecialDateSetDate
  | SetShipping
  | SetHowDidYouFindUs;

export type CustomRingState = {
  value:
    | "landing"
    | "recipient"
    | "recipient.idle"
    | "recipient.mySignificantOther"
    | "recipient.me"
    | "startsWithStyle";
  context: CustomRingContext;
};

export const customRingMachine = createMachine<
  CustomRingContext,
  CustomRingEvents,
  CustomRingState
>(
  {
    id: "createCustomRing",
    initial: "landing",
    context: initialContext,
    states: {
      landing: {
        on: { NEXT: "recipient.hist", DESIGN_OTHER_JEWERLY: {} },
      },
      recipient: {
        initial: "idle",
        on: {
          BACK: "landing",
          IDLE: {
            target: "recipient.idle",
            actions: assign((context) => ({
              whoWillBeWearingTheRing: {
                ...context.whoWillBeWearingTheRing,
                userSelection: "",
              },
            })),
          },
          MY_SIGNIFICANT_OTHER: {
            target: "recipient.mySignificantOther",
            actions: assign((context) => ({
              whoWillBeWearingTheRing: {
                ...context.whoWillBeWearingTheRing,
                userSelection: "MY_SIGNIFICANT_OTHER",
              },
            })),
          },
          ME: {
            target: "recipient.me",
            actions: assign({
              whoWillBeWearingTheRing: (context) => ({
                ...context.whoWillBeWearingTheRing,
                userSelection: "ME",
              }),
            }),
          },
          NEXT: [
            { target: "startsWithStyle", in: "#createCustomRing.recipient.me" },
            {
              target: "startsWithStyle",
              in: "#createCustomRing.recipient.mySignificantOther",
              cond: "isMySignificantOtherFilled",
            },
          ],
        },
        states: {
          idle: {},
          mySignificantOther: {
            on: {
              SET_MY_SIGNIFICANT_OTHER: { actions: "setMySignificantOther" },
              SET_PREFFER_NOT_TO_SAY: { actions: "setPrefferNotToSay" },
            },
          },
          me: {
            on: {
              SET_ME: { actions: "setMe" },
            },
          },
          hist: {
            type: "history",
          },
        },
      },
      startsWithStyle: {
        on: {
          BACK: "recipient.hist",
          SET_STYLES: {
            actions: "setStyles",
          },
          SET_I_HAVE_NO_IDEA: {
            actions: "setIHaveNoIdea",
          },
          NEXT: [
            { target: "yourCenterStone", cond: "isStartsWithStyleFilled" },
          ],
        },
      },
      yourCenterStone: {
        on: {
          BACK: "startsWithStyle",
          SET_STONES: {
            actions: "setCenterStones",
          },
          SET_IM_NOT_SURE: { actions: "setImNotSure" },
          NEXT: [{ target: "setYourBudget", cond: "isYourCenterStoneFilled" }],
        },
      },
      setYourBudget: {
        on: {
          BACK: "yourCenterStone",
          SET_MIN: { actions: "setMin" },
          SET_MAX: { actions: "setMax" },
          SET_YOUR_BUDGET_SET_IM_NOT_SURE: {
            actions: "setYourBudgetSetImNotSure",
          },
          NEXT: [
            { target: "whenIsTheSpecialDate", cond: "isSetYourBudgetFilled" },
          ],
        },
      },
      whenIsTheSpecialDate: {
        on: {
          BACK: "setYourBudget",
          SET_SPECIAL_DATE: { actions: "setSpecialDate" },
          SET_DATE: { actions: "setDate" },
          NEXT: [{ target: "shipping", cond: "isSpecialDateFilled" }],
        },
      },
      shipping: {
        on: {
          BACK: "whenIsTheSpecialDate",
          SET_SHIPPING: {
            actions: "setShipping",
          },
          NEXT: [{ target: "", cond: "isShippingFilled" }],
        },
      },
      howDidYouFindUs: {
        on: {
          BACK: "shipping",
          SET_HOW_DID_YOU_FIND_US: { actions: "setHowDidYouFindUs" },
          NEXT: [{ target: "", cond: "howDidYouFindUsIsFilled" }],
        },
      },
    },
  },
  {
    actions: {
      setMySignificantOther: assign((context, event) => {
        if (event.type !== "SET_MY_SIGNIFICANT_OTHER") {
          return { ...context };
        }
        return {
          whoWillBeWearingTheRing: {
            ...context.whoWillBeWearingTheRing,
            mySignificantOther: event.value,
            preferNotToSay: false,
          },
        };
      }),
      setPrefferNotToSay: assign((context, event) => {
        if (event.type !== "SET_PREFFER_NOT_TO_SAY") {
          return { ...context };
        }
        return {
          whoWillBeWearingTheRing: {
            ...context.whoWillBeWearingTheRing,
            mySignificantOther: "",
            preferNotToSay: event.value,
          },
        };
      }),
      setMe: assign((context, event) => {
        if (event.type !== "SET_ME") {
          return { ...context };
        }
        return {
          whoWillBeWearingTheRing: {
            ...context.whoWillBeWearingTheRing,
            me: event.value,
          },
        };
      }),
      setStyles: assign((context, event) => {
        if (event.type !== "SET_STYLES") {
          return { ...context };
        }
        return {
          startsWithStyle: {
            ...context.startsWithStyle,
            styles: event.styles,
            iHaveNoIdea: false,
          },
        };
      }),
      setIHaveNoIdea: assign((context, event) => {
        if (event.type !== "SET_I_HAVE_NO_IDEA") {
          return { ...context };
        }
        return {
          startsWithStyle: {
            ...context.startsWithStyle,
            iHaveNoIdea: true,
            styles: [],
          },
        };
      }),
      setCenterStones: assign((context, event) => {
        if (event.type !== "SET_STONES") {
          return { ...context };
        }
        return {
          yourCenterStone: {
            ...context.yourCenterStone,
            stones: event.stones,
            imNotSure: false,
          },
        };
      }),
      setImNotSure: assign((context, event) => {
        if (event.type !== "SET_IM_NOT_SURE") {
          return { ...context };
        }
        return {
          yourCenterStone: {
            ...context.yourCenterStone,
            imNotSure: true,
            stones: [],
          },
        };
      }),
      setMin: assign((context, event) => {
        if (event.type !== "SET_MIN") {
          return { ...context };
        }
        return {
          setYourBudget: {
            ...context.setYourBudget,
            min: event.value,
            imNotSure: false,
          },
        };
      }),
      setMax: assign((context, event) => {
        if (event.type !== "SET_MAX") {
          return { ...context };
        }
        return {
          setYourBudget: {
            ...context.setYourBudget,
            max: event.value,
            imNotSure: false,
          },
        };
      }),
      setYourBudgetSetImNotSure: assign((context, event) => {
        if (event.type !== "SET_YOUR_BUDGET_SET_IM_NOT_SURE") {
          return { ...context };
        }
        return {
          setYourBudget: {
            ...context.setYourBudget,
            min: 0,
            max: 0,
            imNotSure: true,
          },
        };
      }),
      setSpecialDate: assign((context, event) => {
        if (event.type !== "SET_SPECIAL_DATE") {
          return { ...context };
        }
        return {
          whenIsTheSpecialDate: {
            ...context.whenIsTheSpecialDate,
            specialDate: event.value,
          },
        };
      }),
      setDate: assign((context, event) => {
        if (event.type !== "SET_DATE") {
          return { ...context };
        }
        return {
          whenIsTheSpecialDate: {
            ...context.whenIsTheSpecialDate,
            date: event.date,
          },
        };
      }),
      setShipping: assign((context, event) => {
        if (event.type !== "SET_SHIPPING") {
          return { ...context };
        }
        return {
          shipping: event.value,
        };
      }),
      setHowDidYouFindUs: assign((context, event) => {
        if (event.type !== "SET_HOW_DID_YOU_FIND_US") {
          return { ...context };
        }
        return {
          howDidYouFindUs: event.value,
        };
      }),
    },
    guards: {
      isMySignificantOtherFilled: (context) =>
        context.whoWillBeWearingTheRing.mySignificantOther !== "" ||
        context.whoWillBeWearingTheRing.preferNotToSay,
      isStartsWithStyleFilled: (context) =>
        context.startsWithStyle.styles.length > 0 ||
        context.startsWithStyle.iHaveNoIdea,
      isYourCenterStoneFilled: (context) =>
        context.yourCenterStone.stones.length > 0 ||
        context.yourCenterStone.imNotSure,
      isSetYourBudgetFilled: (context) =>
        context.setYourBudget.min !== 0 ||
        context.setYourBudget.max !== 0 ||
        context.setYourBudget.imNotSure,
      isSpecialDateFilled: (context) =>
        context.whenIsTheSpecialDate.specialDate !== "",
      isShippingFilled: (context) => context.shipping !== "",
      howDidYouFindUsIsFilled: (context) => context.howDidYouFindUs !== "",
    },
  }
);
