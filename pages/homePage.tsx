import React from "react";
import items from "@/app/api/endpoints/items.json";
import ItemCart from "@/app/components/itemCart";
import SearchInput from "@/app/components/searchInput";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setFilteredItems } from "@/lib/features/slices/cartSlice";
import { CartItem } from "@/lib/types/types";
import { PayloadAction } from "@reduxjs/toolkit";
import SortBtn from "@/app/components/sortBtn";

const HomePage = () => {
  const { allItems } = useAppSelector((state) => state.cartHook);
  const dispatch = useAppDispatch();

  const handleSearch = (searchTerm: string) => {
    const filtered: CartItem[] = items.filter((item: CartItem) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setFilteredItems(filtered));
  };
  return (
    <div>
      <div className="flex justify-end">
        <SortBtn /> <SearchInput onSearch={handleSearch} />
      </div>

      <div className="flex justify-between w-full gap-5">
        {allItems?.map((item: CartItem, i: number) => {
          return <ItemCart item={item} key={i} root="homePage" />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
