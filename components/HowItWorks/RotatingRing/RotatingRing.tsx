//TODO: check react-player loop and autoplay not working when realoading
import ReactPlayer from "react-player";

import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { RotatingRingSection } from "@lib/types/interfaces";

interface RotatingRingProps {
  data: RotatingRingSection;
}

const RotatingRing = ({ data }: RotatingRingProps) => {
  const { description, heading, topHeading, mediaHolder, button } = data;
  console.log(data);

  return (
    <div className="container relative px-4 pt-20 mx-auto">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
          <div className="max-w-lg">
            <ComposedTitles titleText={topHeading} titleSize="sm" />
            <div className="mt-8 mb-6 lg:mb-10 lg:pr-8">
              <ComposedTitles subtitleText={heading} subtitleSize="medium" />
            </div>
            <div className="mb-6 lg:mb-12">
              <PrimaryDescription text={description} textSize="gray" />
            </div>
            <a
              className="text-xl font-medium text-red-500 underline hover:no-underline"
              href="#"
            >
              {button.text}
            </a>
          </div>
        </div>
        <div className="relative w-full px-4 lg:w-1/2">
          <div className="max-w-lg">
            <ReactPlayer
              url={mediaHolder.url}
              width={mediaHolder.width}
              playing
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default RotatingRing;
