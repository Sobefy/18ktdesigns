interface InputProps {
    InputText: string;
  }
  const PrimaryButton = ({ InputText }: InputProps) => {
    return (
        <input
        className="bg-gray-100 outline-none"
        type="text"
        placeholder={InputText}
        />
    );
  };
  export default PrimaryButton;