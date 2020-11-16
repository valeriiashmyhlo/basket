import * as React from "react";
import { Item as ItemComponent } from "../Item";
import styles from "./ItemList.module.scss";
import { Item } from "../../types";

const ItemList: React.FC<{
  itemList: Item[];
  onAddToCart: (id: string) => void;
}> = ({ itemList, onAddToCart }) => {
  return (
    <div className={styles.itemList}>
      {itemList.map((item) => (
        <ItemComponent
          key={item.id}
          onAddToCart={() => onAddToCart(item.id)}
          {...item}
          price={item.pricePerUnit}
          // price={item.priceRule.getPrice(1)}
        />
      ))}
    </div>
  );
};

export { ItemList };
