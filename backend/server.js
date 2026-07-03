import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import logger from './utils/logger.js';
import client from 'prom-client';

const app = express();
app.use(cors());
app.use(express.json());

// Setup Prometheus Metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

// Setup Morgan Logging with Winston
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Routes
import authRoutes from './routes/auth.js';
import restaurantRoutes from './routes/restaurants.js';
import foodRoutes from './routes/foods.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/orders.js';
import addressRoutes from './routes/address.js';

app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/address', addressRoutes);

// Health check endpoint
app.get('/api/health', async (req, res) => {
  const dbState = mongoose.connection.readyState;
  const statusMap = { 0: 'disconnected', 1: 'connected', 2: 'connecting', 3: 'disconnecting' };
  res.json({
    status: 'ok',
    message: 'FoodExpress API is running',
    database: statusMap[dbState] || 'unknown',
  });
});

// Metrics endpoint for Prometheus
app.get('/api/metrics', async (req, res) => {
  try {
    const metrics = await client.register.metrics();
    res.set('Content-Type', client.register.contentType);
    res.send(metrics);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 5000;

import connectDB from './config/db.js';

// Connect to Database
connectDB();

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
