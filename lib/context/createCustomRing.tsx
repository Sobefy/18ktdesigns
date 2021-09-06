import React, { createContext } from "react";
import { useActor, useInterpret } from "@xstate/react";

import {
  CustomRingContext,
  CustomRingEvents,
  customRingMachine,
  CustomRingState,
} from "../../src/machines/customRingMachine";
import { Event, Sender, State } from "xstate";

type CreateCustomRingProviderProps = { children: React.ReactNode };

export const CreateCustomRingContext = createContext<
  | {
      state: State<CustomRingContext, CustomRingEvents, any, CustomRingState>;
      send: Sender<CustomRingEvents>;
      nextState(
        e: Event<CustomRingEvents>
      ): State<CustomRingContext, CustomRingEvents, any, CustomRingState>;
    }
  | undefined
>(undefined);

export const CreateCustomRingProvider = ({
  children,
}: CreateCustomRingProviderProps) => {
  const machine = useInterpret(customRingMachine, { devTools: true });
  const [state] = useActor(machine);
  const { send, nextState } = machine;

  return (
    <CreateCustomRingContext.Provider value={{ state, send, nextState }}>
      {children}
    </CreateCustomRingContext.Provider>
  );
};

export const useCreateCustomRingMachine = () => {
  const context = React.useContext(CreateCustomRingContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CreateCustomRingProvider");
  }
  return context;
};
