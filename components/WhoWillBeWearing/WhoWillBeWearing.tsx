import PrimaryButton from "../Common/PrimaryButton/PrimaryButton";
import Title from "../Common/Title";
import Description from "../Common/Description";
import Checkbox from "../Common/Checkbox";
import Input from "../Common/Input";
import BackButton from "../Common/BackButton/BackButton";
import Select from "../Common/Select";

const WhoWillBeWearing = () => {
  const chooseRecipientOptions = [
    {
      id: 1,
      value: "mySignificantOther",
      label: "My significant other",
    },
    {
      id: 2,
      value: "me",
      label: "Me",
    },
  ];

  return (
    <div className="w-full m-auto px-4 lg:px-52 py-40 lg:py-44">
      <div className="lg:w-3/5 max-w-2xl">
        <PrimaryButton text="Back" />
        <Title text=" Who Will Be Wearing The Ring?" />
        <Description
          text="Are you designing a ring for your significant other, or designing your
          own ring?"
        />
        <Select
          defaultOptionLabel="Choose recipient"
          options={chooseRecipientOptions}
        />

        <Description text="Who’s the lucky guy or gal?" />

        <Input text="Your S/O's First Name" />

        <Checkbox text="I'd prefer not to say" />

        <Description
          text="Looking around for a ring someone might surprise you with later, or are
        you planning to purchase your own ring?"
        />
        <select
          className="
                  lg:mb-12 
                  text-center
                  mb-6
                  py-4
                  px-8
                  md:mr-4
                  text-sm text-black
                  font-medium
                  leading-normal
                  bg-white
                "
        >
          <option>-- Select response --</option>
          <option>Shopping around</option>
          <option>Planning to buy my own ring</option>
          <option>My S/O and I are shopping together</option>
        </select>
        <PrimaryButton text="Next" />
      </div>
    </div>
  );
};
export default WhoWillBeWearing;
