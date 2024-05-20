export type CartItem = {
  name: string;
  description: string;
  price: number;
  numberOfItems: number;
};

export type CartState = {
  cartItems: Array<CartItem>;
  allItems: Array<CartItem>;
};

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
