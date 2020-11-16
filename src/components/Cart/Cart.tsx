import * as React from "react";
import { Button, Table } from "react-bootstrap";
import { CartItem } from "../../types";
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

  const subTotal = roundToPrecision(total + savingsTotal, 2);

  return (
    <Table striped size="sm">
      <thead>
        <tr>
          <th>Title</th>
          <th>Qty</th>
          <th />
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ item, quantity }) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>x {quantity}</td>
            <td>
              <Button size="sm" onClick={() => onDeleteItem(item.id)}>
                Remove
              </Button>
            </td>
            {/*<td>{roundToPrecision(item.pricePerUnit * quantity, 2)}</td>*/}
            <td>{roundToPrecision(item.priceRule(quantity).total, 2)}</td>
          </tr>
        ))}
        <tr>
          <td className={styles.bold}>Sub-total:</td>
          <td></td>
          <td></td>
          <td>{subTotal}</td>
        </tr>
        <tr>
          <td className={styles.bold}>Savings</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {items.map(({ item, quantity }) =>
          item.priceRule(quantity).savings ? (
            <tr key={item.id}>
              <td>{item.priceRuleText}</td>
              <td />
              <td />
              <td>-{roundToPrecision(item.priceRule(quantity).savings, 2)}</td>
            </tr>
          ) : null
        )}
        <tr>
          <td className={styles.bold}>Total Savings:</td>
          <td />
          <td />
          <td>{-savingsTotal}</td>
        </tr>
        <tr>
          <td className={styles.bold}>Total to Pay:</td>
          <td />
          <td />
          <td>{total}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export { Cart };
