import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ItemList } from "./ItemList";

describe(`<ItemList /> tests`, () => {
  it("should render ItemList with correct props", () => {
    const items = [
      {
        name: "Face Mask",
        price: 2.5,
      },
      {
        name: "Toilet Paper",
        price: 0.65,
      },
      {
        name: "Hand Sanitizer",
        price: 19.99,
      },
    ];
    const { container } = render(<ItemList itemList={items} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
