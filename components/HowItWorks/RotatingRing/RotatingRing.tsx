//TODO: check react-player loop and autoplay not working when realoading
import ReactPlayer from "react-player";

import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import { RotatingRingSection } from "@lib/types/interfaces";

interface RotatingRingProps {
  data: RotatingRingSection;
}

const RotatingRing = ({ data }: RotatingRingProps) => {
  return (
    <div className="container relative px-4 pt-20 mx-auto">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
          <div className="max-w-lg">
            <ComposedTitles titleText="What's new at Shuffle" titleSize="sm" />
            <div className="mt-8 mb-6 lg:mb-10 lg:pr-8">
              <ComposedTitles
                subtitleText="Looking for the perfect ring? Let us design it and build it
                  for you"
                subtitleSize="medium"
              />
            </div>
            <div className="mb-6 lg:mb-12">
              <PrimaryDescription
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorem similique commodi dicta, officia aut, maiores animi,
                  qui vero a at aspernatur! Nihil atque aperiam ullam!"
                textSize="gray"
              />
            </div>
            <a
              className="text-xl font-medium text-red-500 underline hover:no-underline"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="relative w-full px-4 lg:w-1/2">
          <div className="max-w-lg">
            <ReactPlayer
              url="https://player.vimeo.com/video/542471857?title=0&portrait=0&byline=0&autoplay=1"
              width="100%"
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
