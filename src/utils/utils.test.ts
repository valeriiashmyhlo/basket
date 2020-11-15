import "@testing-library/jest-dom/extend-expect";
import { roundToPrecision } from "./utils";

describe("utils", () => {
  it("roundToPrecision", () => {
    expect(roundToPrecision(1.555, 2)).toEqual(1.55);
  });
});
