import NextButton from "../../Common/NextButton";
import Title from "../../Common/Title";
import Description from "../../Common/Description";
import BackButton from "../../Common/BackButton";
import Select from "../../Common/Select";
import { chooseACountry } from "../../../lib/consts";

const WherWillBeShipping = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <BackButton text="Back" />
        <Title text="Where Will We Be Shipping Your Ring?" />
        <Description text="We ship to 50+ countries worldwide. Where in the world will your ring be delivered?" />
        <Select
          defaultOptionLabel="-- Choose a response --"
          options={chooseACountry}
        />
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default WherWillBeShipping;
