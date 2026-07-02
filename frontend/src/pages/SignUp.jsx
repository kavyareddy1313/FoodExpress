import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await register(name, email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col w-[40%] bg-primary-container relative p-10 overflow-hidden justify-between">
        <div className="z-10 relative">
          <Link to="/" className="text-on-primary font-bold text-2xl">🍔 FoodExpress</Link>
        </div>
        <div className="z-10 relative mt-16 flex flex-col items-center">
          <div className="relative w-full max-w-[400px] aspect-square mb-8">
            <div className="absolute top-0 left-0 w-48 h-48 rounded-xl shadow-xl bg-cover bg-center transform -rotate-6 z-20 border-4 border-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzvDeLJRQgwiz5FzjpHTqBKJ3cd06HNLf46PMprm4HbOKjmfHQO2bumVvJ3ghb5231NOfB-fcMvHzEXmxaGKBIaXRgIMuhdg0b-Y28YL9YyiK8jskPqjOgLowzB9nxK_IOnMtM8PMxhX2yXNrLyrZs9PNiSaeQPnVszUG23qCeVooT7qBJpVv4VSqVRjRN9ZggwTTRs1QDHSLXT73e0HzeGBFK4cr6cpgR9QUg3qcQoCJZRJbN1CBvIr_N7OPEktLG_plNaTdXEbk")'}} />
            <div className="absolute top-12 right-0 w-40 h-40 rounded-full shadow-xl bg-cover bg-center transform rotate-6 z-10 border-4 border-white/10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0K-mntTTaWIbFo53HoC_yWGh99nNFCTnMCqCShVr2pkDWf1Ow_zT_hTjg02kAUgxxgCnHmdC54hTkt2_PF1VrmxA2JjFwqSP8zq-8Hwu7VjhzouhfLWhflf4cQVNDCQNTjVNNtDKqmuQQ0VrlxiBdafrQlOCRt_URQY7nY4PKwuFr2cYbArqeNGGRCC6LlFEbB5Yye0SCE3_6dcnD0n32tSJ1XzcNfskpT6hgp0AojdTiZSZEK9-HPdwVKK9dh8t9cjQybDT2r0")'}} />
          </div>
          <h1 className="text-4xl font-extrabold text-on-primary text-center mb-2 tracking-tight">Join the<br/>food revolution.</h1>
          <p className="text-on-primary/70 text-center max-w-sm">Create your account and start ordering in minutes.</p>
        </div>
        <div />
      </div>
      {/* Right Panel */}
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-center p-6 md:p-10 bg-surface overflow-y-auto">
        <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-md p-8 border border-outline-variant/30 flex flex-col">
          <div className="lg:hidden flex justify-center mb-8">
            <Link to="/" className="font-bold text-2xl">🍔 FoodExpress</Link>
          </div>
          <h2 className="text-2xl font-bold text-on-surface mb-1">Create Account</h2>
          <p className="text-on-surface-variant text-sm mb-6">Fill in your details to get started.</p>

          {error && <div className="bg-error-container text-on-error-container p-3 rounded-lg mb-4 text-sm">{error}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="name">Full Name</label>
              <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-secondary focus:border-secondary text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-secondary focus:border-secondary text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters" required minLength={6} className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-secondary focus:border-secondary text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-1" htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••••••" required className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:ring-2 focus:ring-secondary focus:border-secondary text-sm" />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-secondary text-on-secondary py-3 rounded-lg font-bold text-sm hover:-translate-y-0.5 transition-all disabled:opacity-50">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <p className="text-center text-sm text-on-surface-variant mt-6">
            Already have an account? <Link to="/login" className="text-secondary font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
