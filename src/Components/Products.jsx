import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

export const Products = () => {
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
        <Link to={`/products/${product.id}`} key={product.id} className="product-link">
          <div className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <button className="add-to-cart-button">Add to Cart</button>
            <div className="rating">
              {/*rating is between 1 and 5 */}
              {Array.from({ length: product.rating }, (_, index) => (
                <span key={index} className="star-emoji">⭐</span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;

