import BackButton from "../../Common/BackButton";
import Title from "../../Common/Title";
import Description from "../../Common/Description";
import NextButton from "../../Common/NextButton";
import List from "../../Common/List";
import Checkbox from "../../Common/Checkbox";
import { selectAllThatApply } from "../../../lib/consts";

const ItStartsWithStyle = () => {
  return (
    <>
      <div className="flex">
        <BackButton text="" />
        <Title text="It Starts With Style" />
      </div>
      <Description
        text="Already know what ring style you’re going for, or are you not sure
          quite yet?"
      />
      <Description text="SELECT ALL THAT APPLY" />

      <List options={selectAllThatApply} />

      <Checkbox text="I have no ideas yet - I just want an amazing ring!" />

      <NextButton text="Next" />
    </>
  );
};
export default ItStartsWithStyle;
