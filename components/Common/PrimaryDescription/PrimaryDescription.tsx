interface PrimaryDescriptionProps {
  text: string;
}
const PrimaryDescription = ({ text }: PrimaryDescriptionProps) => {
  return (
    <p className="max-w-3xl mx-auto mb-12 text-xl text-gray-500">{text}</p>
  );
};

export default PrimaryDescription;
