import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import toast from 'react-hot-toast';

export default function AddressSelector({ selectedAddress, onSelect }) {
  const [addresses, setAddresses] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '', phone: '', flatNo: '', street: '', 
    landmark: '', area: '', city: '', state: '', pincode: '', type: 'Home'
  });

  const fetchAddresses = async () => {
    try {
      const { data } = await api.get('/address');
      setAddresses(data);
      if (data.length > 0 && !selectedAddress) {
        onSelect(data[0]);
      }
    } catch (error) {
      toast.error('Failed to load addresses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAddresses(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/address', formData);
      setAddresses([data, ...addresses]);
      onSelect(data);
      setIsAdding(false);
      toast.success('Address added successfully');
      setFormData({
        fullName: '', phone: '', flatNo: '', street: '', 
        landmark: '', area: '', city: '', state: '', pincode: '', type: 'Home'
      });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add address');
    }
  };

  const deleteAddress = async (id, e) => {
    e.stopPropagation();
    try {
      await api.delete(`/address/${id}`);
      const newAddresses = addresses.filter(a => a._id !== id);
      setAddresses(newAddresses);
      if (selectedAddress?._id === id) {
        onSelect(newAddresses[0] || null);
      }
      toast.success('Address deleted');
    } catch (err) {
      toast.error('Failed to delete address');
    }
  };

  if (loading) return <div className="animate-pulse h-32 bg-surface-variant rounded-xl"></div>;

  return (
    <div className="flex flex-col gap-4">
      {addresses.map(addr => (
        <div 
          key={addr._id} 
          onClick={() => onSelect(addr)}
          className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex justify-between items-start ${
            selectedAddress?._id === addr._id ? 'border-secondary bg-secondary/5' : 'border-outline-variant hover:border-secondary/50'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedAddress?._id === addr._id ? 'border-secondary' : 'border-outline-variant'
            }`}>
              {selectedAddress?._id === addr._id && <div className="w-2.5 h-2.5 bg-secondary rounded-full" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-on-surface">{addr.fullName}</span>
                <span className="bg-surface-variant text-on-surface-variant text-xs px-2 py-0.5 rounded-md font-semibold">{addr.type}</span>
              </div>
              <p className="text-sm text-on-surface-variant mt-1">
                {addr.flatNo}, {addr.street}, {addr.area} <br/>
                {addr.city}, {addr.state} - {addr.pincode}
              </p>
              <p className="text-sm font-semibold text-on-surface mt-1">Phone: {addr.phone}</p>
            </div>
          </div>
          <button onClick={(e) => deleteAddress(addr._id, e)} className="text-error hover:bg-error-container p-2 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
      ))}

      {!isAdding ? (
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center justify-center gap-2 p-4 border-2 border-dashed border-outline-variant rounded-xl text-secondary font-bold hover:bg-secondary/5 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> Add New Address
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-surface-variant p-6 rounded-xl flex flex-col gap-4">
          <h4 className="font-bold text-on-surface mb-2">Add New Address</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Full Name" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            <input placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            <input placeholder="Flat / House No." required value={formData.flatNo} onChange={e => setFormData({...formData, flatNo: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            <input placeholder="Street / Road Name" required value={formData.street} onChange={e => setFormData({...formData, street: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            <input placeholder="Landmark (Optional)" value={formData.landmark} onChange={e => setFormData({...formData, landmark: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            <input placeholder="Area / Locality" required value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            <input placeholder="City" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="State" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
              <input placeholder="PIN Code" required value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary" />
            </div>
            <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="px-4 py-2 rounded-lg border border-outline focus:ring-2 focus:ring-secondary">
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-2">
            <button type="button" onClick={() => setIsAdding(false)} className="px-6 py-2 rounded-lg font-bold text-on-surface-variant hover:bg-surface-variant transition-colors">Cancel</button>
            <button type="submit" className="px-6 py-2 rounded-lg font-bold bg-secondary text-on-secondary shadow-md hover:-translate-y-0.5 transition-all">Save Address</button>
          </div>
        </form>
      )}
    </div>
  );
}
