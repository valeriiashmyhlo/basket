import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ItemList } from "./ItemList";

describe(`<ItemList /> tests`, () => {
  it("should render ItemList with correct props", () => {
    const items = [
      {
        id: "1",
        name: "Face Mask",
        price: 2.5,
      },
      {
        id: "2",
        name: "Toilet Paper",
        price: 0.65,
      },
    ];
    const { container } = render(
      <ItemList itemList={items} onAddToCart={() => {}} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call onAddToCart", () => {
    const items = [
      {
        id: "1",
        name: "Mask",
        price: 2.5,
      },
    ];
    const onAddToCart = jest.fn();
    const { getByText } = render(
      <ItemList itemList={items} onAddToCart={onAddToCart} />
    );
    fireEvent.click(getByText("Add to cart"));
    expect(onAddToCart).toHaveBeenCalledWith('1');
    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });
});
