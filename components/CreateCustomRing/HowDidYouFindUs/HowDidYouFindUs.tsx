import NextButton from "../../NextButton";
import Title from "../../Title";
import Description from "../../Description";
import BackButton from "../../BackButton/BackButton";
import Select from "../../Select";
import { chooseAResponse } from "../../../../lib/consts";

const HowDidYouFindUs = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <BackButton text="Back" />
        <Title text="How Did You Find Us?" />
        <Description text="Whether you stumbled across us on your own, or heard about us from a friend, letting us know how you found your way to us will help us out!" />
        <Select
          defaultOptionLabel="-- Choose a response --"
          options={chooseAResponse}
        />
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default HowDidYouFindUs;
