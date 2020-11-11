import * as React from "react";
import { Card, Button } from "react-bootstrap";

interface Item {
  name: string;
  price: number;
  onClick: () => void;
}

const Item: React.FC<Item> = ({ name, price, onClick }) => {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
      <Card.Body>{price}</Card.Body>
      <Button onClick={onClick}>Add to cart</Button>
    </Card>
  );
};

export { Item };
