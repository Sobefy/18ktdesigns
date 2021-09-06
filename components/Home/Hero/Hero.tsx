/* eslint-disable @next/next/no-img-element */
import ComposedTitles from "../../Common/ComposedTitles";
import PrimaryButton from "../../Common/PrimaryButton";
import PrimaryDescription from "../../Common/PrimaryDescription";
const Hero = () => {
  return (
    <div className="relative md:pb-24 lg:pb-80">
      <div className="pt-44 pb-32 md:pb-64 bg-blue-50">
        <div className="container px-4 mx-auto mb-12 text-center">
          <ComposedTitles
            titleText="Welcome to 18KT Designs"
            subtitleText="We're changing the way you buy an engagement ring."
            alternateSize={true}
          />
          <PrimaryDescription
            text="Work with a professional team of jewelry designers and
              manufacturers to get your dream piece tailor made. We design
              engagement rings and wedding bands for your special occasion."
          />
          <PrimaryButton text="Start a Project" />
          <PrimaryButton text="View Past Work" alternateButton={true} />
        </div>
        <div className="lg:absolute inset-x-0 max-w-3xl mx-auto px-4">
          <img
            className="lg:absolute top-0 left-0 h-96 w-full md:mt-20 mx-auto rounded-lg object-cover"
            src="/images/happy-couple-engaged-couple-engagement-ring-couple-in-love-t20-29Zp7E.jpg"
            alt=""
          />
        </div>
        <img
          className="hidden lg:block lg:absolute top-0 left-0 mt-32"
          src="zeus-assets/icons/dots/red-dot-left-bars.svg"
          alt=""
        />
        <img
          className="hidden lg:block lg:absolute bottom-0 right-0 mb-80"
          src="zeus-assets/icons/dots/yellow-dot-right-shield-blue-line.svg"
          alt=""
        />
        <img
          className="lg:hidden absolute bottom-0 right-0"
          src="zeus-assets/icons/dots/yellow-dot-right-shield-blue-line.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
