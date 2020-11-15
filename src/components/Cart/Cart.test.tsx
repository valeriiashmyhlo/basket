import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cart } from "./Cart";

describe(`<Cart /> tests`, () => {
  it("should render CartList with correct props", () => {
    const price = 4;
    const items = [
      {
        item: {
          id: "1",
          name: "Face Mask",
          priceRule: {
            getPrice(q: number) {
              return q * price;
            },
          },
        },
        quantity: 2,
      },
      {
        item: {
          id: "2",
          name: "Toilet Paper",
          priceRule: {
            getPrice(q: number) {
              return q * price;
            },
          },
        },
        quantity: 2,
      },
    ];
    const { container } = render(<Cart items={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should apply correct rule", () => {
    const items = [
      {
        item: {
          id: "2",
          name: "Toilet Paper",
          priceRule: {
            getPrice(q: number) {
              return q * 2;
            },
          },
        },
        quantity: 2,
      },
    ];
    const { container } = render(<Cart items={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
