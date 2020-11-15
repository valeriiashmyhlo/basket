import { roundToPrecision } from "../../utils/utils";
import { PriceRule } from "../../types";

export class DefaultRule implements PriceRule {
  constructor(private price: number) {}

  getPrice(quantity: number): number {
    return roundToPrecision(quantity * this.price, 2);
  }
}
