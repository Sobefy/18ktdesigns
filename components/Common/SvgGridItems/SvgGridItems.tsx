import MaterialAndDesignSvg from "@components/Common/SvgGridItems/GridsSvg/MaterialAndDesign";
import DiamondOrStonesSvg from "@components/Common/SvgGridItems/GridsSvg/DiamondsorStones";
import DesignReviewSvg from "@components/Common/SvgGridItems/GridsSvg/DesignReview";
import RingManufacturingSvg from "@components/Common/SvgGridItems/GridsSvg/RingManufacturing";
interface SvgIconsProps {
  ico: string;
}
const SvgGridItems = ({ ico }: SvgIconsProps) => {
  switch (ico) {
    case "mad":
      return <MaterialAndDesignSvg />;
    case "dios":
      return <DiamondOrStonesSvg />;
    case "dr":
      return <DesignReviewSvg />;
    case "rm":
      return <RingManufacturingSvg />;
    default:
      return null;
  }
};
export default SvgGridItems;
