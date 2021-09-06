import ComposedTitles from "../../Common/ComposedTitles";
import Description from "../../Common/Description";
import PrimaryButton from "../../Common/PrimaryButton";

/* eslint-disable @next/next/no-img-element */
const CTACollage = () => {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="absolute bottom-0 right-0 hidden lg:block">
        <img
          className="h-64 ml-auto"
          src="zeus-assets/images/backgrounds/yellow-blue.svg"
          alt=""
        />
        <img
          className="h-64 ml-auto"
          src="zeus-assets/images/backgrounds/light-eclipse.svg"
          alt=""
        />
      </div>
      <div className="container relative px-4 mx-auto">
        <div className="relative flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
            <div className="max-w-lg">
              <ComposedTitles
                titleText="What's new at Shuffle"
                subtitleText="We've been part of more than 500 celebrations"
              />

              <Description
                ctaCollageSubDescription={true}
                text="Our work speaks for itself. We have designed more than 1000
                  rings up to date."
              />
              <PrimaryButton ctaCollageButton={true} text="Start a Project" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <img
              className="rounded-xl lg:max-w-2xl"
              src="images/group-posts.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTACollage;