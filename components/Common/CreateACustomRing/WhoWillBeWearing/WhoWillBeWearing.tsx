import NextButton from "../../NextButton";
import Title from "../../Title";
import Description from "../../Description";
import Checkbox from "../../Checkbox";
import Input from "../../Input";
import BackButton from "../../BackButton/BackButton";
import Select from "../../Select";

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
  const selectResponseOptions = [
    {
      id: 1,
      value: "shoppingAround",
      label: "Shopping around",
    },
    {
      id: 2,
      value: "planningToBuyMyOwnRing",
      label: "Planning to buy my own ring",
    },
    {
      id: 3,
      value: "mySOAndIAreShoppingTogether",
      label: "My S/O and i are shopping together",
    },
  ];

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
