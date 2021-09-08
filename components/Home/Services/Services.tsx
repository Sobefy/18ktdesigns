import PrimaryDescription from "@components/Common/PrimaryDescription";
import ServicesCards from "@components/Common/ServicesCards";
import ComposedTitles from "../../Common/ComposedTitles";

/* eslint-disable @next/next/no-img-element */
const Services = () => {
  return (
    <div className="relative py-20">
      <img
        className="absolute bottom-0 left-0 hidden mb-40 lg:block"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="relative flex items-center order-last w-full px-4 lg:w-1/2 lg:order-first">
            <img src="images/blob-ring.png" alt="" />
          </div>
          <div className="w-full px-4 mb-6 lg:w-1/2 lg:mb-0">
            <div className="mb-10 lg:mb-16">
              <ComposedTitles
                subtitleText="Work with former jewelry brand designers"
                subtitleSize="md"
              />
            </div>
            <div className="relative flex flex-wrap -mx-4 -mb-12">
              <div className="relative w-full px-4 mb-12 lg:w-1/2">
                <img
                  className="absolute top-0 left-0 hidden ml-24 -mt-10 lg:block"
                  src="zeus-assets/icons/line-little-top.svg"
                  alt=""
                />
                <ServicesCards position="1" />
                <div className="mb-4">
                  <ComposedTitles subtitleText="Sketching" subtitleSize />
                </div>
                <PrimaryDescription
                  text="We'll sketch your piece based on your personal taste and
                  specifications."
                  textSize="gray"
                />
              </div>
              <div className="w-full px-4 mb-12 lg:w-1/2">
                <ServicesCards position="2" />
                <div className="mb-4">
                  <ComposedTitles subtitleText="Gems & Diamonds" subtitleSize />
                </div>
                <PrimaryDescription
                  text="Our experts will be by your side and work hard to find the
                  perfect gems and diamonds for your piece."
                  textSize="gray"
                />
              </div>
              <div className="relative w-full px-4 mb-12 lg:w-1/2">
                <img
                  className="absolute top-0 left-0 hidden ml-24 -mt-24 lg:block"
                  src="zeus-assets/icons/line-little.svg"
                  alt=""
                />
                <ServicesCards position="3" />
                <div className="mb-4">
                  <ComposedTitles
                    subtitleText="Put it all together."
                    subtitleSize
                  />
                </div>
                <PrimaryDescription
                  text="We then send our design to our manufacturing team of
                  industry designers."
                  textSize="gray"
                />
              </div>
              <div className="w-full px-4 mb-12 lg:w-1/2">
                <ServicesCards position="4" />
                <div className="mb-4">
                  <ComposedTitles subtitleText="Budget friendly" subtitleSize />
                </div>
                <PrimaryDescription
                  text="We can work with your budget yet create something unique
                      and memorable."
                  textSize="gray"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
