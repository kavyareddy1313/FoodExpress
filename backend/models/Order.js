import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    foodItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' },
    name: String,
    price: Number,
    quantity: Number,
    image: String,
  }],
  totalAmount: { type: Number, required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  deliveryAddress: {
    fullName: String,
    phone: String,
    flatNo: String,
    street: String,
    landmark: String,
    area: String,
    city: String,
    state: String,
    pincode: String,
    type: String
  },
  paymentMethod: { type: String, enum: ['cod', 'online'], default: 'cod' },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled'],
    default: 'pending',
  },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
