import * as React from "react";
import { Button, Table } from "react-bootstrap";
import { CartItem, Item } from "../../types";
import styles from "./Cart.module.scss";
import { roundToPrecision } from "../../utils/utils";

const Cart: React.FC<{
  items: CartItem[];
  onDeleteItem: (id: string) => void;
}> = ({ items, onDeleteItem }) => {
  if (items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const { total, savings: savingsTotal } = items.reduce(
    (a, c) => {
      const { total, savings } = c.item.priceRule(c.quantity);
      return {
        total: roundToPrecision(a.total + total, 2),
        savings: roundToPrecision(a.savings + savings, 2),
      };
    },
    { total: 0, savings: 0 }
  );

  const getItemsList = (items: CartItem[]): Item[] => {
    const list: Item[] = [];
    for (const item of items) {
      for (let i = 0; i < item.quantity; i++) {
        list.push(item.item);
      }
    }
    return list;
  };

  const subTotal = roundToPrecision(total + savingsTotal, 2);

  return (
    <Table striped size="sm">
      <thead>
        <tr>
          <th colSpan={4}>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {getItemsList(items).map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.unitsPerItem}</td>
            <td>
              {item.pricePerUnit}/{item.unit}
            </td>
            <td>
              <Button size="sm" onClick={() => onDeleteItem(item.id)}>
                Remove
              </Button>
            </td>
            <td>{roundToPrecision(item.priceRule(1).total, 2)}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={4} className={styles.bold}>Sub-total:</td>
          <td>£{subTotal}</td>
        </tr>
        <tr>
          <td colSpan={5} className={styles.bold}>Savings</td>
        </tr>
        {items.map(({ item, quantity }) =>
          item.priceRule(quantity).savings ? (
            <tr key={item.id}>
              <td colSpan={4}>{item.priceRuleText}</td>
              <td>-{roundToPrecision(item.priceRule(quantity).savings, 2)}</td>
            </tr>
          ) : null
        )}
        <tr>
          <td colSpan={4} className={styles.bold}>Total Savings:</td>
          <td>{-savingsTotal}</td>
        </tr>
        <tr>
          <td colSpan={4} className={styles.bold}>Total to Pay:</td>
          <td>£{total}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { Cart };
