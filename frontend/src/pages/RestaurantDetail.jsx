import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import api from '../services/api';

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingId, setAddingId] = useState(null);
  const { isAuthenticated } = useAuth();
  const { addToCart, itemCount } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      api.get(`/restaurants/${id}`),
      api.get(`/foods/restaurant/${id}`),
    ]).then(([rRes, fRes]) => {
      setRestaurant(rRes.data);
      setFoods(fRes.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [id]);

  const handleAddToCart = async (food) => {
    if (!isAuthenticated) { navigate('/login'); return; }
    setAddingId(food._id);
    try {
      await addToCart({
        foodItemId: food._id,
        name: food.name,
        price: food.price,
        quantity: 1,
        image: food.image,
        restaurantName: restaurant?.name || '',
      });
      navigate('/checkout');
    } catch (err) { console.error(err); }
    finally { setAddingId(null); }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary"></div></div>;
  if (!restaurant) return <div className="min-h-screen flex items-center justify-center text-on-surface-variant">Restaurant not found</div>;

  const categories = [...new Set(foods.map(f => f.category))];

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Navbar */}
      <header className="bg-surface sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center px-6 md:px-10 w-full max-w-[1280px] mx-auto h-16">
          <Link to="/" className="font-bold text-xl text-on-surface">🍔 FoodExpress</Link>
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

      {/* Restaurant Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img src={restaurant.image || 'https://via.placeholder.com/1200x400'} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-10 text-white">
          <h1 className="text-3xl md:text-4xl font-extrabold">{restaurant.name}</h1>
          <p className="text-white/80 mt-1">{restaurant.description}</p>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">⭐ {restaurant.rating}</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">🕐 {restaurant.deliveryTime}</span>
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">📍 {restaurant.address}</span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-10 py-8">
        {foods.length === 0 ? (
          <p className="text-center text-on-surface-variant py-10">No menu items available for this restaurant.</p>
        ) : (
          categories.map((cat) => (
            <div key={cat} className="mb-10">
              <h2 className="text-xl font-bold text-on-surface mb-4 border-b border-outline-variant pb-2">{cat}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {foods.filter(f => f.category === cat).map((food) => (
                  <div key={food._id} className="flex bg-white rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden hover:shadow-md transition-shadow">
                    {food.image && (
                      <div className="w-32 h-32 flex-shrink-0">
                        <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-on-surface">{food.name}</h3>
                        <p className="text-on-surface-variant text-sm mt-0.5">{food.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="font-bold text-lg text-on-surface">₹{food.price}</span>
                        <button
                          onClick={() => handleAddToCart(food)}
                          disabled={addingId === food._id}
                          className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-bold hover:-translate-y-0.5 transition-all disabled:opacity-50"
                        >
                          {addingId === food._id ? 'Adding...' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
