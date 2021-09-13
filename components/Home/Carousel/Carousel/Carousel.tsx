import { useState } from "react";
import ComposedTitles from "@components/Common/ComposedTitles";
import CarouselCard from "../CarouselCard";
import { carouselData } from "@lib/consts";
import SlideButtons from "@components/Common/SlideButtons";
import { useSwipeable } from "react-swipeable";

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

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div {...handlers} className="flex items-center justify-between">
      <SlideButtons
        directionLeft
        onClick={() => updateIndex(activeIndex - 1)}
        responsive="desktop"
      />

      <div className="max-w-3xl mx-auto text-center">
        <ComposedTitles titleText="Testimonials" titleSize="sm" />
        <div className="mt-8 mb-10">
          <ComposedTitles
            subtitleText="500+ happy couples served!"
            subtitleSize="md"
          />
        </div>
        <div className="overflow-hidden">
          <div
            className="transition duration-300 whitespace-nowrap "
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {carouselData.map((carousel) => (
              <CarouselCard key={carousel.id} data={carousel} />
            ))}
          </div>
        </div>

        <div className="mt-8 ">
          <SlideButtons
            directionLeft
            onClick={() => updateIndex(activeIndex - 1)}
            responsive="mobile"
          />
          <SlideButtons
            onClick={() => updateIndex(activeIndex + 1)}
            responsive="mobile"
          />
        </div>
      </div>

      <SlideButtons
        responsive="desktop"
        onClick={() => updateIndex(activeIndex + 1)}
      />
    </div>
  );
};

export default Carousel;
