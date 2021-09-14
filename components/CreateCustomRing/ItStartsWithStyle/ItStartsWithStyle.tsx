import { selectAllThatApply } from "@lib/consts";
import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";
import BackButton from "@components/Common/BackButton";
import Title from "@components/Common/Title";
import Description from "@components/Common/Description";
import List from "@components/Common/List";
import Checkbox from "@components/Common/Checkbox";
import PrimaryButton from "@components/Common/PrimaryButton";
import { StartsWithStyleOptions } from "@lib/machines/CreateCustomRing/types";

const ItStartsWithStyle = () => {
  const {
    state: {
      context: {
        startsWithStyle: { styles, iHaveNoIdea },
      },
    },
    send,
  } = useCreateCustomRingMachine();

  const canContinue = styles.length > 0 || iHaveNoIdea;

  const handleBack = () => {
    send("BACK");
  };

  const handleNext = () => {
    send("NEXT");
  };

  const handleIHaveNoIdea = () => {
    send("SET_I_HAVE_NO_IDEA");
  };

  return (
    <>
      <div className="flex">
        <BackButton onClick={handleBack} />
        <Title text="It Starts With Style" />
      </div>
      <Description
        text="Already know what ring style you’re going for, or are you not sure
          quite yet?"
      />
      <Description text="SELECT ALL THAT APPLY" />
      <List<StartsWithStyleOptions>
        options={selectAllThatApply}
        selectedItems={styles}
        setSelectedItems={(styles) => send({ type: "SET_STYLES", styles })}
      />
      <Checkbox
        text="I have no ideas yet - I just want an amazing ring!"
        checked={iHaveNoIdea}
        onChange={handleIHaveNoIdea}
      />
      {canContinue ? (
        <PrimaryButton text="Next" onClick={handleNext} size="md" />
      ) : null}
    </>
  );
};
export default ItStartsWithStyle;
