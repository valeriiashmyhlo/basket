import React from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { ItemList } from "./components/ItemList";
import { Cart } from "./components/Cart";
import { Item, CartItem } from "./types";

const GOODS: { [index: string]: Item } = {
  1: {
    id: "1",
    name: "Face Mask",
    price: 2.5,
  },
  2: {
    id: "2",
    name: "Toilet Paper",
    price: 0.65,
  },
  3: {
    id: "3",
    name: "Hand Sanitizer",
    price: 19.99,
  },
};

const App = () => {
  const [cartList, setCartList] = React.useState<{ [index: string]: CartItem }>(
    {}
  );

  const onAddToCart = (id: string) => {
    setCartList((prevState) => {
      const cartItem =
        id in prevState
          ? { ...prevState[id], quantity: prevState[id].quantity + 1 }
          : { ...GOODS[id], quantity: 1 };

      return {
        ...prevState,
        [id]: cartItem,
      };
    });
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <ItemList
              itemList={Object.values(GOODS)}
              onAddToCart={onAddToCart}
            />
          </Col>
          <Col xs lg="2">
            <Cart items={Object.values(cartList)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
