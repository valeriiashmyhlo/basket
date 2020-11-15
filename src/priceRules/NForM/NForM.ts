import { PriceRule } from "../../types";
import { roundToPrecision } from "../../utils/utils";

export class NForM implements PriceRule {
  constructor(private n: number, private m: number, private price: number) {}

  getPrice(quantity: number): number {
    return roundToPrecision(
      quantity * this.price -
        Math.floor(quantity / this.n) * (this.n - this.m) * this.price, 2
    );
  }
}
