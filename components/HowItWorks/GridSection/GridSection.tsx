import ComposedTitles from "@components/Common/ComposedTitles";
import SvgGridItems from "@components/Common/SvgGridItems";
import { gridItems } from "@lib/consts";
const GridSection = () => {
  const cardClass = (index: number) => {
    const last = gridItems.length - 1;
    const penultimate = gridItems.length - 2;
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
          {gridItems.map((item, id) => (
            <div className="flex w-full p-px md:w-1/2" key={item.id}>
              <div
                className={`p-6 text-center bg-gray-50 lg:py-12 lg:px-16 ${cardClass(
                  id
                )}`}
              >
                <span className="flex items-center justify-center w-16 h-16 mx-auto mb-12 text-gray-500 bg-white rounded-full shadow-md">
                  <SvgGridItems ico={item.svg} />
                </span>
                <div className="mb-4">
                  <ComposedTitles subtitleText={item.title} />
                </div>
                <p className="text-base text-gray-500">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GridSection;
