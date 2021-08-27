interface InputProps {
  text: string;
}
const Input = ({ text }: InputProps) => {
  return (
    <input
      className="bg-gray-100 outline-none"
      type="text"
      placeholder={text}
    />
  );
};
export default Input;
