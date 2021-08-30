import Image from "next/image";

interface ListProps {
  options: {
    id: number;
    value: string;
    label: string;
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageUnit?: "px" | "rem";
    selected?: boolean;
  }[];
}
const List = ({ options }: ListProps) => {
  return (
    <ul className="divide-y divide-gray-300">
      {options.map((option) => {
        const {
          id,
          value,
          label,
          image = null,
          imageWidth = 96,
          imageHeight = 42,
          imageUnit = "px",
          selected = false,
        } = option;
        return (
          <li
            className="p-4 hover:bg-gray-50 cursor-pointer"
            key={id}
            value={value}
          >
            {image ? (
              <Image
                src={image}
                alt={label}
                width={`${imageWidth}${imageUnit}`}
                height={`${imageHeight}${imageUnit}`}
              />
            ) : null}
            {label}
          </li>
        );
      })}
    </ul>
  );
};
export default List;
