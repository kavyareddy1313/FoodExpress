import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import CartDrawer from './components/Cart/CartDrawer';

import FoodExpressHomepage from './pages/FoodExpressHomepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OTPVerification from './pages/OTPVerification';
import RestaurantSearchResults from './pages/RestaurantSearchResults';
import RestaurantDetail from './pages/RestaurantDetail';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import OrderTracking from './pages/OrderTracking';
import MyOrders from './pages/MyOrders';
import AdminDashboard from './pages/AdminDashboard';

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return null;
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AdminRoute({ children }) {
  const { isAdmin, loading } = useAuth();
  if (loading) return null;
  return isAdmin ? children : <Navigate to="/" />;
}

function AppRoutes() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FoodExpressHomepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<OTPVerification />} />
      <Route path="/search" element={<RestaurantSearchResults />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
      <Route path="/tracking/:id" element={<ProtectedRoute><OrderTracking /></ProtectedRoute>} />
      <Route path="/success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute><MyOrders /></ProtectedRoute>} />
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
    </Routes>
    <CartDrawer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Toaster position="bottom-right" />
        <AppRoutes />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
