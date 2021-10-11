import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import ServicesSvg from "@components/Common/ServicesSvg";
import { ServicesCollectionItem } from "@lib/types/interfaces";

interface ServicesCardProps {
  data: ServicesCollectionItem;
  index: number;
}
const ServicesCard = ({ data, index }: ServicesCardProps) => {
  const { heading, description } = data;
  const currentIndex = index + 1;

  const printSvgTop = () => {
    if (index === 0) {
      return <ServicesSvg />;
    }
    return "";
  };

  const printSvgBottom = () => {
    if (index === 2) {
      return <ServicesSvg bottom />;
    }
    return "";
  };

  return (
    <div className="relative w-full px-4 mb-12 lg:w-1/2">
      {printSvgTop()}
      {printSvgBottom()}
      <span className="flex items-center justify-center w-12 h-12 mb-6 text-sm rounded-full lg:mb-8 bg-blue-50">
        {currentIndex}
      </span>
      <div className="mb-4">
        <ComposedTitles subtitleText={heading} />
      </div>
      <PrimaryDescription text={description} textSize="gray" />
    </div>
  );
};

export default ServicesCard;
