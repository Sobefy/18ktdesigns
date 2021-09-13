import NextButton from "../../Common/PrimaryButton";
import Title from "../../Common/Title";
import Description from "../../Common/Description";
import BackButton from "../../Common/BackButton/BackButton";
import Select from "../../Common/Select";
import { howDidYouFindUsList } from "../../../lib/consts";
import PrimaryButton from "../../Common/PrimaryButton";
import { HowDidYouFindUsOptions } from "@lib/machines/CreateCustomRing/types";
import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";

const HowDidYouFindUs = () => {
  const {
    state: {
      context: { howDidYouFindUs },
    },
    send,
  } = useCreateCustomRingMachine();

  const canContinue = howDidYouFindUs !== HowDidYouFindUsOptions.EMPTY;

  const handleBack = () => {
    send("BACK");
  };

  const handleNext = () => {
    send("NEXT");
  };

  const handleHowDidYouFindUs = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as unknown as HowDidYouFindUsOptions;
    send({ type: "SET_HOW_DID_YOU_FIND_US", value });
  };

  return (
    <>
      <BackButton onClick={handleBack} />
      <Title text="How Did You Find Us?" />
      <Description text="Whether you stumbled across us on your own, or heard about us from a friend, letting us know how you found your way to us will help us out!" />
      <Select<HowDidYouFindUsOptions>
        options={howDidYouFindUsList}
        value={howDidYouFindUs}
        onChange={handleHowDidYouFindUs}
      />
      {canContinue ? <PrimaryButton text="Next" onClick={handleNext} /> : null}
    </>
  );
};
export default HowDidYouFindUs;
