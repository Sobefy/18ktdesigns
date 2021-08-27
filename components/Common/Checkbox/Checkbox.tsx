interface CheckboxProps {
  CheckboxText: string;
}
const Inputs = ({ CheckboxText }: CheckboxProps) => {
  return (
    <div className="my-6">
      <div className="object-center">
        <input type="checkbox" className="form-checkbox my-1" />
        <span className="ml-2">{CheckboxText}</span>
      </div>
    </div>
  );
};
export default Inputs;
