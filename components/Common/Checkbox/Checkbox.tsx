interface CheckboxProps {
  text: string;
  checked: boolean;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
const Checkbox = ({ text, checked, onChange }: CheckboxProps) => {
  return (
    <div className="my-6">
      <input
        type="checkbox"
        className="my-1 form-checkbox"
        onChange={onChange}
        checked={checked}
      />
      <span className="ml-2 text-gray-500">{text}</span>
    </div>
  );
};
export default Checkbox;
