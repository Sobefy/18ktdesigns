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
        <Carousel loop />
      </div>
    </div>
  );
};

export default Testimonials;
