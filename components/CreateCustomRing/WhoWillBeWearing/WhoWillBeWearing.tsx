import NextButton from "../../Common/NextButton";
import Title from "../../Common/Title";
import Description from "../../Common/Description";
import Checkbox from "../../Common/Checkbox";
import Input from "../../Common/Input";
import BackButton from "../../Common/BackButton";
import Select from "../../Common/Select";
import {
  chooseRecipientOptions,
  selectResponseOptions,
} from "../../../lib/consts";

const WhoWillBeWearing = () => {
  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <BackButton text="Back" />
        <Title text="Who Will Be Wearing The Ring?" />
        <Description
          text="Are you designing a ring for your significant other, or designing your
          own ring?"
        />
        <Select
          defaultOptionLabel="-- Choose recipient --"
          options={chooseRecipientOptions}
        />

        <Description text="Who’s the lucky guy or gal?" />

        <Input text="Your S/O's First Name" />

        <Checkbox text="I'd prefer not to say" />

        <Description
          text="Looking around for a ring someone might surprise you with later, or are
        you planning to purchase your own ring?"
        />
        <Select
          defaultOptionLabel="-- Select response --"
          options={selectResponseOptions}
        />
        <NextButton text="Next" />
      </div>
    </div>
  );
};
export default WhoWillBeWearing;
