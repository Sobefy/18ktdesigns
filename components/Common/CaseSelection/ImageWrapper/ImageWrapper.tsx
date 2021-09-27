/* eslint-disable @next/next/no-img-element */

import { ImageItem } from "@lib/types";

interface ImageWrapperProps {
  imageData: ImageItem;
  index: number;
}

const ImageWrapper = ({ imageData, index }: ImageWrapperProps) => {
  const { image, alt } = imageData;
  const alternateLayout = () => {
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
      return "row-start-3 col-start-4 col-end-5 ";
    }
    return "";
  };
  const alternateImageHeight = () => {
    if (index === 2) {
      return "lg:h-120 h-full ";
    }
    if (index === 3) {
      return "lg:h-120 h-full";
    }
    return "h-full";
  };
  return (
    <div className={`w-full h-64 p-3 ${alternateLayout()}`}>
      <img
        src={image}
        alt={alt}
        className={`object-cover object-top w-full  rounded-lg ${alternateImageHeight()}`}
      />
    </div>
  );
};

export default ImageWrapper;
