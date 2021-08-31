interface SelectProps {
  defaultOptionLabel: string;
  options: { id: number; value: string; label: string }[];
}

const Select = ({ defaultOptionLabel, options }: SelectProps) => {
  return (
    <select
      className="
        text-center
        w-full
        p-4
        mb-6  
        text-sm 
        text-gray-500
        rounded
        font-medium
        leading-normal
        bg-blue-50
        shadow-md
       
    "
    >
      <option>{defaultOptionLabel}</option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
