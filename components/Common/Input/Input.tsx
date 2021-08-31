interface InputProps {
  text: string;
}
const Input = ({ text }: InputProps) => {
  return (
    <input
      className="bg-blue-50 w-full outline-none p-4 space-x-4 rounded text-center shadow-md"
      type="text"
      placeholder={text}
    />
  );
};
export default Input;
