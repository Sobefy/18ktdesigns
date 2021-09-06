import NextButton from "../../Common/NextButton";
import Title from "../../Common/Title";
import Description from "../../Common/Description";
import BackButton from "../../Common/BackButton/BackButton";
import Select from "../../Common/Select";
import { chooseAResponse } from "../../../lib/consts";

const HowDidYouFindUs = () => {
  return (
    <div className="w-full px-4 py-40 m-auto lg:px-52 lg:py-44">
      <div className="max-w-2xl lg:w-3/5">
        <BackButton />
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
