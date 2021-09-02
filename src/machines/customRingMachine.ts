import { createMachine, assign } from "xstate";

interface CustomRingContext {
  whoWillBeWearingTheRing: {
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
}

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

type RecipientSetMeOptions =
  | ""
  | "SHOPPING_AROUND"
  | "BUYING_MY_OWN_RING"
  | "SHOPPING_TOGHETER";

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
  | YourCenterStoneSetImNotSure;

type CustomRingState = {
  value:
    | "landing"
    | "recipient"
    | "recipient.idle"
    | "recipient.mySignificantOther"
    | "recipient.me"
    | "startsWithStyle";
  context: CustomRingContext;
};

const initialContext: CustomRingContext = {
  whoWillBeWearingTheRing: {
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
          IDLE: "recipient.idle",
          MY_SIGNIFICANT_OTHER: "recipient.mySignificantOther",
          ME: "recipient.me",
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
          NEXT: [{ target: "", cond: "isYourCenterStoneFilled" }],
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
    },
  }
);
