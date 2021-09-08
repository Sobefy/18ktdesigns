interface ComposedTitlesProps {
  titleText?: string;
  subtitleText?: string;
  titleSize?: "sm" | "md";
  subtitleSize?: "sm" | "md" | "lg" | "xl";
}

const ComposedTitles = ({
  titleText = "",
  subtitleText = "",
  titleSize = "md",
  subtitleSize = "md",
}: ComposedTitlesProps) => {
  const getSubtitleClassName = () => {
    switch (subtitleSize) {
      case "xl":
        return "lg:text-6xl  max-w-full mx-auto";
      case "lg":
        return "lg:text-5xl  max-w-5xl mx-auto mb-12";
      case "md":
          return "mb-10 lg:mb-16 text-4xl";
      case "sm":
        return "text-3xl";
      default:
        return "";
    }
  };
  const getTitleClassName = () => {
    if (titleSize === "sm") {
      return "text-xs";
    }
    return "";
  };
  return (
    <>
      {titleText ? (
        <span className={`font-semibold text-blue-400 ${getTitleClassName()}`}>
          {titleText}
        </span>
      ) : null}
      {subtitleText ? (
        <h2
          className={`mt-8 font-semibold font-heading ${getSubtitleClassName()}`}
        >
          {subtitleText}
        </h2>
      ) : null}
    </>
  );
};
export default ComposedTitles;
