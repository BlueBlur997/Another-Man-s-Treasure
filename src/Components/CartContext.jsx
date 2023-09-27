import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {

};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    state.cart
    localStorage.setItem("cartItems", state.cart)
  };

  const removeCartItem = (itemId) => {
  };

  const updateCartItem = (itemId, quantity) => {
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeCartItem,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
