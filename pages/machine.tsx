import { useMachine } from "@xstate/react";
import { createMachine, interpret } from "xstate";
import { inspect } from "@xstate/inspect";
import { customRingMachine } from "../src/machines/customRingMachine";

process.browser &&
  inspect({
    iframe: false,
  });

const Toggler = () => {
  const [state, send] = useMachine(customRingMachine, { devTools: true });

  return (
    <div>
      {state.matches("idle") ? (
        <div>
          <h1>You are in landing</h1>
          <button
            className="bg-gray-700 text-white"
            onClick={() => send("NEXT")}
          >
            Start
          </button>
        </div>
      ) : null}
      {state.matches("recipient") ? (
        <div>
          <h1>You are in who</h1>
          <button
            className="bg-green-500 text-white"
            onClick={() => send("SET_MY_SIGNIFICANT_OTHER")}
          >
            MY SIGNIFICANT OTHER
          </button>
          <button
            className="bg-green-500 text-white"
            onClick={() => send("SET_ME")}
          >
            ME
          </button>
          <button
            className="bg-green-500 text-white"
            onClick={() => send("SET_IDLE")}
          >
            IDLE
          </button>
          <button
            className="bg-red-700 text-white"
            onClick={() => send("BACK")}
          >
            Back
          </button>
          <button
            className="bg-gray-700 text-white"
            onClick={() => send("NEXT")}
          >
            Next
          </button>
        </div>
      ) : null}
      {state.value === "style" ? (
        <div>
          <h1>You are in style</h1>
          <input placeholder="who?" />
          <button className="bg-red-700 text-white">Back</button>
          <button
            className="bg-gray-700 text-white"
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
      ) : null}
    </div>
  );
};

export default Toggler;
