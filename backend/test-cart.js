import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Cart from './models/Cart.js';

dotenv.config();

async function testCart() {
  await connectDB();
  try {
    const userId = new mongoose.Types.ObjectId();
    const foodItemId = new mongoose.Types.ObjectId();
    const restaurantId = new mongoose.Types.ObjectId();
    
    let cart = new Cart({
      userId,
      restaurantId,
      items: [{
        foodItemId,
        name: 'Test Food',
        price: 150,
        quantity: 1
      }]
    });
    
    await cart.save();
    console.log('Cart saved successfully');
  } catch (err) {
    console.error('Error saving cart:', err);
  } finally {
    process.exit(0);
  }
}

testCart();
