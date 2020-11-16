import "@testing-library/jest-dom/extend-expect";
import { roundToPrecision } from "./utils";

describe("utils", () => {
  describe("roundToPrecision", () => {
    it("rounds number to precision", () => {
      expect(roundToPrecision(1.555, 2)).toEqual(1.55);
      expect(roundToPrecision(1.5555, 3)).toEqual(1.556);
    });
  });
});
