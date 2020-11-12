import * as React from "react";
import { Item as ItemComponent } from "../Item";

interface Item {
  name: string;
  price: number;
}

interface ItemListProps {
  itemList: Item[];
}

const ItemList: React.FC<ItemListProps> = ({ itemList }) => {
  const onAddToCart = () => {};
  return (
    <div>
      {itemList.map((item, i) => (
        <ItemComponent key={i} onAddToCart={onAddToCart} {...item} />
      ))}
    </div>
  );
};

export { ItemList };
