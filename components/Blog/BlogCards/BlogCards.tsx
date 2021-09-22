import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { BlogCardInfoType } from "@lib/types";
import Image from "next/image";
import moment from "moment";

interface BlogCardsProps {
  data: BlogCardInfoType;
  index: number;
}
const BlogCards = ({ data, index }: BlogCardsProps) => {
  const {
    id,
    value,
    title,
    summary,
    image,
    imageHeight = 384,
    imageWidth = 736,
    imageUnit,
    publicationDate,
    buttonText,
  } = data;
  const date = moment(`${publicationDate}`);
  const dateFormat = "D MMM YYYY kk:mm ";
  const getWidthClass = () => {
    if (index === 0) {
      return "lg:w-2/3";
    }
    return "lg:w-1/3";
  };
  return (
    <div className={`w-full px-4 mb-16  ${getWidthClass()}`}>
      {image ? (
        <div className="flex mb-10 h-96">
          <Image
            src={image}
            alt={value}
            width={`${imageWidth}${imageUnit}`}
            height={`${imageHeight}${imageUnit}`}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ) : null}

      <span className="inline-block mb-4 text-xs text-gray-500">
        {date.format(dateFormat)}
      </span>
      <div className="mb-4">
        <ComposedTitles subtitleText={title} subtitleSize="sm" />
      </div>
      <div className="mb-4">
        <PrimaryDescription text={summary} textSize="gray" />
      </div>
      <a
        className="text-lg font-medium text-red-500 underline hover:no-underline"
        href="#"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default BlogCards;
