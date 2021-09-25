import ComposedTitles from "../ComposedTitles";
import PrimaryButton from "../PrimaryButton";
import PrimaryDescription from "../PrimaryDescription";

/* eslint-disable @next/next/no-img-element */
const ReviewsCTA = () => {
  return (
    <div className="relative py-20 lg:py-40 bg-blue-50">
      <img
        className="top-0 left-0 hidden mt-32 lg:block lg:absolute"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <img
        className="h-16 mt-4 ml-auto lg:hidden"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
      <img
        className="top-0 right-0 hidden mt-64 lg:block lg:absolute"
        src="zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
      <div className="container relative px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <ComposedTitles titleText="Start a project" />
          <div className="mt-8 mb-6 lg:mb-10">
            <ComposedTitles
              subtitleText="ready to create a custom ring?"
              subtitleSize="md"
            />
          </div>
          <div className="mb-6 lg:mb-12">
            <PrimaryDescription
              text="If you have ever wondered how to develop your brand, this is the
            place for you. Take a big step forward in growing your business with
            this great tool."
              textSize="gray"
            />
          </div>
          <div className="inline-block w-full mb-2 mr-4 md:w-auto">
            <PrimaryButton
              size="md"
              text="Create a Custom Ring"
              onClick={() => {}}
            />
          </div>
          <div className="inline-block w-full mb-2 mr-4 md:w-auto">
            <PrimaryButton
              size="gray"
              text="Design Other Jewelry"
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCTA;
