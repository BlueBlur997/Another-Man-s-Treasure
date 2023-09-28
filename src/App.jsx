import { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import LogOut from './Components/LogOut';
import { SingleProduct } from './Components/SingleProduct';

import './App.css';

function App() {
  const [token, setToken] = useState(''); // Initialize token as an empty string

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newProducts = [...cart, product]
    setCart(newProducts);
  };

  const handleRemove = (product) => {
    const newProducts = cart.filter(item => item.id !== product.id)
    setCart(newProducts);
  };

  const updateCartProduct = (ProductId, newQuantity) => {
    // Find the item in the cart by itemId and update its quantity
    const updatedCart = cart.map((product) => {
      if (item.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setCart(updatedCart);
  };
  
  useEffect(() => {
    // Check if the token exists in localStorage when the component mounts
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <main>
      <div>
        <Navbar token={token} setToken={setToken} />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products handleAddToCart={handleAddToCart} />} />
          <Route path="/Cart" element={<Cart cart={cart} handleRemove={handleRemove} updateCartProduct={updateCartProduct} />} />
          <Route path="/SignIn" element={<SignIn setToken={setToken} />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
