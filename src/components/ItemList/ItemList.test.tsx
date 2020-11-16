import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ItemList } from "./ItemList";
import { buildNForM, buildNForPrice } from "../../priceRules";

describe(`<ItemList /> tests`, () => {
  const item1 = {
    id: "1",
    name: "Face Mask",
    pricePerUnit: 2.5,
    unit: "each",
    unitsPerItem: 1,
    priceRule: buildNForPrice(2, 4),
    priceRuleText: "Face Masks 2 for £4",
  };
  const item2 = {
    id: "2",
    name: "Toilet Paper",
    pricePerUnit: 0.65,
    unit: "roll",
    unitsPerItem: 1,
    priceRule: buildNForM(6, 5),
    priceRuleText: "Toilet Paper 6 for 5",
  };
  it("should render ItemList with correct props", () => {
    const { container } = render(
      <ItemList itemList={[item1, item2]} onAddToCart={() => {}} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call onAddToCart", () => {
    const onAddToCart = jest.fn();
    const { getByText } = render(
      <ItemList itemList={[item1]} onAddToCart={onAddToCart} />
    );
    fireEvent.click(getByText("Add to cart"));
    expect(onAddToCart).toHaveBeenCalledWith("1");
    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });
});
