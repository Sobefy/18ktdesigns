import SlideButtonSvg from "../SlideButtonSvg";

interface slideButtonsProps {
  onClick(): void;
  directionLeft?: boolean;
  responsive?: "desktop" | "mobile";
}
const SlideButtons = ({
  directionLeft = false,
  onClick,
  responsive,
}: slideButtonsProps) => {
  const printSlideButton = () => {
    switch (responsive) {
      case "desktop":
        return "hidden";
      case "mobile":
        return "lg:hidden";
      default:
        return "";
    }
  };
  return (
    <>
      {directionLeft ? (
        <button
          className={`mr-5 border rounded-full lg:block w-14 h-14 hover:bg-gray-50 ${printSlideButton()}`}
          onClick={onClick}
        >
          <SlideButtonSvg left />
        </button>
      ) : (
        <button
          className={`mr-5 border rounded-full lg:block w-14 h-14 hover:bg-gray-50 ${printSlideButton()}`}
          onClick={onClick}
        >
          <SlideButtonSvg />
        </button>
      )}
    </>
  );
};

export default SlideButtons;
