interface InputProps {
  text: string;
}
const Input = ({ text }: InputProps) => {
  return (
    <div className="bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
      <input
        className="bg-gray-100 outline-none"
        type="text"
        placeholder={text}
      />
    </div>
  );
};
export default Input;
