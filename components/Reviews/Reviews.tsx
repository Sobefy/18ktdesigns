import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import ReviewsCTA from "@components/Common/ReviewsCTA";
import ReviewsCards from "./ReviewsCards";
/* eslint-disable @next/next/no-img-element */
const Reviews = () => {
  return (
    <div className="relative">
      <div className="py-20 ">
        <img
          className="absolute top-0 left-0 hidden mt-10 lg:block"
          src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
          alt=""
        />
        <img
          className="absolute top-0 right-0 hidden mt-64 lg:block"
          src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center lg:mb-20">
            <ComposedTitles titleText="Testimonials" titleSize="sm" />
            <div className="mt-8 mb-10">
              <ComposedTitles
                subtitleSize="md"
                subtitleText="What our customers say."
              />
            </div>
            <PrimaryDescription
              textSize="gray"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            dignissim quam ultricies, placerat tellus sed, laoreet orci. Duis
            luctus quam ac metus gravida sodales. Sed a ex accumsan,
            pellentesque."
            />
          </div>
          <ReviewsCards />
        </div>
      </div>
      <ReviewsCTA />
    </div>
  );
};

export default Reviews;
