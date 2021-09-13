import { CarouselItem } from "@lib/types";
import Image from "next/image";

interface CarouselCardProps {
  data: CarouselItem;
}

const CarouselCard = ({ data }: CarouselCardProps) => {
  const {
    id,
    value,
    label,
    testimonial,
    image = null,
    imageWidth = 80,
    imageHeight = 80,
    imageUnit = "px",
    marriedSince,
  } = data;

  return (
    <div className="inline-flex flex-col items-center w-full whitespace-normal justify-items-center">
      <div className="mx-auto mb-12">
        <p className="text-xl text-gray-500 ">{testimonial}</p>
      </div>
      {image ? (
        <div className="mx-auto mb-8">
          <Image
            src={image}
            alt={value}
            width={`${imageWidth}${imageUnit}`}
            height={`${imageHeight}${imageUnit}`}
          />
        </div>
      ) : null}

      <p className="mb-2 text-2xl font-semibold font-heading">{label}</p>
      <p className="text-gray-500">{marriedSince}</p>
    </div>
  );
};

export default CarouselCard;
