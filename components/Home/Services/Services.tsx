import ComposedTitles from "../../Common/ComposedTitles";

/* eslint-disable @next/next/no-img-element */
const Services = () => {
  return (
    <div className="relative py-20">
      <img
        className="hidden lg:block absolute bottom-0 left-0 mb-40"
        src="zeus-assets/icons/dots/blue-dot-left-bars.svg"
        alt=""
      />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div
            className="
                relative
                w-full
                lg:w-1/2
                px-4
                order-last
                lg:order-first
                flex
                items-center
              "
          >
            <img src="images/blob-ring.png" alt="" />
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <ComposedTitles subtitleText="Work with former jewelry brand designers" />
            <div className="relative flex flex-wrap -mx-4 -mb-12">
              <div className="relative w-full lg:w-1/2 px-4 mb-12">
                <img
                  className="hidden lg:block absolute top-0 left-0 ml-24 -mt-10"
                  src="zeus-assets/icons/line-little-top.svg"
                  alt=""
                />
                <span
                  className="
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-6
                        lg:mb-8
                        rounded-full
                        bg-blue-50
                        text-sm
                      "
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
              <div className="w-full lg:w-1/2 px-4 mb-12">
                <span
                  className="
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-6
                        lg:mb-8
                        rounded-full
                        bg-blue-50
                        text-sm
                      "
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
              <div className="relative w-full lg:w-1/2 px-4 mb-12">
                <img
                  className="hidden lg:block absolute top-0 left-0 -mt-24 ml-24"
                  src="zeus-assets/icons/line-little.svg"
                  alt=""
                />
                <span
                  className="
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-6
                        lg:mb-8
                        rounded-full
                        bg-blue-50
                        text-sm
                      "
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
              <div className="w-full lg:w-1/2 px-4 mb-12">
                <span
                  className="
                        flex
                        items-center
                        justify-center
                        w-12
                        h-12
                        mb-6
                        lg:mb-8
                        rounded-full
                        bg-blue-50
                        text-sm
                      "
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
