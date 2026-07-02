import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import api from '../services/api';

export default function Checkout() {
  const { cart, itemCount, updateQuantity, removeFromCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!address.trim()) { setError('Please enter a delivery address'); return; }
    setLoading(true);
    setError('');
    
    try {
      if (paymentMethod === 'cod') {
        const { data } = await api.post('/orders', { deliveryAddress: address, paymentMethod });
        navigate(`/tracking/${data._id}`);
      } else if (paymentMethod === 'online') {
        // 1. Create Razorpay order on backend
        const { data: orderData } = await api.post('/orders/razorpay');
        
        // 2. Initialize Razorpay Checkout
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_SJb1Khp4Xsxh2j', // In a real app, inject this via an endpoint or env
          amount: orderData.amount,
          currency: orderData.currency,
          name: 'FoodExpress',
          description: 'Food Order Payment',
          order_id: orderData.id,
          handler: async function (response) {
            try {
              // 3. Verify payment on backend
              const verifyRes = await api.post('/orders/razorpay/verify', {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                deliveryAddress: address
              });
              navigate(`/tracking/${verifyRes.data.order._id}`);
            } catch (err) {
              setError(err.response?.data?.message || 'Payment verification failed');
            }
          },
          prefill: {
            name: user?.name || '',
            email: user?.email || '',
          },
          theme: {
            color: '#FF5722', // Secondary color
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
          setError('Payment failed or was cancelled');
        });
        rzp.open();
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order');
    } finally { setLoading(false); }
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
      <header className="bg-surface sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1280px] mx-auto h-16">
          <Link to="/" className="font-bold text-xl text-on-surface">🍔 FoodExpress</Link>
          <span className="text-sm text-on-surface-variant">Checkout ({itemCount} items)</span>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-on-surface mb-6">Your Cart</h2>
            <div className="flex flex-col gap-4">
              {cart.items?.map((item) => (
                <div key={item.foodItemId} className="bg-white rounded-xl shadow-sm border border-outline-variant/20 p-4 flex items-center gap-4">
                  {item.image && <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />}
                  <div className="flex-1">
                    <h3 className="font-bold text-on-surface">{item.name}</h3>
                    <p className="text-sm text-on-surface-variant">{item.restaurantName}</p>
                    <p className="font-bold text-secondary mt-1">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.foodItemId, item.quantity - 1)} className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-on-surface hover:bg-outline-variant transition-colors">−</button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.foodItemId, item.quantity + 1)} className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold hover:opacity-90 transition-opacity">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.foodItemId)} className="text-error hover:text-on-error-container transition-colors p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-md border border-outline-variant/20 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-on-surface mb-4">Order Summary</h3>
              <div className="flex justify-between text-sm text-on-surface-variant mb-2"><span>Subtotal</span><span>₹{cart.totalAmount}</span></div>
              <div className="flex justify-between text-sm text-on-surface-variant mb-2"><span>Delivery Fee</span><span className="text-secondary font-bold">FREE</span></div>
              <hr className="my-3 border-outline-variant" />
              <div className="flex justify-between font-bold text-on-surface text-lg mb-6"><span>Total</span><span>₹{cart.totalAmount}</span></div>

              {error && <div className="bg-error-container text-on-error-container p-3 rounded-lg mb-4 text-sm">{error}</div>}

              <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1">Delivery Address</label>
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your full delivery address" required rows={3} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-secondary text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-2">Payment Method</label>
                  <div className="flex gap-3">
                    <label className={`flex-1 flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-secondary bg-secondary/5' : 'border-outline-variant'}`}>
                      <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} className="text-secondary" />
                      <span className="text-sm font-semibold">Cash on Delivery</span>
                    </label>
                    <label className={`flex-1 flex items-center gap-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${paymentMethod === 'online' ? 'border-secondary bg-secondary/5' : 'border-outline-variant'}`}>
                      <input type="radio" name="payment" value="online" checked={paymentMethod === 'online'} onChange={(e) => setPaymentMethod(e.target.value)} className="text-secondary" />
                      <span className="text-sm font-semibold">Online Payment</span>
                    </label>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-bold hover:-translate-y-0.5 transition-all disabled:opacity-50">
                  {loading ? 'Placing Order...' : `Place Order — ₹${cart.totalAmount}`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
