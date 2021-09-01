interface CheckboxProps {
  text: string;
}
const Checkbox = ({ text }: CheckboxProps) => {
  return (
    <div className="my-6">
      <input type="checkbox" className="form-checkbox my-1" />
      <span className="ml-2 text-gray-500">{text}</span>
    </div>
  );
};
export default Checkbox;
