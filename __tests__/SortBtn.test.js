import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import { handleSortedItems } from "../lib/features/slices/cartSlice";
import SortBtn from "../app/components/sortBtn";

jest.mock("../lib/hooks", () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock("../lib/features/slices/cartSlice", () => ({
  handleSortedItems: jest.fn(),
}));

describe("SortBtn", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should sort by name in ascending order", () => {
    const mockAllItems = [
      { name: "Apple", price: 1 },
      { name: "Banana", price: 2 },
      { name: "Cherry", price: 3 },
    ];
    useAppSelector.mockReturnValue({ allItems: mockAllItems });
    const mockDispatch = jest.fn();
    useAppDispatch.mockReturnValue(mockDispatch);

    render(<SortBtn />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "name" },
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      handleSortedItems([
        { name: "Apple", price: 1 },
        { name: "Banana", price: 2 },
        { name: "Cherry", price: 3 },
      ])
    );
  });

  test("should sort by price in ascending order", () => {
    const mockAllItems = [
      { name: "Apple", price: 3 },
      { name: "Banana", price: 1 },
      { name: "Cherry", price: 2 },
    ];
    useAppSelector.mockReturnValue({ allItems: mockAllItems });
    const mockDispatch = jest.fn();
    useAppDispatch.mockReturnValue(mockDispatch);

    render(<SortBtn />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "price" },
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      handleSortedItems([
        { name: "Banana", price: 1 },
        { name: "Cherry", price: 2 },
        { name: "Apple", price: 3 },
      ])
    );
  });

  test("should reset sorting to default when no option is selected", () => {
    const mockAllItems = [
      { name: "Apple", price: 1 },
      { name: "Banana", price: 2 },
      { name: "Cherry", price: 3 },
    ];
    useAppSelector.mockReturnValue({ allItems: mockAllItems });
    const mockDispatch = jest.fn();
    useAppDispatch.mockReturnValue(mockDispatch);

    render(<SortBtn />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "sort" },
    });

    expect(mockDispatch).toHaveBeenCalledWith(handleSortedItems(mockAllItems));
  });

  it("should handle errors gracefully", () => {
    const mockDispatch = jest.fn();
    useAppDispatch.mockReturnValue(mockDispatch);
    handleSortedItems.mockImplementation(() => {
      throw new Error("Sorting error");
    });

    try {
      render(<SortBtn />);
    } catch (error) {
      expect(error.message).toBe("Sorting error");
      expect(mockDispatch).toHaveBeenCalledWith(
        showErrorNotification({
          message: "Error sorting items. Please try again later.",
          type: "error",
        })
      );
    }
  });
});
