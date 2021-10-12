import ComposedTitles from "@components/Common/ComposedTitles";
import { GridSectionTypes } from "@lib/types/interfaces";
import image from "next/image";

interface GridSectionProps {
  data: GridSectionTypes;
}

const GridSection = ({ data }: GridSectionProps) => {
  const {
    gridCardsCollection: { items },
  } = data;

  const getCardClass = (index: number) => {
    const last = items.length - 1;
    const penultimate = items.length - 2;
    switch (index) {
      case 0:
        return "md:rounded-tl-lg";
      case 1:
        return "md:rounded-tr-lg";
      case last:
        return "md:rounded-br-lg";
      case penultimate:
        return "md:rounded-bl-lg";
      default:
        return "";
    }
  };
  return (
    <div className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -m-px">
          {items.map((item, index) => (
            <div className="flex w-full p-px md:w-1/2" key={item.sys.id}>
              <div
                className={`p-6 text-center bg-gray-50 lg:py-12 lg:px-16 ${getCardClass(
                  index
                )}`}
              >
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-12 text-gray-500 bg-white rounded-full shadow-md">
                  <img alt={item.image.title} src={item.image.url}></img>
                </span>
                <div className="mb-4">
                  <ComposedTitles subtitleText={item.heading} />
                </div>
                <p className="text-base text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GridSection;
