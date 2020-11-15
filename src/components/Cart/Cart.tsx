import * as React from "react";
import { Button } from "react-bootstrap";
import { CartItem } from "../../types";
import styles from "./Cart.module.scss";

const Cart: React.FC<{
  items: CartItem[];
  deleteItem: (id: string) => void;
}> = ({ items, deleteItem }) => {
  if (items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const total = items.reduce(
    (a, c) => a + c.item.priceRule.getPrice(c.quantity),
    0
  );

  return (
    <div>
      {items.map(({ item, quantity }) => (
        <div className={`${styles.cartItem} my-1`} key={item.id}>
          <span>{item.name}</span>
          <span>x {quantity}</span>
          <span>£{item.priceRule.getPrice(quantity)}</span>
          <Button variant="link" onClick={() => deleteItem(item.id)}>
            Remove
          </Button>
        </div>
      ))}
      <div className="my-4">Total: £{total}</div>
    </div>
  );
};

export { Cart };
