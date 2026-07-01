import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all generated pages
import FoodExpressHomepage from './pages/FoodExpressHomepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OTPVerification from './pages/OTPVerification';
import RestaurantSearchResults from './pages/RestaurantSearchResults';
import RestaurantDetail from './pages/RestaurantDetail';
import Checkout from './pages/Checkout';
import OrderTracking from './pages/OrderTracking';
import MyOrders from './pages/MyOrders';
import AdminDashboard from './pages/AdminDashboard';
import LoadingResults from './pages/LoadingResults';
import NoResults from './pages/NoResults';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FoodExpressHomepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/otp" element={<OTPVerification />} />
      <Route path="/search" element={<RestaurantSearchResults />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/tracking" element={<OrderTracking />} />
      <Route path="/orders" element={<MyOrders />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/loading" element={<LoadingResults />} />
      <Route path="/no-results" element={<NoResults />} />
    </Routes>
  );
}

export default App;
