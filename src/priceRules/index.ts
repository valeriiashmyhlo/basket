import { Item, PriceRule } from "../types";

const getTotal = (item: Item, quantity: number) =>
  item.pricePerUnit * item.unitsPerItem * quantity;

export const buildNForM = (n: number, m: number): PriceRule => {
  return function (quantity) {
    const total =
      quantity * this.pricePerUnit -
      Math.floor(quantity / n) * (n - m) * this.pricePerUnit;
    const savings = getTotal(this, quantity) - total;

    return { total, savings };
  };
};

export const buildNForPrice = (n: number, priceForN: number): PriceRule => {
  return function (quantity) {
    const amount = quantity * this.unitsPerItem;
    const total =
      Math.floor(amount / n) * priceForN + (amount % n) * this.pricePerUnit;
    const savings = getTotal(this, quantity) - total;

    return { total, savings };
  };
};

export const buildDefault = (): PriceRule => {
  return function (quantity) {
    return { total: getTotal(this, quantity), savings: 0 };
  };
};
