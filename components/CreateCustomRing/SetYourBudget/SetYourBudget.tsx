import Title from "../../Common/Title";
import Description from "../../Common/Description";
import Select from "../../Common/Select";
import Checkbox from "../../Common/Checkbox";

import InfoPopUp from "../../Common/InfoPopUpButton";
import { minPrice, maxPrice } from "../../../lib/consts";
import PrimaryButton from "../../Common/PrimaryButton";
const SetYourBudget = () => {
  return (
    <div className="w-full px-4 py-40 m-auto lg:px-52 lg:py-44">
      <div className="max-w-2xl lg:w-3/5">
        <div className="flex">
          <BackButton />
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
