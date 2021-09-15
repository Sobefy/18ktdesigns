interface CTADescriptionProps {
  textTitleSize: string;
  titleText: string;
  subtitleColor?: string;
  primarySubtitle: string;
  secondarySubtitle: string;
  btnText: string;
  onClick?(): void;
}
const CTA = ({
  textTitleSize,
  titleText,
  primarySubtitle,
  secondarySubtitle,
  onClick,
  btnText,
  subtitleColor,
}: CTADescriptionProps) => {
  const textTitleSizes = () => {
    switch (textTitleSize) {
      case "md":
        return "lg:text-5xl text-5xl";
      case "lg":
        return "text-4xl lg:text-6xl";
      default:
        return "";
    }
  };
  const getSubtitleColorClassName = () => {
    if (subtitleColor === "gray") {
      return "text-gray-500";
    }
    return "";
  };
  return (
    <div className="py-20 bg-blue-50">
      <div className="container px-4 mx-auto">
        <div className="mb-8 md:mb-16 ">
          <h2 className={`font-semibold font-heading ${textTitleSizes()}`}>
            {titleText}
          </h2>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="inline-block max-w-xl mb-6 md:mb-0">
            <p className={`text-xl ${getSubtitleColorClassName()}`}>
              {primarySubtitle}
            </p>
            <p className={`text-xl ${getSubtitleColorClassName()}`}>
              {secondarySubtitle}
            </p>
          </div>
          <div className="inline-block w-full ml-auto md:w-auto">
            <button
              className="w-full px-12 py-4 text-sm font-medium leading-normal text-center text-white transition duration-200 bg-red-400 rounded md:w-auto hover:bg-red-300 "
              onClick={onClick}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CTA;
