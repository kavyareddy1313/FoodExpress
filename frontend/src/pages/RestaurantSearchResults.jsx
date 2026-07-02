import React, { useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import api from '../services/api';

export default function RestaurantSearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(query);
  const { isAuthenticated } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/restaurants?search=${query}`);
        setRestaurants(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      {/* Navbar */}
      <header className="bg-surface sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1280px] mx-auto h-20">
          <Link to="/" className="font-bold text-xl text-on-surface flex items-center gap-2">🍔 FoodExpress</Link>
          <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Search for restaurants, cuisines..." className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white transition-all" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3.5 top-3 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </form>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated && (
              <button onClick={() => navigate('/checkout')} className="p-2 text-on-surface-variant hover:text-secondary rounded-full relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
                {itemCount > 0 && <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{itemCount}</span>}
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        <div className="flex justify-between items-end mb-8 border-b border-outline-variant/30 pb-4">
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface">
              {query ? `Search results for "${query}"` : 'All Restaurants'}
            </h1>
            <p className="text-on-surface-variant mt-1">{restaurants.length} places found</p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div></div>
        ) : restaurants.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-on-surface mb-2">No restaurants found</h2>
            <p className="text-on-surface-variant mb-6">Try searching for something else like "Pizza" or "Biryani".</p>
            <Link to="/" className="text-secondary font-bold hover:underline">Go back home</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((r) => (
              <Link to={`/restaurant/${r._id}`} key={r._id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:-translate-y-1 transition-all duration-300 border border-outline-variant/20 group">
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
      </main>
    </div>
  );
}
