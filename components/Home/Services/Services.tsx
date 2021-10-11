import ComposedTitles from "@components/Common/ComposedTitles";
import ServicesCard from "@components/Home/Services/ServicesCard";
import { ServicesSection } from "@lib/types/interfaces";

interface ServicesProps {
  data: ServicesSection;
}

/* eslint-disable @next/next/no-img-element */
const Services = ({ data }: ServicesProps) => {
  const { heading, image, leftIcon, servicesCollection } = data;

  return (
    <div className="relative py-20">
      <img
        className="absolute bottom-0 left-0 hidden mb-40 lg:block"
        src={leftIcon.url}
        alt={leftIcon.title}
      />
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="relative flex items-center order-last w-full px-4 lg:w-1/2 lg:order-first">
            <img src={image.url} alt={image.title} />
          </div>
          <div className="w-full px-4 mb-6 lg:w-1/2 lg:mb-0">
            <div className="mb-10 lg:mb-16">
              <ComposedTitles subtitleText={heading} subtitleSize="medium" />
            </div>
            <div className="relative flex flex-wrap -mx-4 -mb-12">
              {servicesCollection.items.map((services, index) => (
                <ServicesCard
                  key={services.sys.id}
                  index={index}
                  data={services}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
