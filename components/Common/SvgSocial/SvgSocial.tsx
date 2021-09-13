import FbSvg from "./SocialsSvg/FbSvg";
import IgSvg from "./SocialsSvg/IgSvg";
import LiSvg from "./SocialsSvg/LiSvg";
import TwSvg from "./SocialsSvg/TwSvg";

interface SvgIconsProps {
  ico: string;
}
const SvgSocial = ({ ico }: SvgIconsProps) => {
  switch (ico) {
    case "fb":
      return <FbSvg />;
    case "tw":
      return <TwSvg />;
    case "ig":
      return <IgSvg />;
    case "li":
      return <LiSvg />;
    default:
      return null;
  }
};
export default SvgSocial;
