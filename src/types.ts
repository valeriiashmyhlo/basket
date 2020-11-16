export type PriceRule = (
  this: Item,
  quantity: number
) => { total: number; savings: number };

export interface Item {
  id: string;
  name: string;
  unit: string;
  pricePerUnit: number;
  unitsPerItem: number;
  priceRule: PriceRule;
  priceRuleText: string;
}

export interface CartItem {
  item: Item;
  quantity: number;
}
