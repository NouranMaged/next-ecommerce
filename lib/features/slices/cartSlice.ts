import { CartItem, CartState } from "@/lib/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import items from "@/app/api/endpoints/items.json";

const initialState: CartState = {
  cartItems: [],
  allItems: items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleSortedItems: (state, action: PayloadAction<CartItem[]>) => {
      state.allItems = action.payload;
    },
    handleCart: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.name === itemToAdd.name
      );
      if (existingItemIndex !== -1) {
        state.cartItems.splice(existingItemIndex, 1);
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    incremented: (state, action: PayloadAction<CartItem>) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.name === itemToAdd.name
      );

      if (existingItemIndex !== -1) {
        const updatedItem = {
          ...state.cartItems[existingItemIndex],
          numberOfItems: state.cartItems[existingItemIndex].numberOfItems + 1,
        };

        state.cartItems[existingItemIndex] = updatedItem;
      } else {
        const newItem = {
          ...itemToAdd,
          numberOfItems: 1,
        };

        state.cartItems.push(newItem);
      }
    },
    decremented: (state, action: PayloadAction<string>) => {
      const itemName = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === itemName
      );

      if (itemIndex !== -1) {
        const itemToDecrement = state.cartItems[itemIndex];

        const updatedItem = {
          ...itemToDecrement,
          numberOfItems: itemToDecrement.numberOfItems - 1,
        };

        if (updatedItem.numberOfItems === 0) {
          state.cartItems.splice(itemIndex, 1);
        } else {
          state.cartItems[itemIndex] = updatedItem;
        }
      }
    },
    setFilteredItems: (state, action: PayloadAction<CartItem[]>) => {
      state.allItems = action.payload;
    },
  },
});

export const {
  incremented,
  decremented,
  setFilteredItems,
  handleCart,
  handleSortedItems,
} = cartSlice.actions;
export default cartSlice.reducer;
