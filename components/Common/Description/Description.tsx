interface DescriptionProps {
  text: string;
}
const Description = ({ text }: DescriptionProps) => {
  return <p className="mb-6 leading-relaxed text-gray-500">{text}</p>;
};
export default Description;
