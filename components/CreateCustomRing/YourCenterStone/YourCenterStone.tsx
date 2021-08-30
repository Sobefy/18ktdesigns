/* eslint-disable @next/next/no-img-element */
import BackButton from "../../BackButton";
import Checkbox from "../../Checkbox";
import Description from "../../Description";
import NextButton from "../../NextButton";
import Title from "../../Title";
import List from "../../List";
import { selectStone } from "../../../../lib/consts";

const YourCenterStone = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <BackButton text="Back" />
        <Title text="Your Center Stone" />
        <Description text="What types of center stones might you be considering for your ring?" />
        <Description text="SELECT ALL THAT APPLY" />
        <section className="pt-8 px-4">
          <List options={selectStone} />
        </section>
        <div className="flex mt-6">
          <label className="flex items-center">
            <Checkbox text="I'm not sure" />
          </label>
        </div>
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default YourCenterStone;
