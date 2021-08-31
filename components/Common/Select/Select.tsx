interface SelectProps {
  defaultOptionLabel: string;
  options: { id: number; value: string; label: string }[];
}

const Select = ({ defaultOptionLabel, options }: SelectProps) => {
  return (
    <select
      className="
        cursor-pointer
        text-center
        w-full
        p-4
        mb-6  
        text-sm 
        rounded
        font-medium
        leading-normal
        bg-white
        border-gray-200 border
       
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
