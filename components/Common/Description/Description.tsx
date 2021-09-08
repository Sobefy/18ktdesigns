interface DescriptionProps {
  text: string;
  ctaDescription?: boolean;
}
const Description = ({ text, ctaDescription = false }: DescriptionProps) => {
  return (
    <p
      className={
        ctaDescription
          ? "text-xl"
          : "text-xl mb-6 text-gray-500 leading-relaxed lg:mb-12"
      }
    >
      {text}
    </p>
  );
};
export default Description;
