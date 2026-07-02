import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const statusSteps = ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered'];
const statusLabels = { pending: 'Order Placed', confirmed: 'Confirmed', preparing: 'Preparing', out_for_delivery: 'Out for Delivery', delivered: 'Delivered' };

export default function OrderTracking() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/orders/${id}`).then(({ data }) => { setOrder(data); setLoading(false); }).catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div></div>;
  if (!order) return <div className="min-h-screen flex items-center justify-center text-on-surface-variant">Order not found</div>;

  const currentIndex = statusSteps.indexOf(order.status);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="bg-surface sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1280px] mx-auto h-16">
          <Link to="/" className="font-bold text-xl text-on-surface">🍔 FoodExpress</Link>
          <Link to="/orders" className="text-sm font-semibold text-secondary hover:underline">My Orders</Link>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <div className="bg-white rounded-2xl shadow-md border border-outline-variant/20 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-on-surface">Order Tracking</h1>
              <p className="text-on-surface-variant text-sm mt-1">Order #{order._id.slice(-8).toUpperCase()}</p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-bold ${order.status === 'delivered' ? 'bg-secondary/10 text-secondary' : order.status === 'cancelled' ? 'bg-error/10 text-error' : 'bg-primary-fixed text-on-primary-fixed'}`}>
              {statusLabels[order.status] || order.status}
            </span>
          </div>

          {/* Progress Steps */}
          {order.status !== 'cancelled' && (
            <div className="flex items-center justify-between mb-10 relative">
              <div className="absolute top-5 left-0 right-0 h-1 bg-outline-variant/30 z-0" />
              <div className="absolute top-5 left-0 h-1 bg-secondary z-0 transition-all duration-500" style={{ width: `${(currentIndex / (statusSteps.length - 1)) * 100}%` }} />
              {statusSteps.map((step, i) => (
                <div key={step} className="flex flex-col items-center z-10 relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${i <= currentIndex ? 'bg-secondary text-on-secondary border-secondary' : 'bg-white text-outline border-outline-variant'}`}>
                    {i <= currentIndex ? '✓' : i + 1}
                  </div>
                  <span className={`text-xs mt-2 font-semibold ${i <= currentIndex ? 'text-secondary' : 'text-outline'}`}>{statusLabels[step]}</span>
                </div>
              ))}
            </div>
          )}

          {/* Order Items */}
          <h3 className="font-bold text-on-surface mb-3">Items Ordered</h3>
          <div className="flex flex-col gap-3 mb-6">
            {order.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b border-outline-variant/20 last:border-0">
                <div>
                  <span className="font-semibold text-on-surface">{item.name}</span>
                  <span className="text-on-surface-variant text-sm ml-2">x{item.quantity}</span>
                </div>
                <span className="font-bold text-on-surface">₹{item.price * item.quantity}</span>
              </div>
            ))}
          </div>

          <hr className="border-outline-variant my-4" />
          <div className="flex justify-between font-bold text-lg text-on-surface">
            <span>Total</span><span>₹{order.totalAmount}</span>
          </div>
          <div className="mt-4 text-sm text-on-surface-variant">
            <p><strong>Delivery Address:</strong> {order.deliveryAddress}</p>
            <p><strong>Payment:</strong> {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
            <p><strong>Placed:</strong> {new Date(order.createdAt).toLocaleString()}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
