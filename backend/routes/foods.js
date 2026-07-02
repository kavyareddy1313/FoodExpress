import express from 'express';
const router = express.Router();
import FoodItem from '../models/FoodItem.js';
import { protect, admin } from '../middleware/auth.js';

// GET /api/foods/restaurant/:id
router.get('/restaurant/:id', async (req, res) => {
  try {
    const foods = await FoodItem.find({ restaurantId: req.params.id, isAvailable: true });
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/foods (admin)
router.post('/', protect, admin, async (req, res) => {
  try {
    const food = await FoodItem.create(req.body);
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT /api/foods/:id (admin)
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const food = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!food) return res.status(404).json({ message: 'Food item not found' });
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /api/foods/:id (admin)
router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const food = await FoodItem.findByIdAndDelete(req.params.id);
    if (!food) return res.status(404).json({ message: 'Food item not found' });
    res.json({ message: 'Food item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
