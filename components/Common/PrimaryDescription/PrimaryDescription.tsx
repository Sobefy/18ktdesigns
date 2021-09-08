interface PrimaryDescriptionProps {
  text: string;
  textSize: string;
}
const PrimaryDescription = ({ text, textSize }: PrimaryDescriptionProps) => {
  const getTextSize = () => {
    switch (textSize) {
      case "gray":
        return "text-xl text-gray-500";
      case "blue":
        return "text-xl";
      case "grayLoose":
        return "text-gray-500 leading-loose";
      default:
        return "text-gray-500";
    }
  };
  return <p className={`${getTextSize()}`}>{text}</p>;
};

export default PrimaryDescription;
