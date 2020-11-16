import * as React from "react";
import { Card, Button } from "react-bootstrap";

interface ItemProps {
  name: string;
  price: number;
  unit: string;
  onAddToCart: () => void;
}

const Item: React.FC<ItemProps> = ({ name, price, unit,onAddToCart }) => {
  return (
    <Card style={{ width: "175px", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price} / {unit}</Card.Text>
        <Button onClick={onAddToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export { Item };
