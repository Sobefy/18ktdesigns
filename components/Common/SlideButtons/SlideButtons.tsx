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
          <svg
            className="mx-auto"
            width="19"
            height="13"
            viewBox="0 0 19 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.30018 6.25122L18.2502 6.25122"
              stroke="#838EA4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.30017 1.25024L1.36317 6.25124L9.30017 11.2522L9.30017 1.25024Z"
              stroke="#838EA4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          className={`mr-5 border rounded-full lg:block w-14 h-14 hover:bg-gray-50 ${printSlideButton()}`}
          onClick={onClick}
        >
          <svg
            className="mx-auto"
            width="19"
            height="13"
            viewBox="0 0 19 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.69979 6.74878L0.749786 6.74878"
              stroke="#838EA4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.6998 11.7498L17.6368 6.74876L9.6998 1.74776V11.7498Z"
              stroke="#838EA4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default SlideButtons;
