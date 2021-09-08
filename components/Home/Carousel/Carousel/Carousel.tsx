import { useState } from "react";

import CarouselCard from "../CarouselCard";
import { carouselData } from "../../../../lib/consts";
import SlideButtons from "@components/Common/SlideButtons";

interface CarouselProps {
  loop?: boolean;
}

const Carousel = ({ loop = false }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (index: number) => {
    let newIndex = index;
    if (index < 0) {
      newIndex = loop ? carouselData.length - 1 : 0;
    } else if (index >= carouselData.length) {
      newIndex = loop ? 0 : carouselData.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="flex items-center justify-between">
      <SlideButtons
        directionLeft
        onClick={() => updateIndex(activeIndex - 1)}
      />
      <div className="max-w-3xl mx-auto text-center">
        <div className="overflow-hidden">
          <div
            className="transition duration-300 whitespace-nowrap"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {carouselData.map((carousel) => (
              <CarouselCard key={carousel.id} data={carousel} />
            ))}
          </div>
        </div>
      </div>
      <SlideButtons onClick={() => updateIndex(activeIndex + 1)} />
    </div>
  );
};

export default Carousel;
