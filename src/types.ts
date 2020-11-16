export interface PricedItem {
  pricePerUnit: number;
  unitsPerItem: number;
}

export interface Item extends PricedItem {
  id: string;
  name: string;
  unit: string;
  priceRule: PriceRule;
  priceRuleText: string;
}

export interface CartItem {
  item: Item;
  quantity: number;
}

export type PriceRule = (
  this: PricedItem,
  quantity: number
) => { total: number; savings: number };
