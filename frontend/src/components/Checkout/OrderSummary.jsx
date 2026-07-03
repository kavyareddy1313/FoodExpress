import React from 'react';

export default function OrderSummary({ cart, selectedAddress, paymentMethod, onPlaceOrder, loading, error }) {
  const deliveryFee = 40;
  const taxes = cart.totalAmount * 0.05;
  const grandTotal = cart.totalAmount + deliveryFee + taxes;

  return (
    <div className="bg-white rounded-xl shadow-md border border-outline-variant/20 p-6 sticky top-24">
      <h3 className="text-xl font-bold text-on-surface mb-6 border-b border-outline-variant/20 pb-4">Order Summary</h3>
      
      <div className="space-y-4 mb-6">
        {cart.items?.map((item) => (
          <div key={item.foodItemId} className="flex justify-between items-start text-sm">
            <div>
              <span className="font-bold text-on-surface">{item.name}</span>
              <span className="text-on-surface-variant ml-2">x {item.quantity}</span>
            </div>
            <span className="font-bold text-on-surface">₹{item.price * item.quantity}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-outline-variant/20 pt-4 space-y-3 text-sm text-on-surface mb-6">
        <div className="flex justify-between">
          <span>Item Total</span>
          <span>₹{cart.totalAmount}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>₹{deliveryFee}</span>
        </div>
        <div className="flex justify-between">
          <span>Taxes (5%)</span>
          <span>₹{taxes.toFixed(2)}</span>
        </div>
        <div className="border-t border-outline-variant/20 pt-3 flex justify-between font-bold text-xl text-on-surface">
          <span>Grand Total</span>
          <span>₹{grandTotal.toFixed(2)}</span>
        </div>
      </div>

      {selectedAddress && (
        <div className="bg-surface-variant rounded-lg p-4 mb-6 text-sm">
          <p className="font-bold text-on-surface mb-1">Delivering to: {selectedAddress.fullName} ({selectedAddress.type})</p>
          <p className="text-on-surface-variant truncate">{selectedAddress.flatNo}, {selectedAddress.street}</p>
        </div>
      )}

      {error && <div className="bg-error-container text-on-error-container p-3 rounded-lg mb-4 text-sm font-semibold">{error}</div>}

      <button 
        onClick={onPlaceOrder}
        disabled={loading || !selectedAddress} 
        className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-bold text-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0 shadow-lg"
      >
        {loading ? 'Processing...' : `Place Order — ₹${grandTotal.toFixed(2)}`}
      </button>
    </div>
  );
}
