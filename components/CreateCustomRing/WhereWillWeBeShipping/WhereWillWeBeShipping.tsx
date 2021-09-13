import Title from "@components/Common/Title";
import Description from "@components/Common/Description";
import BackButton from "@components/Common/BackButton";
import Select from "@components/Common/Select";
import { chooseACountry } from "@lib/consts";
import PrimaryButton from "@components/Common/PrimaryButton";

const WherWillBeShipping = () => {
  return (
    <div className="w-full px-4 py-40 m-auto lg:px-52 lg:py-44">
      <div className="max-w-2xl lg:w-3/5">
        <BackButton text="Back" />
        <Title text="Where Will We Be Shipping Your Ring?" />
        <Description text="We ship to 50+ countries worldwide. Where in the world will your ring be delivered?" />
        <Select
          defaultOptionLabel="-- Choose a response --"
          options={chooseACountry}
        />
        <PrimaryButton text="Next" />
      </div>
    </div>
  );
};
export default WherWillBeShipping;
