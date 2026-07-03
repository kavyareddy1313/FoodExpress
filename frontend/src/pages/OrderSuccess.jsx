import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function OrderSuccess() {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.orderId) {
      navigate('/orders', { replace: true });
    }
  }, [state, navigate]);

  if (!state?.orderId) return null;

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-outline-variant/20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', damping: 15 }}
          className="mx-auto w-24 h-24 bg-secondary-container rounded-full flex items-center justify-center mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="text-secondary h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </motion.div>
        
        <h1 className="text-3xl font-extrabold text-on-surface mb-2">Order Placed!</h1>
        <p className="text-on-surface-variant mb-8">
          Thank you for your order. Your delicious food is being prepared.
        </p>

        <div className="bg-surface p-6 rounded-2xl mb-8 text-left border border-outline-variant/30 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant font-medium">Order Number</span>
            <span className="font-bold text-on-surface">#{state.orderId.slice(-8).toUpperCase()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant font-medium">Amount Paid</span>
            <span className="font-bold text-on-surface">₹{state.totalAmount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-on-surface-variant font-medium">Est. Delivery</span>
            <span className="font-bold text-secondary flex items-center gap-1">
              30 - 45 mins
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link 
            to={`/tracking/${state.orderId}`}
            className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:-translate-y-0.5 transition-transform shadow-lg flex items-center justify-center gap-2"
          >
            Track Order <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
          <Link 
            to="/"
            className="w-full bg-surface-variant text-on-surface-variant py-4 rounded-xl font-bold text-lg hover:bg-outline-variant transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> Continue Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
