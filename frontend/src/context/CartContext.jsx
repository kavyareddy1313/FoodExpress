import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [], totalAmount: 0 });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const fetchCart = useCallback(async () => {
    if (!isAuthenticated) {
      setCart({ items: [], totalAmount: 0 });
      return;
    }
    try {
      const { data } = await api.get('/cart');
      setCart(data);
    } catch {
      setCart({ items: [], totalAmount: 0 });
    }
  }, [isAuthenticated]);

  useEffect(() => { fetchCart(); }, [fetchCart]);

  const addToCart = async (item) => {
    const { data } = await api.post('/cart', item);
    setCart(data);
    return data;
  };

  const updateQuantity = async (foodItemId, quantity) => {
    const { data } = await api.put('/cart', { foodItemId, quantity });
    setCart(data);
    return data;
  };

  const removeFromCart = async (foodItemId) => {
    const { data } = await api.delete(`/cart/${foodItemId}`);
    setCart(data);
    return data;
  };

  const clearCart = async () => {
    await api.delete('/cart');
    setCart({ items: [], totalAmount: 0 });
  };

  const itemCount = cart.items?.reduce((sum, i) => sum + i.quantity, 0) || 0;

  return (
    <CartContext.Provider value={{ cart, itemCount, addToCart, updateQuantity, removeFromCart, clearCart, fetchCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
