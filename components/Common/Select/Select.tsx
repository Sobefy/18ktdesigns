interface SelectProps {
  value: string;
  options: { id: number; value: string; label: string }[];
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const Select = ({ value, options, onChange }: SelectProps) => {
  return (
    <select
      className="w-full p-4 mb-6 text-sm font-medium leading-normal text-center bg-white border border-gray-200 rounded cursor-pointer"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
