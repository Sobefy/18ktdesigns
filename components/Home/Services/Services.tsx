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
          <div
            className="relative flex items-center order-last w-full px-4 lg:w-1/2 lg:order-first"
          >
            <img src="images/blob-ring.png" alt="" />
          </div>
          <div className="w-full px-4 mb-6 lg:w-1/2 lg:mb-0">
            <ComposedTitles subtitleText="Work with former jewelry brand designers" subtitleSize="md" />
            <div className="relative flex flex-wrap -mx-4 -mb-12">
              <div className="relative w-full px-4 mb-12 lg:w-1/2">
                <img
                  className="absolute top-0 left-0 hidden ml-24 -mt-10 lg:block"
                  src="zeus-assets/icons/line-little-top.svg"
                  alt=""
                />
                <span
                  className="flex items-center justify-center w-12 h-12 mb-6 text-sm rounded-full lg:mb-8 bg-blue-50"
                >
                  1
                </span>
                <h3 className="mb-4 text-2xl font-semibold font-heading">
                  Sketching
                </h3>
                <p className="text-xl text-gray-500">
                  We&apos;ll sketch your piece based on your personal taste and
                  specifications.
                </p>
              </div>
              <div className="w-full px-4 mb-12 lg:w-1/2">
                <span
                  className="flex items-center justify-center w-12 h-12 mb-6 text-sm rounded-full lg:mb-8 bg-blue-50"
                >
                  2
                </span>
                <h3 className="mb-4 text-2xl font-semibold font-heading">
                  Gems &amp; Diamonds
                </h3>
                <p className="text-xl text-gray-500">
                  Our experts will be by your side and work hard to find the
                  perfect gems and diamonds for your piece.
                </p>
              </div>
              <div className="relative w-full px-4 mb-12 lg:w-1/2">
                <img
                  className="absolute top-0 left-0 hidden ml-24 -mt-24 lg:block"
                  src="zeus-assets/icons/line-little.svg"
                  alt=""
                />
                <span
                  className="flex items-center justify-center w-12 h-12 mb-6 text-sm rounded-full lg:mb-8 bg-blue-50"
                >
                  3
                </span>
                <h3 className="mb-4 text-2xl font-semibold font-heading">
                  Put it all together.
                </h3>
                <p className="text-xl text-gray-500">
                  We then send our design to our manufacturing team of industry
                  designers.
                </p>
              </div>
              <div className="w-full px-4 mb-12 lg:w-1/2">
                <span
                  className="flex items-center justify-center w-12 h-12 mb-6 text-sm rounded-full lg:mb-8 bg-blue-50"
                >
                  4
                </span>
                <h3 className="mb-4 text-2xl font-semibold font-heading">
                  Budget friendly
                </h3>
                <p className="text-xl text-gray-500">
                  We can work with your budget yet create something unique and
                  memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
