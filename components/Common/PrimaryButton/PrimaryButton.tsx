interface PrimaryButtonProps {
  text: string;
  onClick?(): void;
  alternateButton?: boolean;
  ctaButton?: boolean;
  ctaCollageButton?: boolean;
}
const PrimaryButton = ({
  text,
  onClick,
  alternateButton = false,
  ctaButton = false,
  ctaCollageButton = false,
}: PrimaryButtonProps) => {
  const getClassName = () => {
    if (ctaButton) {
      return " ml-auto w-full md:w-auto px-12   text-white   bg-red-400 hover:bg-red-300 ";
    }
    if (ctaCollageButton) {
      return "  px-8  text-white   bg-red-400 hover:bg-red-300 transition duration-200 ";
    }
    if (alternateButton) {
      return "z-10 relative  w-full md:w-auto  px-8 mr-4    border border-gray-300 hover:border-gray-400 ";
    }
    return "z-10 relative  w-full md:w-auto mb-2  px-8 mr-4  text-white   bg-red-400 hover:bg-red-300 ";
  };
  return (
    <button
      className={`inline-block py-4 text-center text-sm font-medium leading-normal rounded transition duration-200 ${getClassName()}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
