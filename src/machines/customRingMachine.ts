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
}

type StartstWithStylesOptions =
  | ""
  | "I_HAVE_IMAGES"
  | "DROPPED_SOME_HINTS"
  | "I_KNOW_MY_SO_SENSE_OF_STYLE"
  | "I_HAVE_MY_OWN_IDEAS";

export type Next = {
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

type CustomRingEvents =
  | Next
  | Back
  | LandingDesignOtherJewerly
  | RecipientIdle
  | RecipientMySignificantOther
  | RecipientSetMySignificantOther
  | RecipientMe
  | RecipientSetMe
  | RecipientSetPrefferNotToSay;

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
        on: {},
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
    },
    guards: {
      isMySignificantOtherFilled: (context) =>
        context.whoWillBeWearingTheRing.mySignificantOther !== "" ||
        context.whoWillBeWearingTheRing.preferNotToSay,
    },
  }
);
