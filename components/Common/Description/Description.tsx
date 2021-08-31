interface DescriptionProps {
  text: string;
}
const Description = ({ text }: DescriptionProps) => {
  return <p className="mb-6 text-gray-500 leading-relaxed">{text}</p>;
};
export default Description;
