import * as React from "react";
import { CartItem } from "../../types";
import styles from "./Cart.module.scss";

const Cart: React.FC<{ items: CartItem[] }> = ({ items }) => {
  return (
    <div>
      {items.length > 0 ? (
        items.map(({ item, quantity }) => (
          <div className={`${styles.cartItem} my-2`} key={item.id}>
            <span>{item.name}</span>
            <span>x {quantity}</span>
            <span>£{item.priceRule.getPrice(quantity)}</span>
          </div>
        ))
      ) : (
        <div>Your cart is empty</div>
      )}
    </div>
  );
};

export { Cart };
