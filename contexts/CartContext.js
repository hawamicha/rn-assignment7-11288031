import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('cart').then(cartItems => {
      if (cartItems) {
        setCart(JSON.parse(cartItems));
      }
    });
  }, []);

  const addToCart = (newItem) => {
    const newCart = [...cart, newItem];
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter(cartItem => cartItem.title !== item.title);
    setCart(newCart);
    AsyncStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
