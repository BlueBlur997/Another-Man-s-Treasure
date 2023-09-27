import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import { useCart } from "./CartContext";

export const Products = ({handleAddToCart}) => {
  const { addToCart } = useCart();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchAll();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <div key={product.id} className="product">
          <Link to={`/products/${product.id}`} className="product-link">
            <img className="ProductImage" src={product.image} alt={product.title} />
          </Link>
          <h2>
            <Link to={`/products/${product.id}`} className="product-title-link">
              {product.title}
            </Link>
          </h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
          <div className="rating">
            {Array.from({ length: product.rating }, (_, index) => (
              <span key={index} className="star-emoji">⭐</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
