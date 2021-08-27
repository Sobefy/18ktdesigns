interface CheckboxProps {
  CheckboxText: string;
}
const Inputs = ({ CheckboxText }: CheckboxProps) => {
  return (
    <>
      <input type="checkbox" className="form-checkbox" />
      <span className="ml-2">{CheckboxText}</span>
    </>
  );
};
export default Inputs;
