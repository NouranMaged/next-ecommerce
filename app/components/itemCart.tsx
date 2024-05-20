import React from "react";
import {
  decremented,
  handleCart,
  incremented,
} from "@/lib/features/slices/cartSlice";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/hooks";
import { CartItem } from "@/lib/types/types";

const ItemCart = ({ item, root }: { item: CartItem; root?: string }) => {
  const dispatch = useAppDispatch();
  const store = useAppStore();
  const { cartItems } = useAppSelector((state) => state.cartHook);

  const existingItemIndex = cartItems.findIndex(
    (items) => items.name === item.name
  );

  return (
    <div className="w-full">
      <div className="p-3 bg-yellow-200 rounded-lg shadow-xl mb-5">
        <h2 className=" font-bold underline">{item.name}</h2>
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
        {root === "homePage" ? (
          <button
            onClick={() => dispatch(handleCart(item))}
            className={` ${
              existingItemIndex !== -1 ? "bg-red-500" : "bg-green-500"
            } hover:bg-${
              existingItemIndex !== -1 ? "red" : "green"
            }-700 text-white font-bold py-2 px-4 rounded`}
          >
            {existingItemIndex !== -1 ? "Remove from Cart" : "Add To Cart"}
          </button>
        ) : (
          <div className="flex gap-5">
            <button
              onClick={() => dispatch(decremented(item.name))}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              -
            </button>
            <p>{item.numberOfItems}</p>
            <button
              onClick={() => dispatch(incremented(item))}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCart;
