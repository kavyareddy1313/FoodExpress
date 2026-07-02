import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import api from '../services/api';

export default function FoodExpressHomepage() {
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated, logout } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/restaurants').then(({ data }) => {
      setRestaurants(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* Navbar */}
      <header className="bg-surface sticky top-0 z-50 shadow-md transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1280px] mx-auto h-20">
          <Link to="/" className="font-bold text-xl text-on-surface flex items-center gap-2">🍔 FoodExpress</Link>
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-secondary font-bold border-b-2 border-secondary pb-1">Restaurants</Link>
            {isAuthenticated && <Link to="/orders" className="text-on-surface-variant hover:text-secondary transition-colors">My Orders</Link>}
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/search')} className="p-2 text-on-surface-variant hover:text-secondary rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            {isAuthenticated && (
              <button onClick={() => navigate('/checkout')} className="p-2 text-on-surface-variant hover:text-secondary rounded-full transition-colors relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                {itemCount > 0 && <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{itemCount}</span>}
              </button>
            )}
            <div className="h-6 w-px bg-outline-variant mx-2 hidden sm:block" />
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-sm font-semibold text-on-surface">{user.name}</span>
                <button onClick={logout} className="text-sm text-on-surface-variant hover:text-error transition-colors">Logout</button>
              </div>
            ) : (
              <>
                <Link to="/login" className="hidden sm:inline-block font-semibold text-sm text-on-surface hover:text-secondary transition-colors">Login</Link>
                <Link to="/signup" className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-semibold text-sm hover:-translate-y-0.5 shadow transition-all">JOIN NOW</Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-8 pb-16 flex flex-col gap-16">
        {/* Hero Section */}
        <section className="bg-primary-container text-on-primary rounded-3xl overflow-hidden shadow-lg relative min-h-[500px] flex items-center p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full z-10">
            <div className="flex flex-col justify-center items-start gap-6">
              <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 inline-flex items-center gap-2">
                <span>⚡</span><span className="font-semibold text-sm text-on-primary">LIMITED TIME OFFERS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-on-primary max-w-lg leading-tight">
                Deliciousness <br /><span className="italic text-secondary-container">Delivered Fast.</span>
              </h1>
              <p className="text-lg text-on-primary/80 max-w-md">Order from over 5,000+ top restaurants in Hyderabad. Fresh, hot, and right to your doorstep.</p>
              <form onSubmit={handleSearch} className="w-full max-w-md mt-4 relative">
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-12 pr-32 py-4 bg-white text-on-surface rounded-xl border-none shadow focus:ring-2 focus:ring-secondary text-sm placeholder-outline" placeholder="Find your favorite meal..." type="text" />
                <button type="submit" className="absolute inset-y-1.5 right-1.5 bg-secondary text-on-secondary px-6 rounded-lg font-semibold text-sm hover:-translate-y-0.5 transition-transform">Search</button>
              </form>
            </div>
            <div className="hidden lg:flex relative items-center justify-center h-[400px]">
              <div className="absolute w-64 h-64 bg-secondary-container rounded-full blur-[100px] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative w-full h-full max-w-[450px]">
                <div className="absolute top-0 right-0 w-[240px] h-[240px] rounded-3xl overflow-hidden shadow-xl transform rotate-6 border-4 border-white z-20">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzvDeLJRQgwiz5FzjpHTqBKJ3cd06HNLf46PMprm4HbOKjmfHQO2bumVvJ3ghb5231NOfB-fcMvHzEXmxaGKBIaXRgIMuhdg0b-Y28YL9YyiK8jskPqjOgLowzB9nxK_IOnMtM8PMxhX2yXNrLyrZs9PNiSaeQPnVszUG23qCeVooT7qBJpVv4VSqVRjRN9ZggwTTRs1QDHSLXT73e0HzeGBFK4cr6cpgR9QUg3qcQoCJZRJbN1CBvIr_N7OPEktLG_plNaTdXEbk" alt="Biryani" />
                </div>
                <div className="absolute bottom-10 left-0 w-[200px] h-[200px] rounded-3xl overflow-hidden shadow-xl transform -rotate-6 border-4 border-white z-10">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0K-mntTTaWIbFo53HoC_yWGh99nNFCTnMCqCShVr2pkDWf1Ow_zT_hTjg02kAUgxxgCnHmdC54hTkt2_PF1VrmxA2JjFwqSP8zq-8Hwu7VjhzouhfLWhflf4cQVNDCQNTjVNNtDKqmuQQ0VrlxiBdafrQlOCRt_URQY7nY4PKwuFr2cYbArqeNGGRCC6LlFEbB5Yye0SCE3_6dcnD0n32tSJ1XzcNfskpT6hgp0AojdTiZSZEK9-HPdwVKK9dh8t9cjQybDT2r0" alt="Pizza" />
                </div>
                <div className="absolute top-10 left-10 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-30 transform -rotate-3">
                  <span className="font-bold text-sm text-secondary">₹150 OFF</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant List */}
        <section>
          <h2 className="text-2xl font-bold text-on-surface mb-6">Popular Restaurants</h2>
          {loading ? (
            <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div></div>
          ) : restaurants.length === 0 ? (
            <p className="text-center text-on-surface-variant py-10">No restaurants found. Run the seed script to add sample data.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((r) => (
                <Link to={`/restaurant/${r._id}`} key={r._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 group">
                  <div className="h-48 overflow-hidden">
                    <img src={r.image || 'https://via.placeholder.com/400x300?text=Restaurant'} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg text-on-surface">{r.name}</h3>
                      <span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-xs font-bold flex items-center gap-1">⭐ {r.rating}</span>
                    </div>
                    <p className="text-on-surface-variant text-sm mb-3">{r.description}</p>
                    <div className="flex items-center gap-4 text-xs text-outline">
                      <span className="flex items-center gap-1">🕐 {r.deliveryTime}</span>
                      <span className="flex items-center gap-1">📍 {r.address}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container text-on-primary-container mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-10 py-8 w-full max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-extrabold">FoodExpress</span>
            <p className="opacity-80 text-sm">© 2024 FoodExpress. Proudly serving Hyderabad.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm mb-1">Company</h4>
            <span className="opacity-80 text-sm">About Us</span>
            <span className="opacity-80 text-sm">Careers</span>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm mb-1">Support</h4>
            <span className="opacity-80 text-sm">Help & Support</span>
            <Link to="/admin" className="text-secondary-container font-bold text-sm hover:underline">Admin Portal</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm mb-1">Quick Links</h4>
            <Link to="/login" className="opacity-80 text-sm hover:opacity-100">Login</Link>
            <Link to="/signup" className="opacity-80 text-sm hover:opacity-100">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
