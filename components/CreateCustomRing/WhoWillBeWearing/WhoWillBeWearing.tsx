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
import PrimaryButton from "../../Common/PrimaryButton";

const WhoWillBeWearing = () => {
  return (
    <>
      <div className="flex">
        <BackButton text="" />
        <Title text="Who Will Be Wearing The Ring?" />
      </div>
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
      <PrimaryButton text="Next" />
    </>
  );
};
export default WhoWillBeWearing;
