export interface PriceRule {
  getPrice(quantity: number): number;
}

export interface Item {
  id: string;
  name: string;
  priceRule: PriceRule;
}

export interface CartItem {
  item: Item;
  quantity: number;
}
