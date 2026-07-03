import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import api from '../services/api';
import toast from 'react-hot-toast';

import AddressSelector from '../components/Checkout/AddressSelector';
import PaymentOptions from '../components/Checkout/PaymentOptions';
import OrderSummary from '../components/Checkout/OrderSummary';

export default function Checkout() {
  const { cart, itemCount } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const deliveryFee = 40;
  const taxes = cart.totalAmount * 0.05;
  const grandTotal = cart.totalAmount + deliveryFee + taxes;

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error('Please select a delivery address');
      return;
    }
    setLoading(true);
    setError('');
    
    try {
      if (paymentMethod === 'cod') {
        const { data } = await api.post('/orders', { deliveryAddress: selectedAddress, paymentMethod });
        navigate('/success', { state: { orderId: data._id, totalAmount: grandTotal } });
      } else {
        // Online Payment via Razorpay
        const { data: orderData } = await api.post('/orders/razorpay');
        
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_SJb1Khp4Xsxh2j',
          amount: Math.round(grandTotal * 100),
          currency: orderData.currency,
          name: 'FoodExpress',
          description: 'Food Order Payment',
          order_id: orderData.id,
          handler: async function (response) {
            try {
              const verifyRes = await api.post('/orders/razorpay/verify', {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                deliveryAddress: selectedAddress
              });
              navigate('/success', { state: { orderId: verifyRes.data.order._id, totalAmount: grandTotal } });
            } catch (err) {
              setError(err.response?.data?.message || 'Payment verification failed');
              toast.error('Payment verification failed');
            }
          },
          prefill: {
            name: user?.name || '',
            email: user?.email || '',
            contact: selectedAddress?.phone || ''
          },
          theme: {
            color: '#FF5722',
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          setError('Payment failed or was cancelled');
          toast.error('Payment failed');
        });
        rzp.open();
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to place order';
      setError(msg);
      toast.error(msg);
    } finally { 
      setLoading(false); 
    }
  };

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-on-surface">Your cart is empty</h2>
        <p className="text-on-surface-variant">Add some delicious items from our restaurants!</p>
        <Link to="/" className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-bold hover:-translate-y-0.5 transition-all">Browse Restaurants</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="bg-surface sticky top-0 z-40 shadow-sm border-b border-outline-variant/20">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1280px] mx-auto h-16">
          <Link to="/" className="font-bold text-xl text-on-surface">🍔 FoodExpress</Link>
          <div className="hidden sm:flex items-center text-sm font-semibold text-on-surface-variant gap-2">
            <span className="text-secondary">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-secondary">Checkout</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span>Payment</span>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <h1 className="text-3xl font-extrabold text-on-surface mb-8">Secure Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 flex flex-col gap-8">
            <section className="bg-white rounded-2xl shadow-sm border border-outline-variant/20 p-6 md:p-8">
              <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm">1</span>
                Delivery Address
              </h2>
              <AddressSelector selectedAddress={selectedAddress} onSelect={setSelectedAddress} />
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-outline-variant/20 p-6 md:p-8">
              <h2 className="text-xl font-bold text-on-surface mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm">2</span>
                Payment Options
              </h2>
              <PaymentOptions paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
            </section>
          </div>

          <div>
            <OrderSummary 
              cart={cart}
              selectedAddress={selectedAddress}
              paymentMethod={paymentMethod}
              onPlaceOrder={handlePlaceOrder}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
