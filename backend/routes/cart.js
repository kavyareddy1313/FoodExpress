import express from 'express';
const router = express.Router();
import Cart from '../models/Cart.js';
import { protect } from '../middleware/auth.js';

// GET /api/cart
router.get('/', protect, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      cart = { items: [], totalAmount: 0 };
    }
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/cart — Add item to cart
router.post('/', protect, async (req, res) => {
  try {
    const { foodItemId, name, price, quantity, image, restaurantName } = req.body;

    let cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) {
      cart = new Cart({ userId: req.user._id, items: [] });
    }

    // Check if item already exists in cart
    const existingIndex = cart.items.findIndex(
      (item) => item.foodItemId.toString() === foodItemId
    );

    if (existingIndex > -1) {
      cart.items[existingIndex].quantity += quantity || 1;
    } else {
      cart.items.push({ foodItemId, name, price, quantity: quantity || 1, image, restaurantName });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT /api/cart — Update item quantity
router.put('/', protect, async (req, res) => {
  try {
    const { foodItemId, quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const item = cart.items.find((i) => i.foodItemId.toString() === foodItemId);
    if (!item) return res.status(404).json({ message: 'Item not in cart' });

    item.quantity = quantity;
    if (item.quantity <= 0) {
      cart.items = cart.items.filter((i) => i.foodItemId.toString() !== foodItemId);
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /api/cart/:itemId — Remove item
router.delete('/:itemId', protect, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter((i) => i.foodItemId.toString() !== req.params.itemId);
    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /api/cart — Clear entire cart
router.delete('/', protect, async (req, res) => {
  try {
    await Cart.findOneAndDelete({ userId: req.user._id });
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
