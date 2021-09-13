import PrimaryButton from "@components/Common/PrimaryButton";
import { useCreateCustomRingMachine } from "@lib/context/createCustomRing";

const Landing = () => {
  const { send } = useCreateCustomRingMachine();
  return (
    <>
      <h2 className="mb-6 text-4xl font-semibold lg:mb-12 lg:text-5xl">
        Let&apos;s create your custom ring
      </h2>
      <p className="mb-6 leading-relaxed text-gray-500 lg:mb-14">
        Before we begin, we&apos;d like to learn a bit about what you&apos;re
        looking for so we can give you the best experience possible.
      </p>
      <div className="flex flex-wrap">
        <PrimaryButton
          text="Get Started"
          onClick={() => send({ type: "NEXT" })}
        />
        <a
          className="block w-full px-8 py-4 mb-2 text-sm font-medium text-center rounded md:w-auto borderhover:border-gray-300"
          href="#"
        >
          Design other jewelry
        </a>
      </div>
    </>
  );
};
export default Landing;
