import "@testing-library/jest-dom/extend-expect";
import { DefaultRule } from "./DefaultRule";

describe("DefaultRule", () => {
  it("should get correct price", () => {
    const item = {
      id: "2",
      name: "Toilet Paper",
      priceRule: new DefaultRule(2),
    };

    expect(item.priceRule.getPrice(1)).toEqual(2);
    expect(item.priceRule.getPrice(2)).toEqual(4);
    expect(item.priceRule.getPrice(10)).toEqual(20);
  });
});
