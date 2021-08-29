interface InputProps {
  text: string;
}
const Input = ({ text }: InputProps) => {
  return (
    <input
      className="bg-gray-100 w-full outline-none p-4 w-72 space-x-4 rounded-lg text-center"
      type="text"
      placeholder={text}
    />
  );
};
export default Input;
