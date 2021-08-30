import BackButton from "../../BackButton/BackButton";
import Title from "../../Title";
import Description from "../../Description";
import Select from "../../Select";
import Checkbox from "../../Checkbox";
import NextButton from "../../NextButton";
import InfoPopUp from "../../InfoPopUp";
import { minPrice } from "../../../../lib/consts";
import { maxPrice } from "../../../../lib/consts";

const SetYourBudget = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <div className="flex">
          <BackButton text="Back" />
          <Title text="Set Your Budget" />
          <InfoPopUp />
        </div>
        <Description text="If you have a specific price point in mind, let us know so we can help guide you towards options that fit your budget." />
        <Select defaultOptionLabel="Min" options={minPrice} />
        <Select defaultOptionLabel="Max" options={maxPrice} />
        <Checkbox text="I'm not sure" />
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default SetYourBudget;
