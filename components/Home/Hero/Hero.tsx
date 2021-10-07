/* eslint-disable @next/next/no-img-element */
import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryButton from "@components/Common/PrimaryButton";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { HeroSection } from "@lib/types/contentful";

interface HeroProps {
  data: HeroSection;
}

const Hero = ({ data }: HeroProps) => {
  const {
    topHeading,
    heading,
    description,
    primaryAction,
    secondaryAction,
    image,
  } = data;

  return (
    <div className="relative md:pb-24 lg:pb-80">
      <div className="pb-32 pt-44 md:pb-64 bg-blue-50">
        <div className="container px-4 mx-auto mb-12 text-center">
          <ComposedTitles titleText={topHeading} />
          <div className="max-w-5xl mx-auto mt-8 mb-12">
            <ComposedTitles subtitleText={heading} subtitleSize="lg" />
          </div>
          <div className="max-w-3xl mx-auto mb-12">
            <PrimaryDescription text={description} textSize="gray" />
          </div>
          <div className="inline-block w-full mb-2 mr-4 md:w-auto">
            <PrimaryButton
              text={primaryAction.text}
              size="md"
              onClick={() => {}}
            />
          </div>
          <div className="inline-block w-full mr-4 md:w-auto">
            <PrimaryButton
              text={secondaryAction.text}
              size="gray"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="inset-x-0 max-w-3xl px-4 mx-auto lg:absolute">
          <img
            className="top-0 left-0 object-cover w-full mx-auto rounded-lg lg:absolute h-96 md:mt-20"
            src={image.url}
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
