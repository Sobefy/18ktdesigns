import Image from "next/image";
import { useState } from "react";

import { ListOption } from "@lib/types";
import SelectedSvg from "@components/Common/SelectedSvg";

interface ListProps<T> {
  selectedItems: (keyof T)[];
  options: ListOption[];
  setSelectedItems(items: (keyof T)[]]): void; 
}
const List = <T,>({
  selectedItems,
  options,
  setSelectedItems,
}: ListProps<T>) => {
  const handleItemClick = (id: keyof T) => {
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
            onClick={() => handleItemClick(value)}
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
