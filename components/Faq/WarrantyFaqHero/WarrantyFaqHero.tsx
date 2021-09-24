import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import WarrantyFaqSvg from "./WarrantyFaqSvg";

/* eslint-disable @next/next/no-img-element */
const WarrantyFaqHero = () => {
  return (
    <div className="relative py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="relative order-last w-full px-4 lg:w-5/12 lg:order-first">
            <img
              className="hidden object-cover mx-auto lg:block h-96 lg:h-112"
              src="/zeus-assets/images/z-picture.png"
              alt=""
            />
            <img
              className="absolute top-0 left-0 hidden mt-32 -ml-16 lg:block"
              src="/zeus-assets/icons/dots/blue-dot-left-bars.svg"
              alt=""
            />
          </div>
          <div className="w-full px-4 lg:w-7/12">
            <div className="max-w-xl lg:ml-auto">
              <WarrantyFaqSvg />
              <div className="mb-10">
                <ComposedTitles
                  subtitleText="The 18KT Satisfaction Warranty"
                  subtitleSize="md"
                />
              </div>
              <div className="mb-10">
                <PrimaryDescription
                  text="At 18 KT, we work tirelessly to ensure your engagement ring or
                  jewelry is perfect. We offer warranties on all pieces as well
                  so you can be confident that whichever purchase you make will
                  not only last a lifetime but also have the necessary
                  protection if something does go wrong in store!"
                  textSize="gray"
                />
              </div>
              <div className="w-full h-px mb-12 bg-gray-100">
                <div className="w-1/2 h-full bg-red-400"></div>
              </div>
              <div>
                <img
                  className="object-cover h-16 mb-6 lg:hidden"
                  src="zeus-assets/images/z-picture.png"
                  alt=""
                />
                <p className="pr-4 mb-3 text-2xl font-semibold font-heading">
                  Ines Galindo
                </p>
                <p className="text-gray-500">CEO &amp; Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 hidden lg:block"
        src="/zeus-assets/icons/dots/yellow-dot-right-shield.svg"
        alt=""
      />
    </div>
  );
};

export default WarrantyFaqHero;
