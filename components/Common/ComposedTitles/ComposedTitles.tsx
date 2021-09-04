interface ComposedTitlesProps {
  titleText?: string;
  subtitleText: string;
  alternateSize?: boolean;
}

const ComposedTitles = ({
  titleText,
  subtitleText,
  alternateSize = false,
}: ComposedTitlesProps) => {
  return (
    <>
      <span className="font-semibold text-blue-400">{titleText}</span>
      <h2
        className={
          alternateSize
            ? "mt-8 mb-12 text-4xl lg:text-5xl font-semibold"
            : "mt-8 mb-12 text-4xl font-semibold"
        }
      >
        {subtitleText}
      </h2>
    </>
  );
};
export default ComposedTitles;
