import NextButton from "../../NextButton";
import Title from "../../Title";
import Description from "../../Description";
import BackButton from "../../BackButton/BackButton";
import Select from "../../Select";

const WhenIsTheSpecialDay = () => {
  const chooseAResponseOptions = [
    {
      id: 1,
      value: "yesIHaveASpecificDate",
      label: "Yes, I have a specific date",
    },
    {
      id: 2,
      value: "noSpecificDateButSoon",
      label: "No specific date, but soon (in the nex 1-2 months)",
    },
    {
      id: 3,
      value: "noSpecificDateButSometime",
      label: "No specific date, but sometime in the next 6 months",
    },
    {
        id: 4,
        value: "withinTheNext",
        label: "Within the next 12 months",
      },
      {
        id: 5,
        value: "overAYearFromNow",
        label: "Over a year from now",
      },
      {
        id: 6,
        value: "imJustLookingForNow",
        label: "I'm just looking for now",
      },
  ];
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
