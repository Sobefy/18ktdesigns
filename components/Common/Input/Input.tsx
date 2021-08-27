interface InputProps {
  InputText: string;
}
const PrimaryButton = ({ InputText }: InputProps) => {
  return (
    <div className="bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
      <input
        className="bg-gray-100 outline-none"
        type="text"
        placeholder={InputText}
      />
    </div>
  );
};
export default PrimaryButton;
