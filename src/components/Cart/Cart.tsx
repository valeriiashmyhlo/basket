import * as React from "react";
import { CartItem } from "../../types";

const Cart: React.FC<{ items: CartItem[] }> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          {item.name} {item.quantity}
        </div>
      ))}
    </div>
  );
};

export { Cart };
