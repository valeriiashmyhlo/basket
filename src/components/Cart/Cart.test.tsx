import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Cart } from "./Cart";
import { buildNForM, buildNForPrice } from "../../priceRules";

describe(`<Cart /> tests`, () => {
  const item1 = {
    item: {
      id: "1",
      name: "Face Mask",
      pricePerUnit: 2.5,
      unit: "each",
      unitsPerItem: 1,
      priceRule: buildNForPrice(2, 4),
      priceRuleText: "Face Masks 2 for £4",
    },
    quantity: 2,
  };
  const item2 = {
    item: {
      id: "2",
      name: "Toilet Paper",
      pricePerUnit: 0.65,
      unit: "roll",
      unitsPerItem: 1,
      priceRule: buildNForM(6, 5),
      priceRuleText: "Toilet Paper 6 for 5",
    },
    quantity: 1,
  };

  it("should render CartList with correct props", () => {
    const { container } = render(
      <Cart items={[item1, item2]} onDeleteItem={() => {}} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call onDeleteItem", () => {
    const onDeleteItem = jest.fn();
    const { getByText } = render(
      <Cart items={[item2]} onDeleteItem={onDeleteItem} />
    );
    fireEvent.click(getByText("Remove"));
    expect(onDeleteItem).toHaveBeenCalledTimes(1);
    expect(onDeleteItem).toHaveBeenCalledWith("2");
  });
});
