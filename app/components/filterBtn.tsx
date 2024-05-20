import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { CartItem } from "@/lib/types/types";
import React, { useState } from "react";
import { handleSortedItems } from "@/lib/features/slices/cartSlice";
import items from "@/app/api/endpoints/items.json";

const FilterBtn = () => {
  const dispatch = useAppDispatch();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(300);

  const handlePriceRange = async () => {
    const filteredItems = items.filter((item: CartItem) => {
      return item.price >= minValue && item.price <= maxValue;
    });
    dispatch(handleSortedItems(filteredItems));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "min") {
      setMinValue(Number(value));
    } else if (name === "max") {
      setMaxValue(Number(value));
    }
  };

  const handleClickApply = () => {
    handlePriceRange();
  };

  return (
    <div className="mb-5 flex gap-2">
      <p>Price Range:</p>
      <input
        type="number"
        placeholder="0"
        value={minValue}
        onChange={handleChange}
        name="min"
        className="w-16 border-solid-1px p-2 bg-blue-200 relative"
      />
      <input
        type="number"
        placeholder="100"
        value={maxValue}
        onChange={handleChange}
        name="max"
        className="w-16 border-solid-1px p-2 bg-red-200 relative"
      />
      <button onClick={handleClickApply}>Apply</button>
    </div>
  );
};

export default FilterBtn;
