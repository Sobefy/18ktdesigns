import Title from "@components/Common/Title";
import Description from "@components/Common/Description";
import Select from "@components/Common/Select";
import Checkbox from "@components/Common/Checkbox";
import InfoPopUp from "@components/Common/InfoPopUpButton";
import PrimaryButton from "@components/Common/PrimaryButton";
import BackButton from "@components/Common/BackButton";
import { minPrice, maxPrice } from "@lib/consts";
import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";
import { BudgetOptions } from "@lib/types";

const SetYourBudget = () => {
  const {
    state: {
      context: {
        setYourBudget: { min, max, imNotSure },
      },
    },
    send,
  } = useCreateCustomRingMachine();

  const canContinue = min !== 0 || max !== 0 || imNotSure;

  const handleBack = () => {
    send("BACK");
  };

  const handleNext = () => {
    send("NEXT");
  };

  const handleImNotSure = () => {
    send("SET_YOUR_BUDGET_SET_IM_NOT_SURE");
  };

  const handleMin = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as unknown as BudgetOptions;
    send({ type: "SET_MIN", value });
  };

  const handleMax = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as unknown as BudgetOptions;
    send({ type: "SET_MAX", value });
  };

  return (
    <>
      <div className="flex">
        <BackButton onClick={handleBack} />
        <Title text="Set Your Budget" />
        <InfoPopUp />
      </div>
      <Description text="If you have a specific price point in mind, let us know so we can help guide you towards options that fit your budget." />
      <Select<BudgetOptions>
        options={minPrice}
        value={min}
        onChange={handleMin}
      />
      <Select<BudgetOptions>
        options={maxPrice}
        value={max}
        onChange={handleMax}
      />
      <Checkbox
        text="I'm not sure"
        checked={imNotSure}
        onChange={handleImNotSure}
      />
      {canContinue ? <PrimaryButton text="Next" onClick={handleNext} /> : null}
    </>
  );
};
export default SetYourBudget;
