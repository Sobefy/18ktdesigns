import Image from "next/image";
import { useState } from "react";

import { ListOption } from "@lib/types";
import SelectedSvg from "@components/Common/SelectedSvg";

interface ListProps {
  options: ListOption[];
}
const List = ({ options}: ListProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const handleItemClick = (id: number) => {
    const itemIsSelected = selectedItems.includes(id);
    if (itemIsSelected) {
      const filteredItems = selectedItems.filter((item) => item !== id);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <ul>
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
        const itemIsSelected = selectedItems.includes(id);
        return (
          <li
            className="relative w-full p-4 my-4 bg-white border border-gray-200 rounded cursor-pointer"
            key={id}
            value={value}
            onClick={() => handleItemClick(id)}
          >
            {itemIsSelected ? <SelectedSvg /> : null}
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
