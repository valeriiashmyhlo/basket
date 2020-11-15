import "@testing-library/jest-dom/extend-expect";
import { NForPrice } from "./NForPrice";

describe("NForPrice rule", () => {
  it("should get correct price", () => {
    const item = {
      id: "2",
      name: "Toilet Paper",
      priceRule: new NForPrice(2, 3.5, 6),
    };

    expect(item.priceRule.getPrice(1)).toEqual(3.5);
    expect(item.priceRule.getPrice(2)).toEqual(6);
    expect(item.priceRule.getPrice(3)).toEqual(9.5);
    expect(item.priceRule.getPrice(10)).toEqual(30);
  });
});
