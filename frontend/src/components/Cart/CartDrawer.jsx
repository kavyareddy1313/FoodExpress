import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const deliveryFee = 40;
  const taxes = cart.totalAmount * 0.05;
  const grandTotal = cart.totalAmount + deliveryFee + taxes;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/20">
              <h2 className="text-xl font-bold text-on-surface">Your Cart</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-on-surface-variant hover:text-error transition-colors p-2 rounded-full hover:bg-error-container">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {(!cart.items || cart.items.length === 0) ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 text-on-surface-variant">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  <p className="text-lg font-semibold">Your cart is empty</p>
                  <button onClick={() => setIsCartOpen(false)} className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-bold">
                    Browse Food
                  </button>
                </div>
              ) : (
                cart.items.map((item) => (
                  <div key={item.foodItemId} className="flex gap-4 items-center bg-white p-3 rounded-xl shadow-sm border border-outline-variant/20">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-on-surface">{item.name}</h3>
                      <p className="text-sm text-on-surface-variant mb-2">₹{item.price}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-secondary-container rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.foodItemId, item.quantity - 1)}
                            className="text-on-secondary-container hover:text-secondary p-1 flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                          </button>
                          <span className="font-bold text-sm min-w-[1ch] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.foodItemId, item.quantity + 1)}
                            className="text-on-secondary-container hover:text-secondary p-1 flex items-center justify-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.foodItemId)}
                          className="text-error hover:text-error p-2 flex items-center justify-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.items && cart.items.length > 0 && (
              <div className="p-6 bg-surface-variant border-t border-outline-variant/20">
                <div className="space-y-3 mb-6 text-sm text-on-surface">
                  <div className="flex justify-between">
                    <span>Item Total</span>
                    <span>₹{cart.totalAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes (5%)</span>
                    <span>₹{taxes.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-outline-variant/20 pt-3 flex justify-between font-bold text-lg">
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:-translate-y-0.5 transition-transform shadow-lg"
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
