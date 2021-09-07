import CarouselCards from "../CarouselCards";

import { CarouselCard } from "../../../../lib/consts";
import { useState } from "react";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="overflow-hidden">
      <div className="transition duration-300 whitespace-nowrap ">
        <CarouselCards carouselInfo={CarouselCard} />
      </div>
    </div>
  );
};

export default Carousel;
