interface InputProps {
  text: string;
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
const Input = ({ text, value, onChange }: InputProps) => {
  return (
    <input
      className="w-full p-4 text-sm text-center bg-white rounded shadow-md outline-none"
      type="text"
      placeholder={text}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
