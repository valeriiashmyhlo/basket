import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});

test("elements added to cart onClick add to cart", () => {
  const { container, getAllByText } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
  fireEvent.click(getAllByText("Add to cart")[0]);
  expect(container.firstChild).toMatchSnapshot();
});
