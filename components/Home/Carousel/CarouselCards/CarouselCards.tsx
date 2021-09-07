import { CarouselItems } from "../../../../lib/types";

interface CarouselCardProps {
  carouselInfo: CarouselItems[];
}

const CarouselCards = ({ carouselInfo }: CarouselCardProps) => {
  return (
    <>
      {carouselInfo.map((carouselCard) => {
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
        } = carouselCard;
        return (
          <div
            className="inline-flex items-center w-full h-48 text-white bg-green-500 justify-items-center"
            style={{ transform: "translateX(-100%)" }}
            key={id}
          >
            <p className="mx-auto mb-12 text-xl" key={id}>
              {testimonial}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default CarouselCards;
