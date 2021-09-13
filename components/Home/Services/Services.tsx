import { servicesData } from "@lib/consts";
import ComposedTitles from "../../Common/ComposedTitles";
import ServicesCard from "./ServicesCard";

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
              {servicesData.map((services, index) => (
                <ServicesCard key={services.id} index={index} data={services} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
