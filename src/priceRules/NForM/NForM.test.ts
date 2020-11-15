import "@testing-library/jest-dom/extend-expect";
import { NForM } from "./NForM";

describe("NForM rule", () => {
  it("should get correct price", () => {
    const item = {
      id: "2",
      name: "Toilet Paper",
      priceRule: new NForM(4, 3, 5),
    };

    expect(item.priceRule.getPrice(1)).toEqual(5);
    expect(item.priceRule.getPrice(2)).toEqual(10);
    expect(item.priceRule.getPrice(3)).toEqual(15);
    expect(item.priceRule.getPrice(4)).toEqual(15);
    expect(item.priceRule.getPrice(5)).toEqual(20);
    expect(item.priceRule.getPrice(10)).toEqual(40);
  });
});
