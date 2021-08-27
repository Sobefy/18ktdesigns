interface CheckboxProps {
  text: string;
}
const Checkbox = ({ text }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2">{text}</span>
    </>
  );
};
export default Checkbox;
