interface DescriptionProps {
  text: string;
  ctaDescription?: boolean;
  ctaCollageDescription?: boolean;
  ctaCollageSubDescription?: boolean;
}
const Description = ({
  text,
  ctaDescription = false,
  ctaCollageDescription = false,
  ctaCollageSubDescription = false,
}: DescriptionProps) => {
  return (
    <p
      className={
        ctaCollageSubDescription
          ? "mb-6 lg:mb-12 text-xl text-gray-500"
          : ctaCollageDescription
          ? "mt-8 mb-6 lg:mb-10 lg:pr-8 text-4xl font-semibold font-heading"
          : ctaDescription
          ? "text-xl"
          : "mb-6 text-gray-500 leading-relaxed"
      }
    >
      {text}
    </p>
  );
};
export default Description;
