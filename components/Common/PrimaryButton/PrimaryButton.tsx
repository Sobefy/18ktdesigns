interface PrimaryButtonProps {
  text: string;
  onClick?(): void;
  buttonLocated?:
    | "ctaButton"
    | "ctaCollageButton"
    | "alternateButton"
    | "newsletterButton";
}
const PrimaryButton = ({
  text,
  onClick,
  buttonLocated = "ctaButton",
}: PrimaryButtonProps) => {
  const getButtonClassName = () => {
    switch (buttonLocated) {
      case "ctaButton":
        return " ml-auto w-full md:w-auto px-12   text-white   bg-red-400 hover:bg-red-300 ";
      case "ctaCollageButton":
        return "px-8  text-white   bg-red-400 hover:bg-red-300 transition duration-200 ";
      case "alternateButton":
        return "z-10 relative  w-full md:w-auto  px-8 mr-4    border border-gray-300 hover:border-gray-400 ";
      case "newsletterButton":
        return "w-full px-6 py-4 text-sm font-medium leading-normal text-white transition duration-200 bg-red-400 rounded lg:w-auto hover:bg-red-300";
      default:
        return "z-10 relative  w-full md:w-auto mb-2  px-8 mr-4  text-white   bg-red-400 hover:bg-red-300 ";
    }
  };
  return (
    <button
      className={`inline-block py-4 text-center text-sm font-medium leading-normal rounded transition duration-200 ${getButtonClassName()}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
