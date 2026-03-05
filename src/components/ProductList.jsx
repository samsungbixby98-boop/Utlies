import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "💻 Laptop", price: 50000 },
  { id: 2, name: "📱 Mobile", price: 20000 },
  { id: 3, name: "🎧 Headset", price: 3000 }
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;