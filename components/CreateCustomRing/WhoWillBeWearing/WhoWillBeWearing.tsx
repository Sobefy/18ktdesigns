import NextButton from "../../Common/NextButton";
import Title from "../../Common/Title";
import Description from "../../Common/Description";
import Checkbox from "../../Common/Checkbox";
import Input from "../../Common/Input";
import BackButton from "../../Common/BackButton";
import Select from "../../Common/Select";
import {
  chooseRecipientOptions,
  selectResponseOptions,
} from "../../../lib/consts";
import React from "react";
import { useCreateCustomRingMachine } from "../../../lib/context/createCustomRing";

const WhoWillBeWearing = () => {
  const { state, send, nextState } = useCreateCustomRingMachine();
  const {
    whoWillBeWearingTheRing: {
      userSelection,
      mySignificantOther,
      me,
      preferNotToSay,
    },
  } = state.context;

  const canContinue =
    state.matches("recipient.me") ||
    mySignificantOther !== "" ||
    preferNotToSay;

  const handleChooseRecipient = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // TODO: Make this simplier
    const value = e.target.value;
    switch (value) {
      case "":
        send({ type: "IDLE" });
        break;
      case "MY_SIGNIFICANT_OTHER":
        send({ type: "MY_SIGNIFICANT_OTHER" });
        break;
      case "ME":
        send({ type: "ME" });
        break;
      default:
        break;
    }
  };

  const handleMe = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // TODO: Make this simplier
    switch (value) {
      case "IDLE":
        send({ type: "SET_ME", value: "" });
        break;
      case "SHOPPING_AROUND":
        send({ type: "SET_ME", value: "SHOPPING_AROUND" });
        break;
      case "BUYING_MY_OWN_RING":
        send({ type: "SET_ME", value: "BUYING_MY_OWN_RING" });
        break;
      case "MY_SO_AND_I_ARE_SHOPPING_TOGHETER":
        send({ type: "SET_ME", value: "MY_SO_AND_I_ARE_SHOPPING_TOGHETER" });
        break;
      default:
        break;
    }
  };

  const handleSoFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    send({ type: "SET_MY_SIGNIFICANT_OTHER", value });
  };

  const handleIdPreferNotToSay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    send({ type: "SET_PREFFER_NOT_TO_SAY", value: checked });
  };

  const handleNext = () => {
    send("NEXT");
  };

  return (
    <>
      <div className="flex">
        <BackButton onClick={() => send({ type: "BACK" })} />
        <Title text="Who Will Be Wearing The Ring?" />
      </div>
      <Description
        text="Are you designing a ring for your significant other, or designing your
          own ring?"
      />
      <Select
        options={chooseRecipientOptions}
        value={userSelection}
        onChange={handleChooseRecipient}
      />
      {state.matches("recipient.mySignificantOther") ? (
        <>
          <Description text="Who’s the lucky guy or gal?" />
          <Input
            text="Your S/O's First Name"
            value={mySignificantOther}
            onChange={handleSoFirstName}
          />
          <Checkbox
            text="I'd prefer not to say"
            checked={preferNotToSay}
            onChange={handleIdPreferNotToSay}
          />
        </>
      ) : null}
      {state.matches("recipient.me") ? (
        <>
          <Description
            text="Looking around for a ring someone might surprise you with later, or are
        you planning to purchase your own ring?"
          />
          <Select
            value={me}
            options={selectResponseOptions}
            onChange={handleMe}
          />
        </>
      ) : null}
      {canContinue ? <NextButton text="Next" onClick={handleNext} /> : null}
    </>
  );
};
export default WhoWillBeWearing;
