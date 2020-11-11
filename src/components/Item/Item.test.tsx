import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Item } from "./Item";

describe(`<Item /> tests`, () => {
  it("should render item with correct props", () => {
    const props = {
      name: "Mask",
      price: 2.5,
    };
    const onClick = jest.fn();
    const { container } = render(<Item onClick={onClick} {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call onAddToCart", () => {
    const props = {
      name: "Mask",
      price: 2.5,
    };
    const onClick = jest.fn();
    const { getByText } = render(<Item onClick={onClick} {...props} />);
    fireEvent.click(getByText('Add to cart'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
