import NextButton from "../../NextButton";
import Title from "../../Title";
import Description from "../../Description";
import BackButton from "../../BackButton/BackButton";
import Select from "../../Select";

const HowDidYouFindUs = () => {
  const chooseAResponse = [
    {
      id: 1,
      value: "internetSearch",
      label: "Internet search (Google, Bing, etc..)",
    },
    {
      id: 2,
      value: "mySignificantOther",
      label: "My significant other",
    },
    {
      id: 3,
      value: "friendOrFamily",
      label: "Friends or family",
    },
    {
      id: 4,
      value: "socialMedia",
      label: "Social media (Facebook, Pinterest, etc.)",
    },
    {
      id: 5,
      value: "blogOrOtherWebsite",
      label: "Blog or other website (Buzzfeed, etc)",
    },
    {
      id: 6,
      value: "radioTv",
      label: "Radio / TV",
    },
    {
      id: 7,
      value: "print",
      label: "Print (Magazine, newspaper, etc.)",
    },
    {
      id: 8,
      value: "other",
      label: "Other",
    },
  ];
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
