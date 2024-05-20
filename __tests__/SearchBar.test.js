import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchBar from "../app/components/searchInput";

describe("SearchBar", () => {
  it("should update the search term and call the onSearch callback when the input value changes", () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText("Search items...");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
    expect(mockOnSearch).toHaveBeenCalledWith("test");
  });
});
