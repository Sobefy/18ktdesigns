interface CheckboxProps {
  text: string;
}
const Checkbox = ({ text }: CheckboxProps) => {
  return (
    <div className="my-6">
      <div className="object-center">
        <input type="checkbox" className="form-checkbox my-1" />
        <span className="ml-2">{text}</span>
      </div>
    </div>
  );
};
export default Checkbox;
