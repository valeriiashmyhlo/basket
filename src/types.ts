export interface Item {
  id: string;
  name: string;
  price: number;
}

export interface CartItem extends Item {
  quantity: number;
}
