import * as React from "react";
import { Card, Button } from "react-bootstrap";

interface ItemProps {
  name: string;
  price: number;
  onAddToCart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Item: React.FC<ItemProps> = ({ name, price, onAddToCart }) => {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Body>{price}</Card.Body>
      <Button onClick={onAddToCart}>Add to cart</Button>
    </Card>
  );
};

export { Item };
