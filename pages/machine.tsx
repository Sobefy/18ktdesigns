import { useMachine } from "@xstate/react";
import { inspect } from "@xstate/inspect";

import { customRingMachine } from "../src/machines/customRingMachine";

process.browser &&
  inspect({
    iframe: false,
  });

const Toggler = () => {
  const [state, send] = useMachine(customRingMachine, { devTools: true });
  const {
    whoWillBeWearingTheRing: { mySignificantOther },
  } = state.context;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    switch (value) {
      case "idle":
        send("IDLE");
        break;
      case "mySignificantOther":
        send("MY_SIGNIFICANT_OTHER");
        break;
      case "me":
        send("ME");
        break;
      default:
        break;
    }
  };

  const handleMySignificantOther = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    send({ type: "SET_MY_SIGNIFICANT_OTHER", value: inputValue });
  };

  return (
    <div>
      {state.matches("landing") ? (
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
          <button
            className="bg-red-700 text-white"
            onClick={() => send("BACK")}
          >
            Back
          </button>
          <h1>You are in who</h1>
          <div className="flex flex-col">
            <select onChange={handleSelect}>
              <option value="idle">Select an option</option>
              <option value="mySignificantOther">My Significant other</option>
              <option value="me">Me</option>
            </select>
          </div>
          {state.matches("recipient.mySignificantOther") ? (
            <>
              <h1>Enter the persons name</h1>
              <input
                type="text"
                placeholder="Person"
                onChange={handleMySignificantOther}
                value={mySignificantOther}
              />
            </>
          ) : null}
          {state.matches("recipient.me") ? <h1>Youre in Me</h1> : null}
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
