import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import ReviewsCTA from "@components/Common/ReviewsCTA";
import { reviewsCards } from "@lib/consts";
import Image from "next/image";
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
          <div className="flex flex-wrap items-center justify-around -m-3">
            {reviewsCards.map((item) => (
              <div className="w-full p-3 md:w-1/2 lg:w-1/3" key={item.id}>
                <div className="p-6 border rounded-xl">
                  <div className="mb-10">
                    <PrimaryDescription textSize="blue" text={item.content} />
                  </div>
                  <div className="mb-6">
                    <Image
                      className="object-cover object-top w-12 h-12 rounded-full"
                      src={item.authorImage}
                      alt={item.nameAuthor}
                      width={`${item.imageWidth}${item.imageUnit}`}
                      height={`${item.imageHeight}${item.imageUnit}`}
                    />
                  </div>
                  <div className="mb-2">
                    <ComposedTitles subtitleText={item.nameAuthor} />
                  </div>
                  <PrimaryDescription text={item.job} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ReviewsCTA />
    </div>
  );
};

export default Reviews;
