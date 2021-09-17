interface InputProps {
  spanText?: string;
  text: string;
  value?: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  type: "text" | "email";
  inputSize: "sm" | "md" | "lg";
}
const Input = ({
  spanText,
  text,
  value,
  onChange,
  type,
  inputSize = "sm",
}: InputProps) => {
  const getInputSubtitleClassName = () => {
    switch (inputSize) {
      case "sm":
        return "py-3 pl-4 mb-4 text-white bg-transparent border border-gray-400 rounded lg:mb-0 lg:mr-4";
      case "md":
        return "p-4 text-center bg-white rounded shadow-md outline-none";
      case "lg":
        return "relative py-4 pl-4 mb-2 border rounded md:mb-0";
      default:
        return "";
    }
  };
  return (
    <>
      <span className="absolute top-0 left-0 inline-block px-1 ml-4 -mt-2 text-xs text-gray-500 bg-white">
        {spanText}
      </span>
      <input
        className={`w-full text-sm"${getInputSubtitleClassName()}`}
        type={type}
        placeholder={text}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default Input;
