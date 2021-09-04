import Title from "../../Common/Title";
import Description from "../../Common/Description";
import Select from "../../Common/Select";
import Checkbox from "../../Common/Checkbox";

import InfoPopUp from "../../Common/InfoPopUpButton";
import { minPrice, maxPrice } from "../../../lib/consts";
import PrimaryButton from "../../Common/PrimaryButton";
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
        <PrimaryButton text="Next" />
      </div>
    </div>
  );
};
export default SetYourBudget;
