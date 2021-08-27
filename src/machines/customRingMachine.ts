import { createMachine, assign, send } from "xstate";

interface CustomRingContext {
  recipient: "" | "MY_SIGNIFICANT_OTHER" | "ME";
}

type Next = {
  type: "NEXT";
};

type Back = {
  type: "BACK";
};

type DesignOtherJewerly = {
  type: "DESIGN_OTHER_JEWERLY";
};

type CheckRecipient = {
  type: "CHECK_RECIPIENT";
};

type SetIdle = {
  type: "SET_IDLE";
  recipient: "";
};

type SetMySignificantOther = {
  type: "SET_ME";
  value: "MY_SIGNIFICANT_OTHER";
};

type SetMe = {
  type: "SET_MY_SIGNIFICANT_OTHER";
  value: "MY_SIGNIFICANT_OTHER";
};

type CustomRingEvents =
  | Next
  | Back
  | DesignOtherJewerly
  | CheckRecipient
  | SetIdle
  | SetMySignificantOther
  | SetMe;

export type CustomRingState = {
  value:
    | "idle"
    | "recipient"
    | { recipient: "" | "MY_SIGNIFICANT_OTHER" | "ME" };
  context: CustomRingContext;
};

const initialContext: CustomRingContext = {
  recipient: "",
};

export const customRingMachine = createMachine<
  CustomRingContext,
  CustomRingEvents,
  CustomRingState
>(
  {
    id: "createCustomRing",
    initial: "idle",
    context: initialContext,
    states: {
      idle: {
        on: { NEXT: { target: "recipient" }, DESIGN_OTHER_JEWERLY: {} },
      },
      recipient: {
        initial: "idle",
        on: {
          BACK: { target: "idle" },
          SET_MY_SIGNIFICANT_OTHER: {
            target: "recipient.mySignificantOther",
            actions: [
              { type: "setRecipient", recipient: "MY_SIGNIFICANT_OTHER" },
            ],
          },
          SET_ME: {
            target: "recipient.me",
            actions: [{ type: "setRecipient", recipient: "ME" }],
          },
          SET_IDLE: {
            target: "recipient.idle",
            actions: [{ type: "setRecipient", recipient: "" }],
          },
        },
        states: {
          idle: {
            entry: send("CHECK_RECIPIENT"),
            on: {
              CHECK_RECIPIENT: [
                {
                  target: "mySignificantOther",
                  cond: "recipientIsMySignificantOther",
                },
                {
                  target: "me",
                  cond: "receipentIsMe",
                },
              ],
            },
          },
          mySignificantOther: {},
          me: {},
        },
      },
    },
  },
  {
    actions: {
      setRecipient: assign({
        recipient: (_, __, { action }) => {
          return action.recipient || "";
        },
      }),
    },
    guards: {
      recipientIsMySignificantOther: (context) =>
        context.recipient === "MY_SIGNIFICANT_OTHER",
      receipentIsMe: (context) => context.recipient === "ME",
    },
  }
);
