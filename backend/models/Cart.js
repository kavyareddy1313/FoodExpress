import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1, min: 1 },
  image: { type: String, default: '' },
  restaurantName: { type: String, default: '' },
});

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  items: [cartItemSchema],
  totalAmount: { type: Number, default: 0 },
}, { timestamps: true });

// Recalculate total before saving
cartSchema.pre('save', function () {
  this.totalAmount = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

export default mongoose.model('Cart', cartSchema);
