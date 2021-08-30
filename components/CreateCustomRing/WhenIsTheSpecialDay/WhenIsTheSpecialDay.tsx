import NextButton from "../../NextButton";
import Title from "../../Title";
import Description from "../../Description";
import BackButton from "../../BackButton/BackButton";
import Select from "../../Select";
import { chooseAResponseOptions } from "../../../../lib/consts";

const WhenIsTheSpecialDay = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <BackButton text="Back" />
        <Title text="When's The Special Day" />
        <Description text="If you have a planned proposal in mind, let us know so we can make sure your project stays on track." />
        <Description text="If you don't have a date yet, or you're just starting to look around, that's okay too!" />
        <Description text="Note that the minimum time required for production is 4 weeks." />
        <Select
          defaultOptionLabel="-- Choose a response --"
          options={chooseAResponseOptions}
        />
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default WhenIsTheSpecialDay;
