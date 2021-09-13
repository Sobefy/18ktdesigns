import Title from "@components/Common/Title";
import Description from "@components/Common/Description";
import BackButton from "@components/Common/BackButton";
import Select from "@components/Common/Select";
import PrimaryButton from "@components/Common/PrimaryButton";
import { chooseACountry } from "@lib/consts";
import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";
import { ShippingOptions } from "@lib/machines/CreateCustomRing/types";

const WherWillBeShipping = () => {
  const {
    state: {
      context: { shipping },
    },
    send,
  } = useCreateCustomRingMachine();

  const canContinue = shipping !== ShippingOptions.EMPTY;

  const handleBack = () => {
    send("BACK");
  };

  const handleNext = () => {
    send("NEXT");
  };

  const handleSelectShipping = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as unknown as ShippingOptions;
    send({ type: "SET_SHIPPING", value });
  };

  return (
    <>
      <BackButton onClick={handleBack} />
      <Title text="Where Will We Be Shipping Your Ring?" />
      <Description text="We ship to 50+ countries worldwide. Where in the world will your ring be delivered?" />
      <Select<ShippingOptions>
        options={chooseACountry}
        value={shipping}
        onChange={handleSelectShipping}
      />
      {canContinue ? <PrimaryButton text="Next" onClick={handleNext} /> : null}
    </>
  );
};
export default WherWillBeShipping;
