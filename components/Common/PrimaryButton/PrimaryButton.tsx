interface PrimaryButtonProps {
  text: string;
  onClick?(): void;
  size?: "lg" | "md" | "sm" | "gray" | "blue";
}
const PrimaryButton = ({ text, onClick, size }: PrimaryButtonProps) => {
  const getButtonClassName = () => {
    switch (size) {
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
  return (
    <button
      className={`md:w-auto w-full py-4 text-center text-sm font-medium leading-normal rounded transition duration-200 ${getButtonClassName()}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
