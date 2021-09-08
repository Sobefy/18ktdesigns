/* eslint-disable @next/next/no-img-element */
import ComposedTitles from "../../Common/ComposedTitles";
import PrimaryButton from "../../Common/PrimaryButton";
import PrimaryDescription from "../../Common/PrimaryDescription";
const Hero = () => {
  return (
    <div className="relative md:pb-24 lg:pb-80">
      <div className="pb-32 pt-44 md:pb-64 bg-blue-50">
        <div className="container px-4 mx-auto mb-12 text-center">
          <ComposedTitles
            titleText="Welcome to 18KT Designs"
            subtitleText="We're changing the way you buy an engagement ring."
            subtitleSize="lg"
          />
          <PrimaryDescription
            text="Work with a professional team of jewelry designers and
              manufacturers to get your dream piece tailor made. We design
              engagement rings and wedding bands for your special occasion."
          />
          <PrimaryButton text="Start a Project" />
          <PrimaryButton text="View Past Work" buttonLocated="alternateButton" />
        </div>
        <div className="inset-x-0 max-w-3xl px-4 mx-auto lg:absolute">
          <img
            className="top-0 left-0 object-cover w-full mx-auto rounded-lg lg:absolute h-96 md:mt-20"
            src="/images/happy-couple-engaged-couple-engagement-ring-couple-in-love-t20-29Zp7E.jpg"
            alt=""
          />
        </div>
        <img
          className="top-0 left-0 hidden mt-32 lg:block lg:absolute"
          src="zeus-assets/icons/dots/red-dot-left-bars.svg"
          alt=""
        />
        <img
          className="bottom-0 right-0 hidden lg:block lg:absolute mb-80"
          src="zeus-assets/icons/dots/yellow-dot-right-shield-blue-line.svg"
          alt=""
        />
        <img
          className="absolute bottom-0 right-0 lg:hidden"
          src="zeus-assets/icons/dots/yellow-dot-right-shield-blue-line.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
