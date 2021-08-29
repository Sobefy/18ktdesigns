import BackButton from "../../BackButton";
import Title from "../../Title";
import Description from "../../Description";
import NextButton from "../../NextButton";
import List from "../../List/List";
import Checkbox from "../../Checkbox";

const ItStartsWithStyle = () => {
  const selectAllThatApply = [
    {
      id: 1,
      value: "iHaveImagesOfASpecificRing",
      label: "I have images of a specific ring (or rings) I can Share.",
    },
    {
      id: 2,
      value: "mySignificantOtherHasDroppedSomeHints",
      label:
        "My significant other has dropped some hints or given me some ideas.",
    },
    {
      id: 3,
      value: "iKnowMySignificantOther",
      label: "I know my significant other’s sense of style pretty well.",
    },
    {
      id: 4,
      value: "HaveSomeDesignIdeasOfMyOwn.",
      label: "I have some design ideas of my own.",
    },
  ];
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <BackButton text="Back" />
        <Title text="It Starts With Style" />
        <Description
          text="Already know what ring style you’re going for, or are you not sure
          quite yet?"
        />
        <Description text="SELECT ALL THAT APPLY" />
        <div className="bg-white shadow-xl rounded-lg w-1/2">
          <List options={selectAllThatApply} />
        </div>
        <div className="flex mt-6">
          <label className="flex items-center">
            <Checkbox text="I have no ideas yet - I just want an amazing ring!"/>
          </label>
        </div>
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default ItStartsWithStyle;
