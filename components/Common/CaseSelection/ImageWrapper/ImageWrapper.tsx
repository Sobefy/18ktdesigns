import { caseStudiesData } from "@lib/consts";
import { ImageItem } from "@lib/types";
import Image from "next/image";

interface ImageWrapperProps {
  imageData: ImageItem;
  index: number;
}

const ImageWrapper = ({ imageData, index }: ImageWrapperProps) => {
  const { image, alt, imageWidth, imageHeight, imageUnit } = imageData;
  const alternateHeight = () => {
    if (index === 2) {
      return " col-start-3 col-end-5";
    }
    if (index === 3) {
      return " col-start-1 col-end-3";
    }
    if (index === 4) {
      return "row-start-3 col-start-3 col-end-4";
    }
    if (index === 5) {
      return "row-start-3 col-start-4 col-end-5";
    }
    return "";
  };
  return (
    <div className={`w-full h-64 p-3 ${alternateHeight()}`}>
      <Image
        src={image}
        alt={alt}
        width={`${imageWidth}${imageUnit}`}
        height={`${imageHeight}${imageUnit}`}
        objectFit="cover"
        objectPosition="top"
        className={"rounded-lg"}
      />
    </div>
  );
};

export default ImageWrapper;
