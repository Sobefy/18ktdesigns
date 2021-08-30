import NextButton from "../../NextButton";
import Title from "../../Title";
import Description from "../../Description";
import BackButton from "../../BackButton/BackButton";
import Select from "../../Select";

const WherWillBeShipping = () => {
  const chooseACountry = [
    {
      id: 1,
      value: "unitedStates",
      label: "United States",
    },
    {
      id: 2,
      value: "canada",
      label: "Canada",
    },
    {
      id: 3,
      value: "unitedKingdom",
      label: " United Kingdom",
    },
    {
      id: 4,
      value: "australia",
      label: "Australia",
    },
    {
      id: 5,
      value: "other",
      label: "Other",
    },
  ];
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
