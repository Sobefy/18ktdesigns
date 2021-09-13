import { inspect } from "@xstate/inspect";

import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";
import { States } from "@lib/machines/CreateCustomRing/types";
import Landing from "@components/CreateCustomRing/Landing";
import WhoWillBeWearing from "@components/CreateCustomRing/WhoWillBeWearing";
import ItStartsWithStyle from "@components/CreateCustomRing/ItStartsWithStyle";
import YourCenterStone from "@components/CreateCustomRing/YourCenterStone";

process.browser &&
  inspect({
    iframe: false,
  });

const Machine = () => {
  const { state } = useCreateCustomRingMachine();

  return (
    <>
      {state.matches(States.landing) ? <Landing /> : null}
      {state.matches(States.recipient) ? <WhoWillBeWearing /> : null}
      {state.matches(States.startsWithStyle) ? <ItStartsWithStyle /> : null}
      {state.matches(States.yourCenterStone) ? <YourCenterStone /> : null}
      {/*
      {state.value === "end" ? (
        <div>
          <h1>You reached the end</h1>
        </div>
      ) : null} */}
    </>
  );
};

export default Machine;
