import { ImageItem } from "@lib/types";
import Image from "next/image";

interface ImageCardProps {
  data: ImageItem;
}

const ImageCard = ({ data }: ImageCardProps) => {
  const {
    image,
    alt,
    imageWidth = 371,
    imageHeight = 288,
    imageUnit = "px",
  } = data;
  return (
    <>
      <Image
        className="object-cover w-full rounded-lg h-72"
        src={image}
        alt={alt}
        width={`${imageWidth}${imageUnit}`}
        height={`${imageHeight}${imageUnit}`}
      />
    </>
  );
};

export default ImageCard;
