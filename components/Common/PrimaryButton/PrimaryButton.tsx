interface PrimaryButtonProps {
  text: string;
  onClick(): void;
  size?: "lg" | "md" | "sm" | "gray";
  className?: string;
}
const PrimaryButton = ({
  text,
  onClick,
  size,
  className = "",
}: PrimaryButtonProps) => {
  const getButtonClassName = () => {
    switch (size) {
      case "lg":
        return "px-12 text-white bg-red-400 hover:bg-red-300";
      case "md":
        return "px-8 text-white bg-red-400 hover:bg-red-300";
      case "gray":
        return "relative px-8 border border-gray-300 hover:border-gray-400";
      case "sm":
        return "px-6 text-white bg-red-400 lg:w-auto hover:bg-red-300";
      default:
        return "";
    }
  };
  return (
    <button
      className={`md:w-auto w-full py-4 text-center text-sm font-medium leading-normal rounded transition duration-200 ${getButtonClassName()} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
