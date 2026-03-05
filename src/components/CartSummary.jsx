import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartSummary = () => {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div>
      <h3>Items: {cart.length}</h3>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ₹{item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default CartSummary;