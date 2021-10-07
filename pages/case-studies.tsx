import CaseSelection from "@components/Common/CaseSelection";
import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryButton from "@components/Common/PrimaryButton";

/* eslint-disable @next/next/no-img-element */
const CaseStudies = () => {
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
        <div className="max-w-lg mx-auto mb-6 text-center lg:mb-12">
          <ComposedTitles titleText="What's new at Shuffle" titleSize="sm" />
          <div className="mt-8">
            <ComposedTitles
              subtitleText="Lorem ispum dolor sit amet consectutar"
              subtitleSize="md"
            />
          </div>
        </div>
        <CaseSelection />
        <div className="text-center">
          <PrimaryButton size="md" text="See all images" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
