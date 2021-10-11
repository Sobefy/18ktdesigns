/* eslint-disable @next/next/no-img-element */
import PrimaryDescription from "@components/Common/PrimaryDescription";
import ComposedTitles from "@components/Common/ComposedTitles";

import PrimaryButton from "@components/Common/PrimaryButton";
import { CTACollageSection } from "@lib/types/interfaces";

interface CTACollageProps {
  data: CTACollageSection;
}

const CTACollage = ({ data }: CTACollageProps) => {
  const { topHeading, heading, headingSize, button, image, ctaDescription } =
    data;
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
              <ComposedTitles titleText={topHeading} titleSize="sm" />
              <div className="mt-8 mb-6 lg:mb-10">
                <ComposedTitles
                  subtitleText={heading}
                  subtitleSize={headingSize}
                />
              </div>
              <div className="mb-6 lg:mb-12">
                <PrimaryDescription
                  text={ctaDescription.json}
                  textSize="gray"
                  isRichText
                />
              </div>
              <div className="inline-block">
                <PrimaryButton
                  size="md"
                  text={button.text}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <img
              className="rounded-xl lg:max-w-2xl"
              src={image.url}
              alt={image.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTACollage;
