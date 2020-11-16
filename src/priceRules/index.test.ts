import "@testing-library/jest-dom/extend-expect";
import { buildDefault, buildNForPrice, buildNForM } from "./index";

describe("buildDefault", () => {
  it("should get correct total and savings", () => {
    const item = {
      pricePerUnit: 19.99,
      unitsPerItem: 0.9,
      priceRule: buildDefault(),
    };

    expectToBeCloseTo(item.priceRule(1), { total: 17.991, savings: 0 });
    expectToBeCloseTo(item.priceRule(2), { total: 35.98, savings: 0 });
    expectToBeCloseTo(item.priceRule(3), { total: 53.973, savings: 0 });
  });
});

describe("buildNForPrice", () => {
  it("should get correct total and savings", () => {
    const item = {
      pricePerUnit: 3,
      unitsPerItem: 1.5,
      priceRule: buildNForPrice(2, 5),
    };

    expectToBeCloseTo(item.priceRule(1), { total: 4.5, savings: 0 });
    expectToBeCloseTo(item.priceRule(2), { total: 8, savings: 1 });
    expectToBeCloseTo(item.priceRule(3), { total: 11.5, savings: 2 });
  });
});

describe("buildNForM", () => {
  it("should get correct total and savings", () => {
    const item = {
      pricePerUnit: 2,
      unitsPerItem: 1.5,
      priceRule: buildNForM(3, 2),
    };

    expectToBeCloseTo(item.priceRule(1), { total: 3, savings: 0 });
    expectToBeCloseTo(item.priceRule(2), { total: 4, savings: 2 });
    expectToBeCloseTo(item.priceRule(3), { total: 7, savings: 2 });
    expectToBeCloseTo(item.priceRule(4), { total: 8, savings: 4 });
  });
});

const expectToBeCloseTo = (
  actual: { total: number; savings: number },
  expected: { total: number; savings: number }
) => {
  expect(actual.total).toBeCloseTo(expected.total);
  expect(actual.savings).toBeCloseTo(expected.savings);
};
