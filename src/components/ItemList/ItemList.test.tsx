import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ItemList } from "./ItemList";

describe(`<ItemList /> tests`, () => {
  it("should render ItemList with correct props", () => {
    const price = 2.5;
    const items = [
      {
        id: "1",
        name: "Face Mask",
        priceRule: {
          getPrice(q: number) {
            return q * price;
          },
        },
      },
      {
        id: "2",
        name: "Toilet Paper",
        priceRule: {
          getPrice(q: number) {
            return q * price;
          },
        },
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
        priceRule: {
          getPrice(q: number) {
            return q * 2.5;
          },
        },
      },
    ];
    const onAddToCart = jest.fn();
    const { getByText } = render(
      <ItemList itemList={items} onAddToCart={onAddToCart} />
    );
    fireEvent.click(getByText("Add to cart"));
    expect(onAddToCart).toHaveBeenCalledWith("1");
    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });
});
