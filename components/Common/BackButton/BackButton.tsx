interface BackButtonProps {
  text: string;
}
const BackButton = ({ text }: BackButtonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
      {text}
    </button>
  );
};
export default BackButton;
