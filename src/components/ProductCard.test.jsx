import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { CartContext } from "../context/CartContext";

test("renders product and handles click", () => {
  const mockAdd = jest.fn();

  const product = { id: 1, name: "Laptop", price: 50000 };

  render(
    <CartContext.Provider value={{ addToCart: mockAdd }}>
      <ProductCard product={product} />
    </CartContext.Provider>
  );

  expect(screen.getByText("Laptop")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Add to Cart"));

  expect(mockAdd).toHaveBeenCalledWith(product);
});