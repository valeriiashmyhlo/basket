import "@testing-library/jest-dom/extend-expect";
import { buildDefault, buildNForPrice, buildNForM } from "./index";

describe("buildDefault", () => {
  it("should get correct total and savings", () => {
    const item = {
      id: "3",
      name: "Hand Sanitizer",
      pricePerUnit: 19.99,
      unit: "liter",
      unitsPerItem: 0.9,
      priceRule: buildDefault(),
      priceRuleText: "",
    };

    expectToBeCloseTo(item.priceRule(2), { total: 35.98, savings: 0 });
  });
});

describe("buildNForPrice", () => {
  it("should get correct total and savings", () => {
    const item = {
      id: "3",
      name: "Hand Sanitizer",
      pricePerUnit: 3,
      unit: "liter",
      unitsPerItem: 1.5,
      priceRule: buildNForPrice(2, 5),
      priceRuleText: "",
    };

    expectToBeCloseTo(item.priceRule(1), { total: 4.5, savings: 0 });
    expectToBeCloseTo(item.priceRule(2), { total: 8, savings: 1 });
    expectToBeCloseTo(item.priceRule(3), { total: 11.5, savings: 2 });
  });
});

describe("buildNForM", () => {
  it("should get correct total and savings", () => {
    const item = {
      id: "2",
      name: "Toilet Paper",
      pricePerUnit: 0.65,
      unit: "roll",
      unitsPerItem: 1,
      priceRule: buildNForM(6, 5),
      priceRuleText: "Toilet Paper 6 for 5",
    };

    expectToBeCloseTo(item.priceRule(1), { total: 0.65, savings: 0 });
    expectToBeCloseTo(item.priceRule(6), { total: 3.25, savings: 0.65 });
    expectToBeCloseTo(item.priceRule(7), { total: 3.90, savings: 0.65 });
  });
});

const expectToBeCloseTo = (
  actual: { total: number; savings: number },
  expected: { total: number; savings: number }
) => {
  expect(actual.total).toBeCloseTo(expected.total);
  expect(actual.savings).toBeCloseTo(expected.savings);
};
