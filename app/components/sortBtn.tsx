import { handleSortedItems } from "@/lib/features/slices/cartSlice";
import { useAppSelector } from "@/lib/hooks";
import { CartItem } from "@/lib/types/types";
import React from "react";
import { useDispatch } from "react-redux";

const SortBtn = () => {
  const dispatch = useDispatch();
  const { allItems } = useAppSelector((state) => state.cartHook);

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortOption = event.target.value;

    let sortedItems: CartItem[] = [];

    switch (sortOption) {
      case "name":
        sortedItems = [...allItems].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "price":
        sortedItems = [...allItems].sort((a, b) => a.price - b.price);
        break;

      default:
        sortedItems = allItems;
    }

    dispatch(handleSortedItems(sortedItems));
  };

  return (
    <select onChange={handleSort}>
      <option disabled>Sort By</option>
      <option value="name">Name</option>
      <option value="price"> Price</option>
    </select>
  );
};

export default SortBtn;
