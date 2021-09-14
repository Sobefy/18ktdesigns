import Image from "next/image";

import { ListOption } from "@lib/types";
import SelectedSvg from "@components/Common/SelectedSvg";

interface ListProps<I> {
  selectedItems: I[];
  options: ListOption[];
  style?: "inline" | "grid";
  setSelectedItems(items: I[]): void;
}
const List = <I,>({
  selectedItems,
  options,
  style = "inline",
  setSelectedItems,
}: ListProps<I>) => {
  const isGridStyle = style === "grid";
  const wrapperClasses = isGridStyle ? "grid-cols-2" : "";
  const liClasses = isGridStyle ? "text-center flex-col" : "";
  const imageClasses = isGridStyle ? "mb-4" : "";

  const handleItemClick = (id: I) => {
    const itemIsSelected = selectedItems.includes(id);
    if (itemIsSelected) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <ul className={`grid gap-4 ${wrapperClasses}`}>
      {options.map((option) => {
        const {
          id,
          value,
          label,
          image = null,
          imageWidth = 96,
          imageHeight = 42,
          imageUnit = "px",
        } = option;
        const itemIsSelected = selectedItems.includes(value as unknown as I);
        return (
          <li
            className={`flex relative w-full p-4 bg-white border border-gray-200 rounded cursor-pointer ${liClasses}`}
            key={id}
            value={value}
            onClick={() => handleItemClick(value as unknown as I)}
          >
            {itemIsSelected ? <SelectedSvg /> : null}
            {image ? (
              <Image
                src={image}
                alt={label}
                width={`${imageWidth}${imageUnit}`}
                height={`${imageHeight}${imageUnit}`}
                className={`${imageClasses}`}
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
