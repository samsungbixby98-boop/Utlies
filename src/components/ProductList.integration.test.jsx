import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("adds product and updates cart", () => {
  render(<App />);

  const buttons = screen.getAllByText("Add to Cart");
  fireEvent.click(buttons[0]);

  expect(screen.getByText(/Items:/)).toHaveTextContent("Items: 1");
});