interface ComposedTitlesProps {
  titleText?: string;
  subtitleText: string;
  alternateSize?: boolean;
  ctaTitle?: boolean;
}

const ComposedTitles = ({
  titleText,
  subtitleText,
  alternateSize = false,
  ctaTitle = false,
}: ComposedTitlesProps) => {
  const getTitleClassName = () => {
    if (ctaTitle) {
      return "lg:text-6xl  max-w-full mx-auto";
    }
    if (alternateSize) {
      return "lg:text-5xl  max-w-5xl mx-auto";
    }
    return "";
  };
  return (
    <>
      <span className="font-semibold text-blue-400">{titleText}</span>
      <h2
        className={`mt-8 mb-12 text-4xl font-semibold font-heading ${getTitleClassName()}`}
      >
        {subtitleText}
      </h2>
    </>
  );
};
export default ComposedTitles;
