interface InputProps {
  text: string;
}
const Input = ({ text }: InputProps) => {
  return (
    <input
      className="bg-white text-sm w-full outline-none p-4  rounded text-center shadow-md"
      type="text"
      placeholder={text}
    />
  );
};
export default Input;
