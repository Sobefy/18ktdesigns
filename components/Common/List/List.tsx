interface ListProps {
  options: { id: number; value: string; label: string;}[];
}
const List = ({options }: ListProps) => {
  return (
    <ul className="divide-y divide-gray-300">
      {options.map((option) => (
        <li
          className="p-4 hover:bg-gray-50 cursor-pointer"
          key={option.id}
          value={option.value}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};
export default List;
