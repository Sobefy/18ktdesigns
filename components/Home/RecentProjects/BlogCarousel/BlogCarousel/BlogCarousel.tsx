import { useState } from "react";
import { blogCarouselData } from "@lib/consts";
import ComposedTitles from "@components/Common/ComposedTitles";
import SlideButtons from "@components/Common/SlideButtons";
import BlogCarouselCard from "../BlogCarouselCard";
import { useSwipeable } from "react-swipeable";

interface BlogCarouselProps {
  loop?: boolean;
}
const BlogCarousel = ({ loop = false }: BlogCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (index: number) => {
    let newIndex = index;
    if (index < 0) {
      newIndex = loop ? blogCarouselData.length - 1 : 0;
    } else if (index >= blogCarouselData.length) {
      newIndex = loop ? 0 : blogCarouselData.length - 1;
    }
    setActiveIndex(newIndex);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });
  return (
    <>
      <div className="flex flex-wrap items-end mb-6 -mx-4 lg:mb-14">
        <div className="w-full px-4 lg:w-3/5">
          <ComposedTitles titleText="Past Works" titleSize="sm" />
          <div className="mt-8 sm:mb-2 lg:mb-0">
            <ComposedTitles
              subtitleText="Some of our recent projects"
              subtitleSize="md"
            />
          </div>
        </div>
        <div className="flex justify-end w-full px-4 lg:w-2/5">
          <SlideButtons
            responsive="desktop"
            directionLeft
            onClick={() => updateIndex(activeIndex - 1)}
          />
          <SlideButtons
            responsive="mobile"
            directionLeft
            onClick={() => updateIndex(activeIndex - 1)}
          />
          <SlideButtons
            onClick={() => updateIndex(activeIndex + 1)}
            responsive="desktop"
          />
          <SlideButtons
            onClick={() => updateIndex(activeIndex + 1)}
            responsive="mobile"
          />
        </div>
      </div>
      <div {...handlers} className="overflow-hidden">
        <div
          className="transition duration-300 whitespace-nowrap "
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {blogCarouselData.map((carousel) => (
            <BlogCarouselCard key={carousel.id} data={carousel} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogCarousel;
