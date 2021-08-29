interface SelectProps {
  defaultOptionLabel: string;
  options: { id: number; value: string; label: string }[];
}

const Select = ({ defaultOptionLabel, options }: SelectProps) => {
  return (
    <select
      className="
        object-center
        lg:mb-12 
        text-center
        mb-6
        py-4
        px-8
        md:mr-4
        text-sm text-black
        font-medium
        leading-normal
        bg-white
    "
    >
      <option>-- {defaultOptionLabel} --</option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
