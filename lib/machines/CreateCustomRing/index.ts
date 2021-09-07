import { createMachine, assign } from "xstate";

import {
  Context,
  HowDidYouFindUsOptions,
  RecipientMeOptions,
  RecipientStates,
  RecipientUserSelections,
  ShippingOptions,
  StartsWithStyleOptions,
  States,
  WhenIsTheSpecialDayOptions,
  YourCenterStoneOptions,
  BudgetOptions,
  MachineStates,
} from "@lib/machines/CreateCustomRing/types";

const initialContext: Context = {
  whoWillBeWearingTheRing: {
    userSelection: RecipientUserSelections.EMPTY,
    me: RecipientMeOptions.EMPTY,
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
    specialDate: WhenIsTheSpecialDayOptions.EMTPY,
    date: new Date(),
  },
  shipping: ShippingOptions.EMPTY,
  howDidYouFindUs: HowDidYouFindUsOptions.EMPTY,
};

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

type RecipientSetMe = {
  type: "SET_ME";
  value: RecipientMeOptions;
};

type StartsWithStyleSetStyles = {
  type: "SET_STYLES";
  styles: StartsWithStyleOptions[];
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

export const customRingMachine = createMachine<
  Context,
  CustomRingEvents,
  MachineStates
>(
  {
    id: "createCustomRing",
    initial: States.landing,
    context: initialContext,
    states: {
      [States.landing]: {
        on: {
          NEXT: `${States.recipient}.${RecipientStates.hist}`,
          DESIGN_OTHER_JEWERLY: {},
        },
      },
      [States.recipient]: {
        initial: RecipientStates.idle,
        on: {
          BACK: States.landing,
          IDLE: {
            target: `${States.recipient}.${RecipientStates.idle}`,
            actions: assign((context) => ({
              whoWillBeWearingTheRing: {
                ...context.whoWillBeWearingTheRing,
                userSelection: RecipientUserSelections.EMPTY,
              },
            })),
          },
          MY_SIGNIFICANT_OTHER: {
            target: `${States.recipient}.${RecipientStates.mySignificantOther}`,
            actions: assign((context) => ({
              whoWillBeWearingTheRing: {
                ...context.whoWillBeWearingTheRing,
                userSelection: RecipientUserSelections.MY_SIGNIFICANT_OTHER,
              },
            })),
          },
          ME: {
            target: `${States.recipient}.${RecipientStates.me}`,
            actions: assign({
              whoWillBeWearingTheRing: (context) => ({
                ...context.whoWillBeWearingTheRing,
                userSelection: RecipientUserSelections.ME,
              }),
            }),
          },
          NEXT: [
            {
              target: States.startsWithStyle,
              in: "#createCustomRing.recipient.me",
            },
            {
              target: States.startsWithStyle,
              in: "#createCustomRing.recipient.mySignificantOther",
              cond: "isMySignificantOtherFilled",
            },
          ],
        },
        states: {
          [RecipientStates.idle]: {},
          [RecipientStates.mySignificantOther]: {
            on: {
              SET_MY_SIGNIFICANT_OTHER: { actions: "setMySignificantOther" },
              SET_PREFFER_NOT_TO_SAY: { actions: "setPrefferNotToSay" },
            },
          },
          [RecipientStates.me]: {
            on: {
              SET_ME: { actions: "setMe" },
            },
          },
          [RecipientStates.hist]: {
            type: "history",
          },
        },
      },
      [States.startsWithStyle]: {
        on: {
          BACK: `${States.recipient}.${RecipientStates.hist}`,
          SET_STYLES: {
            actions: "setStyles",
          },
          SET_I_HAVE_NO_IDEA: {
            actions: "setIHaveNoIdea",
          },
          NEXT: [
            { target: States.yourCenterStone, cond: "isStartsWithStyleFilled" },
          ],
        },
      },
      [States.yourCenterStone]: {
        on: {
          BACK: States.startsWithStyle,
          SET_STONES: {
            actions: "setCenterStones",
          },
          SET_IM_NOT_SURE: { actions: "setImNotSure" },
          NEXT: [
            { target: States.setYourBudget, cond: "isYourCenterStoneFilled" },
          ],
        },
      },
      [States.setYourBudget]: {
        on: {
          BACK: States.yourCenterStone,
          SET_MIN: { actions: "setMin" },
          SET_MAX: { actions: "setMax" },
          SET_YOUR_BUDGET_SET_IM_NOT_SURE: {
            actions: "setYourBudgetSetImNotSure",
          },
          NEXT: [
            {
              target: States.whenIsTheSpecialDate,
              cond: "isSetYourBudgetFilled",
            },
          ],
        },
      },
      [States.whenIsTheSpecialDate]: {
        on: {
          BACK: States.setYourBudget,
          SET_SPECIAL_DATE: { actions: "setSpecialDate" },
          SET_DATE: { actions: "setDate" },
          NEXT: [{ target: "shipping", cond: "isSpecialDateFilled" }],
        },
      },
      [States.shipping]: {
        on: {
          BACK: States.whenIsTheSpecialDate,
          SET_SHIPPING: {
            actions: "setShipping",
          },
          NEXT: [{ target: States.howDidYouFindUs, cond: "isShippingFilled" }],
        },
      },
      [States.howDidYouFindUs]: {
        on: {
          BACK: States.shipping,
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
