import React from 'react';

export default function PaymentOptions({ paymentMethod, setPaymentMethod }) {
  const options = [
    { id: 'online', name: 'Credit / Debit Card', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
    { id: 'upi', name: 'UPI', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
    { id: 'netbanking', name: 'Net Banking', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    { id: 'cod', name: 'Cash on Delivery', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-on-surface">Payment Method</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <label 
            key={option.id}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
              paymentMethod === option.id 
                ? 'border-secondary bg-secondary/5' 
                : 'border-outline-variant hover:border-secondary/50'
            }`}
          >
            <input 
              type="radio" 
              name="payment" 
              value={option.id} 
              checked={paymentMethod === option.id} 
              onChange={() => setPaymentMethod(option.id)} 
              className="w-5 h-5 text-secondary focus:ring-secondary" 
            />
            <div className={`p-2 rounded-full ${paymentMethod === option.id ? 'bg-secondary text-white' : 'bg-surface-variant text-on-surface-variant'}`}>
              {option.icon}
            </div>
            <span className="font-bold text-on-surface">{option.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
