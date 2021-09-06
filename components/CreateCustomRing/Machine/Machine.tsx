import { inspect } from "@xstate/inspect";

import Landing from "../Landing";
import WhoWillBeWearing from "../WhoWillBeWearing";
import { useCreateCustomRingMachine } from "../../../lib/context/createCustomRing";
import { States } from "@lib/machines/CreateCustomRing/types";

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
      {/* {state.value === "style" ? (
        <div>
          <h1>You are in style</h1>
          <input placeholder="who?" />
          <button className="text-white bg-red-700">Back</button>
          <button
            className="text-white bg-gray-700"
            onClick={() => send("NEXT")}
          >
            Next
          </button>
        </div>
      ) : null}
      {state.value === "end" ? (
        <div>
          <h1>You reached the end</h1>
        </div>
      ) : null} */}
    </>
  );
};

export default Machine;
