import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cart } from "./Cart";

describe(`<Cart /> tests`, () => {
  it("should render ItemList with correct props", () => {
    const items = [
      {
        id: '1',
        name: "Face Mask",
        price: 2.5,
        quantity: 2
      },
      {
        id: '2',
        name: "Toilet Paper",
        price: 0.65,
        quantity: 2
      }
    ]
    const { container } = render(<Cart items={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
