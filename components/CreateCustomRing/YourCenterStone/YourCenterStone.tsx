import BackButton from "@components/Common/BackButton";
import Checkbox from "@components/Common/Checkbox";
import Description from "@components/Common/Description";
import Title from "@components/Common/Title";
import List from "@components/Common/List";
import PrimaryButton from "@components/Common/PrimaryButton";
import { selectStone } from "@lib/consts";
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
      <section className="">
        <List<YourCenterStoneOptions>
          selectedItems={stones}
          options={selectStone}
          style="grid"
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
      {canContinue ? (
        <PrimaryButton text="Next" size="md" onClick={handleNext} />
      ) : null}
    </>
  );
};
export default YourCenterStone;
