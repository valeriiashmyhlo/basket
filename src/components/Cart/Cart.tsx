import * as React from "react";
import { Button, Table } from "react-bootstrap";
import { CartItem, Item } from "../../types";
import styles from "./Cart.module.scss";
import { roundToPrecision } from "../../utils/utils";

const getItemsList = (items: CartItem[]): Item[] => {
  const list: Item[] = [];
  for (const item of items) {
    for (let i = 0; i < item.quantity; i++) {
      list.push(item.item);
    }
  }
  return list;
};

const Cart: React.FC<{
  items: CartItem[];
  onDeleteItem: (id: string) => void;
}> = ({ items, onDeleteItem }) => {
  const memoItemsList = React.useMemo(() => getItemsList(items), [items]);

  if (items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const { total, savings: savingsTotal } = items.reduce(
    (a, c) => {
      const { total, savings } = c.item.priceRule(c.quantity);
      return {
        total: a.total + total,
        savings: a.savings + savings,
      };
    },
    { total: 0, savings: 0 }
  );

  return (
    <Table size="sm">
      <thead>
        <tr className={styles.bold}>
          <th colSpan={4}>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {memoItemsList.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.unitsPerItem !== 1 ? item.unitsPerItem : null}</td>
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
        <tr className={styles.bold}>
          <td colSpan={4}>
            Sub-total:
          </td>
          <td>£{roundToPrecision(total + savingsTotal, 2)}</td>
        </tr>
        <tr className={styles.bold}>
          <td colSpan={5}>
            Savings
          </td>
        </tr>
        {items.map(({ item, quantity }) =>
          item.priceRule(quantity).savings !== 0 ? (
            <tr key={item.id}>
              <td colSpan={4}>{item.priceRuleText}</td>
              <td>-{roundToPrecision(item.priceRule(quantity).savings, 2)}</td>
            </tr>
          ) : null
        )}
        <tr className={styles.bold}>
          <td colSpan={4}>
            Total Savings:
          </td>
          <td>{-roundToPrecision(savingsTotal, 2)}</td>
        </tr>
        <tr className={styles.bold}>
          <td colSpan={4}>
            Total to Pay:
          </td>
          <td>£{roundToPrecision(total, 2)}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { Cart };
