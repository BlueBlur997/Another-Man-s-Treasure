import { useNavigate } from "react-router-dom";
import "./Cart.css";


function Cart({cart, handleRemove, updateCartProduct}) {
  const navigate = useNavigate();


  const calculateTotal = () => {
    if (!cart || !Array.isArray(cart)) {
      return 0;
    }
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    // Navigate to the Checkout page
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {!cart || !Array.isArray(cart) || cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-product">
              <p>{product.title}</p>
              <img className="ProductImage" src={product.image} alt={product.title} height={'200px'} />
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              
              {/* Update product quantity */}
              <button
                className="update-button"
                onClick={() => updateCartproduct(product.id, product.quantity + 1)}
              >
                +1
              </button>
              <button
                className="update-button"
                onClick={() => updateCartproduct(product.id, product.quantity - 1)}
                disabled={product.quantity === 1} // Disable if quantity is 1
              >
                -1
              </button>
              
              {/* Remove product */}
              <button
                className="remove-button"
                onClick={() => handleRemove(product)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
          <button className="checkout-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
