import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/orders/all').then(({ data }) => {
      setOrders(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      await api.put(`/orders/${id}/status`, { status });
      setOrders(orders.map(o => o._id === id ? { ...o, status } : o));
    } catch (err) { console.error(err); }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalAmount, 0);

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-container-low border-r border-outline-variant flex flex-col py-6 px-4 shrink-0">
        <div className="flex items-center gap-3 mb-10 px-2">
          <Link to="/" className="text-2xl font-bold text-primary leading-none">FoodExpress<span className="block text-secondary text-[10px] uppercase tracking-widest mt-1">Admin Terminal</span></Link>
        </div>
        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-primary font-bold bg-primary/10 transition-all">Orders</button>
          <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-secondary hover:bg-surface-variant transition-all text-left">Menu Management</button>
        </nav>
        <button onClick={handleLogout} className="mt-auto flex items-center gap-3 px-3 py-3 rounded-lg text-error hover:bg-error-container/50 transition-colors font-bold text-left">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-surface border-b border-outline-variant flex justify-between items-center px-8 shrink-0">
          <h2 className="text-2xl font-bold text-on-surface">Order Management</h2>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary-container text-on-primary-container p-6 rounded-2xl shadow-sm">
              <p className="text-sm font-bold opacity-80 mb-1">Total Orders</p>
              <h3 className="text-4xl font-extrabold">{orders.length}</h3>
            </div>
            <div className="bg-secondary-container text-on-secondary-container p-6 rounded-2xl shadow-sm">
              <p className="text-sm font-bold opacity-80 mb-1">Total Revenue</p>
              <h3 className="text-4xl font-extrabold">₹{totalRevenue}</h3>
            </div>
            <div className="bg-tertiary-container text-on-tertiary-container p-6 rounded-2xl shadow-sm">
              <p className="text-sm font-bold opacity-80 mb-1">Pending Orders</p>
              <h3 className="text-4xl font-extrabold">{orders.filter(o => o.status === 'pending').length}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-outline-variant/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-on-surface">
                <thead className="bg-surface-container-low border-b border-outline-variant">
                  <tr>
                    <th className="px-6 py-4 font-bold text-on-surface-variant">Order ID</th>
                    <th className="px-6 py-4 font-bold text-on-surface-variant">Customer</th>
                    <th className="px-6 py-4 font-bold text-on-surface-variant">Amount</th>
                    <th className="px-6 py-4 font-bold text-on-surface-variant">Status</th>
                    <th className="px-6 py-4 font-bold text-on-surface-variant">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30">
                  {loading ? (
                    <tr><td colSpan="5" className="text-center py-10">Loading...</td></tr>
                  ) : (
                    orders.map(order => (
                      <tr key={order._id} className="hover:bg-surface-container-lowest transition-colors">
                        <td className="px-6 py-4 font-mono text-xs">{order._id.slice(-8).toUpperCase()}</td>
                        <td className="px-6 py-4 font-bold">{order.userId?.name || 'Unknown'}</td>
                        <td className="px-6 py-4 font-bold text-secondary">₹{order.totalAmount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'delivered' ? 'bg-secondary/10 text-secondary' : order.status === 'cancelled' ? 'bg-error/10 text-error' : 'bg-primary-fixed text-on-primary-fixed'}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <select 
                            value={order.status} 
                            onChange={(e) => handleStatusUpdate(order._id, e.target.value)}
                            className="text-xs bg-surface border border-outline-variant rounded px-2 py-1 outline-none"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="preparing">Preparing</option>
                            <option value="out_for_delivery">Out for Delivery</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
