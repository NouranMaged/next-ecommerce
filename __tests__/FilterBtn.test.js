import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import FilterBtn from "../app/components/filterBtn";
import items from "../app/api/endpoints/items.json";

describe("FilterBtn", () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: items,
      },
    });
  });

  it("should update the min and max values when the input fields are changed", () => {
    render(
      <Provider store={store}>
        <FilterBtn />
      </Provider>
    );

    const minInput = screen.getByPlaceholderText("0");
    const maxInput = screen.getByPlaceholderText("100");

    fireEvent.change(minInput, { target: { value: "50" } });
    fireEvent.change(maxInput, { target: { value: "200" } });

    expect(minInput.value).toBe("50");
    expect(maxInput.value).toBe("200");
  });

  it("should filter the items based on the selected price range", () => {
    render(
      <Provider store={store}>
        <FilterBtn />
      </Provider>
    );

    const minInput = screen.getByPlaceholderText("0");
    const maxInput = screen.getByPlaceholderText("100");
    const applyButton = screen.getByText("Apply");

    fireEvent.change(minInput, { target: { value: "50" } });
    fireEvent.change(maxInput, { target: { value: "200" } });
    fireEvent.click(applyButton);

    expect(store.getActions()).toContainEqual(
      expect.objectContaining({
        type: "cart/handleSortedItems",
        payload: expect.any(Array),
      })
    );
  });
});
