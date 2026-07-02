import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const statusLabels = { pending: 'Order Placed', confirmed: 'Confirmed', preparing: 'Preparing', out_for_delivery: 'Out for Delivery', delivered: 'Delivered', cancelled: 'Cancelled' };

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <header className="bg-surface sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1280px] mx-auto h-16">
          <Link to="/" className="font-bold text-xl text-on-surface">🍔 FoodExpress</Link>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <h1 className="text-3xl font-extrabold text-on-surface mb-8">My Orders</h1>

        {loading ? (
          <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div></div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-on-surface mb-2">No orders yet</h2>
            <p className="text-on-surface-variant mb-6">Looks like you haven't placed any orders.</p>
            <Link to="/" className="bg-secondary text-on-secondary px-6 py-3 rounded-lg font-bold hover:-translate-y-0.5 transition-all">Start Ordering</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white rounded-2xl shadow-sm border border-outline-variant/20 p-6 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs text-on-surface-variant font-bold uppercase tracking-wider block mb-1">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${order.status === 'delivered' ? 'bg-secondary/10 text-secondary' : order.status === 'cancelled' ? 'bg-error/10 text-error' : 'bg-primary-fixed text-on-primary-fixed'}`}>
                      {statusLabels[order.status] || order.status}
                    </span>
                  </div>
                  <span className="font-bold text-lg text-on-surface">₹{order.totalAmount}</span>
                </div>

                <div className="flex-grow flex flex-col gap-2 mb-6">
                  {order.items.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-on-surface">{item.quantity} x {item.name}</span>
                    </div>
                  ))}
                  {order.items.length > 3 && <span className="text-xs text-on-surface-variant">+ {order.items.length - 3} more items</span>}
                </div>

                <Link to={`/tracking/${order._id}`} className="mt-auto block w-full text-center bg-surface-container-high text-on-surface font-bold py-2 rounded-lg hover:bg-outline-variant transition-colors">
                  Track Order
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
