import { SearchBarProps } from "@/lib/types/types";
import { useState } from "react";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search items..."
      value={searchTerm}
      onChange={handleSearch}
      className=" border-solid-1px m-5 p-2 bg-green-200 relative"
    />
  );
};

export default SearchBar;
