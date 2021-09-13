/* eslint-disable @next/next/no-img-element */
import BackButton from "../../Common/BackButton";
import Checkbox from "../../Common/Checkbox";
import Description from "../../Common/Description";
import Title from "../../Common/Title";
import List from "../../Common/List";
import { selectStone } from "../../../lib/consts";
import PrimaryButton from "../../Common/PrimaryButton";
import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";
import { YourCenterStoneOptions } from "@lib/machines/CreateCustomRing/types";

const YourCenterStone = () => {
  const {
    state: {
      context: {
        yourCenterStone: { stones, imNotSure },
      },
    },
    send,
  } = useCreateCustomRingMachine();

  const canContinue = stones.length > 0 || imNotSure;

  const handleBack = () => {
    send("BACK");
  };

  const handleNext = () => {
    send("NEXT");
  };

  const handleImNotSure = () => {
    send("SET_IM_NOT_SURE");
  };

  return (
    <>
      <BackButton onClick={handleBack} />
      <Title text="Your Center Stone" />
      <Description text="What types of center stones might you be considering for your ring?" />
      <Description text="SELECT ALL THAT APPLY" />
      <section className="px-4 pt-8">
        <List<YourCenterStoneOptions>
          selectedItems={stones}
          options={selectStone}
          setSelectedItems={(items) =>
            send({ type: "SET_STONES", stones: items })
          }
        />
      </section>
      <div className="flex mt-6">
        <label className="flex items-center">
          <Checkbox
            text="I'm not sure"
            checked={imNotSure}
            onChange={handleImNotSure}
          />
        </label>
      </div>
      {canContinue ? <PrimaryButton text="Next" onClick={handleNext} /> : null}
    </>
  );
};
export default YourCenterStone;
