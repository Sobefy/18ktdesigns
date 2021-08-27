interface PrimaryButtonProps {
  text: string;
}
const PrimaryButton = ({ text }: PrimaryButtonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
      {text}
    </button>
  );
};
export default PrimaryButton;
