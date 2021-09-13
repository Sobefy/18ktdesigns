import Title from "@components/Common/Title";
import Description from "@components/Common/Description";
import BackButton from "@components/Common/BackButton/BackButton";
import Select from "@components/Common/Select";
import { chooseAResponseOptions } from "@lib/consts";
import Calendar from "@components/Common/Calendar";
import PrimaryButton from "@components/Common/PrimaryButton";

const WhenIsTheSpecialDay = () => {
  return (
    <div className="w-full px-4 py-40 m-auto lg:px-52 lg:py-44">
      <div className="max-w-2xl lg:w-3/5">
        <BackButton text="Back" />
        <Title text="When's The Special Day" />
        <Description text="If you have a planned proposal in mind, let us know so we can make sure your project stays on track." />
        <Description text="If you don't have a date yet, or you're just starting to look around, that's okay too!" />
        <Description text="Note that the minimum time required for production is 4 weeks." />
        <Select
          defaultOptionLabel="-- Choose a response --"
          options={chooseAResponseOptions}
        />
        <Calendar />
        <PrimaryButton text="Next" />
      </div>
    </div>
  );
};
export default WhenIsTheSpecialDay;
