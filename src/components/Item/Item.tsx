import * as React from "react";
import { Card, Button } from "react-bootstrap";

interface ItemProps {
  name: string;
  price: number;
  onAddToCart: () => void;
}

const Item: React.FC<ItemProps> = ({ name, price, onAddToCart }) => {
  return (
    <Card style={{ width: "175px", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button onClick={onAddToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export { Item };
