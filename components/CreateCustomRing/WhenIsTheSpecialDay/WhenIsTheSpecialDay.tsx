import Title from "../../Common/Title";
import Description from "../../Common/Description";
import BackButton from "../../Common/BackButton/BackButton";
import Select from "../../Common/Select";
import { chooseAResponseOptions } from "../../../lib/consts";
import Calendar from "../../Common/Calendar";
import PrimaryButton from "../../Common/PrimaryButton";
import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";
import { WhenIsTheSpecialDayOptions } from "@lib/machines/CreateCustomRing/types";

const WhenIsTheSpecialDay = () => {
  const {
    state: {
      context: {
        whenIsTheSpecialDate: { date, specialDate },
      },
    },
    send,
  } = useCreateCustomRingMachine();

  const canContinue =
    (specialDate === WhenIsTheSpecialDayOptions.I_HAVE_A_SPECIFIC_DATE &&
      date !== null) ||
    (specialDate !== WhenIsTheSpecialDayOptions.EMPTY &&
      specialDate !== WhenIsTheSpecialDayOptions.I_HAVE_A_SPECIFIC_DATE);

  const handleBack = () => {
    send("BACK");
  };

  const handleNext = () => {
    send("NEXT");
  };

  const handleChooseSpecialDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as unknown as WhenIsTheSpecialDayOptions;
    send({ type: "SET_SPECIAL_DATE", value });
  };

  const handleSelectDate = (newDate: Date) => {
    send({ type: "SET_DATE", date: newDate });
  };

  return (
    <>
      <BackButton onClick={handleBack} />
      <Title text="When's The Special Day" />
      <Description text="If you have a planned proposal in mind, let us know so we can make sure your project stays on track." />
      <Description text="If you don't have a date yet, or you're just starting to look around, that's okay too!" />
      <Description text="Note that the minimum time required for production is 4 weeks." />
      <Select<WhenIsTheSpecialDayOptions>
        options={chooseAResponseOptions}
        value={specialDate}
        onChange={handleChooseSpecialDay}
      />
      {specialDate === WhenIsTheSpecialDayOptions.I_HAVE_A_SPECIFIC_DATE ? (
        <Calendar date={date} handleSelectDate={handleSelectDate} />
      ) : null}
      {canContinue ? <PrimaryButton text="Next" onClick={handleNext} /> : null}
    </>
  );
};
export default WhenIsTheSpecialDay;
