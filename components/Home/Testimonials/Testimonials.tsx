import SlideButtons from "../../Common/SlideButtons";
import Carousel from "../Carousel/Carousel";

/* eslint-disable @next/next/no-img-element */
const Testimonials = () => {
  return (
    <div className="relative py-20">
      <img
        className="absolute top-0 left-0 hidden mt-10 lg:block"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 hidden mb-10 lg:block"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <SlideButtons directionLeft={true} />
          <div className="max-w-3xl mx-auto text-center">
            <Carousel />
          </div>
          <SlideButtons />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
