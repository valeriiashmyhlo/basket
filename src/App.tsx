import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ItemList } from "./components/ItemList";
import { Cart } from "./components/Cart";
import { Item, CartItem } from "./types";
import { buildDefault, buildNForM, buildNForPrice } from "./priceRules";

const GOODS: { [index: string]: Item } = {
  1: {
    id: "1",
    name: "Face Mask",
    pricePerUnit: 2.5,
    unit: "each",
    unitsPerItem: 1,
    priceRule: buildNForPrice(2, 4),
    priceRuleText: "Face Masks 2 for £4",
  },
  2: {
    id: "2",
    name: "Toilet Paper",
    pricePerUnit: 0.65,
    unit: "roll",
    unitsPerItem: 1,
    priceRule: buildNForM(6, 5),
    priceRuleText: "Toilet Paper 6 for 5",
  },
  3: {
    id: "3",
    name: "Hand Sanitizer",
    pricePerUnit: 19.99,
    unit: "liter",
    unitsPerItem: 0.175,
    priceRule: buildDefault(),
    priceRuleText: "",
  },
};

const App = () => {
  const [cartList, setCartList] = React.useState<{ [index: string]: CartItem }>(
    {}
  );

  const onAddToCart = React.useCallback((id: string) => {
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
  }, []);

  const onDeleteItem = React.useCallback((id: string) => {
    setCartList((prevState) => {
      if (prevState[id].quantity === 1) {
        const state = { ...prevState };
        delete state[id];
        return state;
      } else {
        return {
          ...prevState,
          [id]: { ...prevState[id], quantity: prevState[id].quantity - 1 },
        };
      }
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <ItemList
            itemList={React.useMemo(() => Object.values(GOODS), [])}
            onAddToCart={onAddToCart}
          />
        </Col>
        <Col xs lg="5">
          <Cart
            items={React.useMemo(() => Object.values(cartList), [cartList])}
            onDeleteItem={onDeleteItem}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
