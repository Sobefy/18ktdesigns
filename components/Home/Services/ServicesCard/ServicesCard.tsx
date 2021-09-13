import ComposedTitles from "@components/Common/ComposedTitles";
import PrimaryDescription from "@components/Common/PrimaryDescription";
import ServicesSvg from "@components/Common/ServicesSvg";
import { ServicesInfo } from "@lib/types";

interface ServicesCardProps {
  data: ServicesInfo;
}
const ServicesCard = ({ data }: ServicesCardProps) => {
  const { id, title, description } = data;
  const currentIndex = index + 1;
  const printSvgTop = () => {
    if (id === 1) {
      return <ServicesSvg />;
    }
    return "";
  };
  const printSvgBottom = () => {
    if (id === 3) {
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
        <ComposedTitles subtitleText={title} />
      </div>
      <PrimaryDescription text={description} textSize="gray" />
    </div>
  );
};

export default ServicesCard;
