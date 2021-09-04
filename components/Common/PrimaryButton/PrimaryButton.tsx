interface PrimaryButtonProps {
  text: string;
  onClick?(): void;
  alternateButton?: boolean;
}
const PrimaryButton = ({
  text,
  onClick,
  alternateButton = false,
}: PrimaryButtonProps) => {
  return (
    <button
      className={
        alternateButton
          ? "z-10 relative inline-block w-full md:w-auto py-4 px-8 mr-4 text-sm font-medium leading-normal border border-gray-300 hover:border-gray-400 rounded transision duration-200"
          : "text-center mb-2 py-4 px-8 md:mr-4 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded transition duration-200"
      }
    >
      {text}
    </button>
  );
};
export default PrimaryButton;
