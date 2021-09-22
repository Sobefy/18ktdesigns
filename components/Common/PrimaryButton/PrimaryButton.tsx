interface PrimaryButtonProps {
  text: string;
  onClick(): void;
  size?: "lg" | "md" | "sm" | "gray" | "blue" | "xl";
  width?: "max";
}
const PrimaryButton = ({ text, onClick, size, width }: PrimaryButtonProps) => {
  const getButtonClassName = () => {
    switch (size) {
      case "xl":
        return "px-6 text-white  bg-red-400 hover:bg-red-300";
      case "lg":
        return "px-12 text-white bg-red-400 hover:bg-red-300";
      case "md":
        return "px-8 text-white bg-red-400 hover:bg-red-300";
      case "gray":
        return "relative px-8 border border-gray-300 hover:border-gray-400";
      case "blue":
        return " text-center text-white lg:px-12 bg-blue-400 hover:bg-blue-500";
      case "sm":
        return "px-6 text-white bg-red-400 lg:w-auto hover:bg-red-300";
      default:
        return "";
    }
  };
  const getwidhtClassName = () => {
    if (width === "max") {
      return "md:w-full";
    }
    return "md:w-auto";
  };
  return (
    <button
      className={`w-full py-4 text-center text-sm font-medium leading-normal rounded transition duration-200 ${getButtonClassName()} ${getwidhtClassName()}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
