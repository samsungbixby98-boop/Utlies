import React from "react";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="header">
          <h1>🛒 Smart Gadget Store</h1>
          <p>React Unit & Integration Testing Lab</p>
        </header>

        <div className="container">
          <div className="products">
            <h2>🛍 Available Products</h2>
            <ProductList />
          </div>

          <div className="cart">
            <h2>🧾 Cart Summary</h2>
            <CartSummary />
          </div>
        </div>

        <footer className="footer">
          <p>Experiment 9 - React Testing with Jest & RTL</p>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;