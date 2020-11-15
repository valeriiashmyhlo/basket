import React from "react";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { ItemList } from "./components/ItemList";
import { Cart } from "./components/Cart";
import { Item, CartItem } from "./types";
import { NForPrice, DefaultRule, NForM } from "./priceRules";

const GOODS: { [index: string]: Item } = {
  1: {
    id: "1",
    name: "Face Mask",
    priceRule: new NForPrice(2, 2.5, 4.0),
  },
  2: {
    id: "2",
    name: "Toilet Paper",
    priceRule: new NForM(6, 5, 0.65),
  },
  3: {
    id: "3",
    name: "Hand Sanitizer",
    priceRule: new DefaultRule(19.99),
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
          : { item: GOODS[id], quantity: 1 };

      return {
        ...prevState,
        [id]: cartItem,
      };
    });
  };

  const deleteItem = (id: string) => {
    setCartList(prevState => {
      delete prevState[id];
      return {...prevState};
    })
  }

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
          <Col xs lg="4">
            <Cart items={Object.values(cartList)} deleteItem={deleteItem} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
