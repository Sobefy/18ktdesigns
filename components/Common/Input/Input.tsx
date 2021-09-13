interface InputProps {
  text: string;
  value?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  type: "text" | "email";
  inputSize: "WhoWill" | "index";
}
const Input = ({
  text,
  value,
  onChange,
  type,
  inputSize = "index",
}: InputProps) => {
  const getInputSubtitleClassName = () => {
    switch (inputSize) {
      case "index":
        return "relative py-3 pl-4 mb-4 text-white bg-transparent border border-gray-400 rounded lg:mb-0 lg:mr-4";
      case "WhoWill":
        return "p-4 text-center  bg-white rounded shadow-md outline-none";
      default:
        return "";
    }
  };
  return (
    <input
      className={`w-full text-sm"${getInputSubtitleClassName()}`}
      type={type}
      placeholder={text}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
