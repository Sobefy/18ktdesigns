import FbSvg from "@components/Common/SvgSocial/SocialsSvg/FbSvg";
import IgSvg from "@components/Common/SvgSocial/SocialsSvg/IgSvg";
import LiSvg from "@components/Common/SvgSocial/SocialsSvg/LiSvg";
import TwSvg from "@components/Common/SvgSocial/SocialsSvg/TwSvg";

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
