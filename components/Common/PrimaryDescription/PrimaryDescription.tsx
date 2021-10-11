import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document as RichText } from "@contentful/rich-text-types";
interface PrimaryDescriptionProps {
  text: string | RichText;
  textSize?: string;
  isRichText?: boolean;
}
const PrimaryDescription = ({
  text,
  textSize,
  isRichText = false,
}: PrimaryDescriptionProps) => {
  const textToDisplay = isRichText
    ? documentToReactComponents(text as RichText)
    : text;

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
  return <p className={`${getTextSize()}`}>{textToDisplay}</p>;
};

export default PrimaryDescription;
