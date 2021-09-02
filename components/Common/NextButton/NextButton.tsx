interface NextButtonProps {
  text: string;
  onClick(): void;
}
const NextButton = ({ text, onClick }: NextButtonProps) => {
  return (
    <button
      className="
        w-auto
        text-center
        mb-2
        py-4
        px-8
        md:mr-4
        text-sm text-white
        font-medium
        leading-normal
        bg-red-400
        hover:bg-red-300
        rounded
        transition
        duration-200"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default NextButton;
