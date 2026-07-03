import express from 'express';
const router = express.Router();
import Address from '../models/Address.js';
import { protect } from '../middleware/auth.js';

// GET /api/address
router.get('/', protect, async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.json(addresses);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST /api/address
router.post('/', protect, async (req, res) => {
  try {
    const newAddress = await Address.create({
      ...req.body,
      userId: req.user._id
    });
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT /api/address/:id
router.put('/:id', protect, async (req, res) => {
  try {
    const address = await Address.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json(address);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /api/address/:id
router.delete('/:id', protect, async (req, res) => {
  try {
    const address = await Address.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!address) return res.status(404).json({ message: 'Address not found' });
    res.json({ message: 'Address removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
