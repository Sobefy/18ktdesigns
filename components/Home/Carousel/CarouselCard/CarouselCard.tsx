import { CarouselItem } from "../../../../lib/types";

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
    objectFit,
    objectPosition,
    borderRadius,
    marriedSince,
  } = data;

  return (
    <div
      className="inline-flex items-center w-full h-48 text-white bg-green-500 justify-items-center"
      key={id}
    >
      <p className="mx-auto mb-12 text-xl" key={id}>
        {testimonial}
      </p>
    </div>
  );
};

export default CarouselCard;
