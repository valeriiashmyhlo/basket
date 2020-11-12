import React from "react";
import "./App.css";
import { ItemList } from "./components/ItemList";

const GOODS = [
  {
    name: "Face Mask",
    price: 2.5,
  },
  {
    name: "Toilet Paper",
    price: 0.65,
  },
  {
    name: "Hand Sanitizer",
    price: 19.99,
  },
];

function App() {
  return (
    <div className="App">
      <ItemList itemList={GOODS} />
    </div>
  );
}

export default App;
