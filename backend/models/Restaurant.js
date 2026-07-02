import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  image: { type: String },
  description: { type: String },
  address: { type: String, required: true },
  rating: { type: Number, default: 0 },
  deliveryTime: { type: String },
  cuisine: { type: String },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Restaurant', restaurantSchema);
