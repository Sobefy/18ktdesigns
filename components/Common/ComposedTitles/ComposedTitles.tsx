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
        return "lg:text-5xl";
      case "md":
        return " text-4xl";
      case "sm":
        return "text-3xl";
      default:
        return "text-2xl";
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
        <h2 className={`font-semibold font-heading ${getSubtitleClassName()}`}>
          {subtitleText}
        </h2>
      ) : null}
    </>
  );
};
export default ComposedTitles;
