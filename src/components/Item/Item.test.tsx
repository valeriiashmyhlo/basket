import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Item } from "./Item";

describe(`<Item /> tests`, () => {
  const props = {
    id: '1',
    name: "Mask",
    price: 2.5,
    unit: "each"
  };
  it("should render Item with correct props", () => {
    const { container } = render(<Item onAddToCart={() => {}} {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call onAddToCart", () => {
    const onAddToCart = jest.fn();
    const { getByText } = render(<Item onAddToCart={onAddToCart} {...props} />);
    fireEvent.click(getByText('Add to cart'));
    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });
});
