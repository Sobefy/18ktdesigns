interface PrimaryButtonProps {
  text: string;
  onClick?(): void;
  buttonLocated?: "lg" | "md" | "sm" | "gray";
}
const PrimaryButton = ({
  text,
  onClick,
  buttonLocated,
}: PrimaryButtonProps) => {
  const getButtonClassName = () => {
    switch (buttonLocated) {
      case "lg":
        return "    px-12   text-white   bg-red-400 hover:bg-red-300 ";
      case "md":
        return "px-8   text-white  bg-red-400 hover:bg-red-300  ";
      case "gray":
        return " relative   px-8    border border-gray-300 hover:border-gray-400 ";
      case "sm":
        return " px-6    text-white bg-red-400  lg:w-auto hover:bg-red-300";
      default:
        return " ";
    }
  };
  return (
    <button
      className={`  py-4 text-center  text-sm font-medium leading-normal rounded transition duration-200 ${getButtonClassName()}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
