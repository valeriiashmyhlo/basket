import { PriceRule } from "../../types";
import { roundToPrecision } from "../../utils/utils";

export class NForPrice implements PriceRule {
  constructor(
    private n: number,
    private priceForOne: number,
    private priceForN: number
  ) {}

  getPrice(quantity: number): number {
    return roundToPrecision(
      Math.floor(quantity / this.n) * this.priceForN +
        (quantity % this.n) * this.priceForOne,
      2
    );
  }
}
