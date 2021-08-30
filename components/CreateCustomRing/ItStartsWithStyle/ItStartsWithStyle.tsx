import BackButton from "../../Common/BackButton";
import Title from "../../Common/Title";
import Description from "../../Common/Description";
import NextButton from "../../Common/NextButton";
import List from "../../Common/List";
import Checkbox from "../../Common/Checkbox";
import { selectAllThatApply } from "../../../lib/consts";

const ItStartsWithStyle = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <BackButton text="Back" />
        <Title text="It Starts With Style" />
        <Description
          text="Already know what ring style you’re going for, or are you not sure
          quite yet?"
        />
        <Description text="SELECT ALL THAT APPLY" />
        <div className="bg-white shadow-xl rounded-lg w-1/2">
          <List options={selectAllThatApply} />
        </div>
        <div className="flex mt-6">
          <label className="flex items-center">
            <Checkbox text="I have no ideas yet - I just want an amazing ring!" />
          </label>
        </div>
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default ItStartsWithStyle;
