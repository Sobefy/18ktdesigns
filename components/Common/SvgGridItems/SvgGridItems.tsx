import MaterialAndDesign from "@components/Common/SvgGridItems/GridsSvg/MaterialAndDesign";
import DiamondOrStones from "@components/Common/SvgGridItems/GridsSvg/DiamondsorStones";
import DesignReview from "@components/Common/SvgGridItems/GridsSvg/DesignReview";
import RingManufacturing from "@components/Common/SvgGridItems/GridsSvg/RingManufacturing";
interface SvgIconsProps {
  ico: string;
}
const SvgGridItems = ({ ico }: SvgIconsProps) => {
  switch (ico) {
    case "materialAndDesign":
      return <MaterialAndDesign />;
    case "diamondOrStones":
      return <DiamondOrStones />;
    case "designReview":
      return <DesignReview />;
    case "ringManufacturing":
      return <RingManufacturing />;
    default:
      return null;
  }
};
export default SvgGridItems;
