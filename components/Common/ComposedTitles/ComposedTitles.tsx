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
  ctaTitle=false,
}: ComposedTitlesProps) => {
  return (
    <>
      <span className="font-semibold text-blue-400">{titleText}</span>
      <h2
        className={
          ctaTitle ? "mt-8 mb-12 text-4xl lg:text-6xl font-semibold max-w-full mx-auto"
          :alternateSize
          ? "mt-8 mb-12 text-4xl lg:text-5xl font-semibold max-w-full mx-auto"
          : "mt-8 mb-12 text-4xl font-semibold"
      }
      >
        {subtitleText}
      </h2>
    </>
  );
};
export default ComposedTitles;
