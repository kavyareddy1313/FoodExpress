import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OTPVerification() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-outline-variant/30 text-center">
        <Link to="/" className="font-bold text-2xl mb-6 inline-block">🍔 FoodExpress</Link>
        <h2 className="text-2xl font-bold text-on-surface mb-2">Verify Your Account</h2>
        <p className="text-on-surface-variant text-sm mb-8">
          Enter the 4-digit code sent to your email. (Dummy page for now)
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4].map((i) => (
              <input 
                key={i} 
                type="text" 
                maxLength="1" 
                className="w-14 h-14 text-center text-xl font-bold rounded-xl border border-outline-variant bg-surface focus:ring-2 focus:ring-secondary focus:border-secondary" 
                placeholder="•"
              />
            ))}
          </div>
          
          <button type="submit" className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-bold hover:-translate-y-0.5 transition-all">
            Verify & Continue
          </button>
        </form>

        <p className="text-sm text-on-surface-variant mt-6">
          Didn't receive code? <button className="text-secondary font-bold hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
}
