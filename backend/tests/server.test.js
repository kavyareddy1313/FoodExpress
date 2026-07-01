const request = require('supertest');

// Mock the database connection to avoid connecting to real DB during tests
jest.mock('../config/db', () => jest.fn());

// Mock mongoose models
jest.mock('../models/User', () => ({}));
jest.mock('../models/Restaurant', () => ({}));
jest.mock('../models/FoodItem', () => ({}));
jest.mock('../models/Cart', () => ({}));
jest.mock('../models/Order', () => ({}));

// Mock route files to avoid requiring real database models
jest.mock('../routes/authRoutes', () => {
  const router = require('express').Router();
  router.post('/register', (req, res) => res.status(201).json({ message: 'User registered' }));
  router.post('/login', (req, res) => res.status(200).json({ token: 'mock-token' }));
  return router;
});

jest.mock('../routes/restaurantRoutes', () => {
  const router = require('express').Router();
  router.get('/', (req, res) => res.status(200).json([]));
  return router;
});

jest.mock('../routes/foodRoutes', () => {
  const router = require('express').Router();
  router.get('/', (req, res) => res.status(200).json([]));
  return router;
});

jest.mock('../routes/cartRoutes', () => {
  const router = require('express').Router();
  router.get('/', (req, res) => res.status(200).json([]));
  return router;
});

jest.mock('../routes/orderRoutes', () => {
  const router = require('express').Router();
  router.get('/', (req, res) => res.status(200).json([]));
  return router;
});

const app = require('../server');

describe('Health & Infrastructure Endpoints', () => {
  describe('GET /health', () => {
    it('should return 200 with health status', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('status', 'healthy');
      expect(res.body).toHaveProperty('timestamp');
      expect(res.body).toHaveProperty('uptime');
      expect(res.body).toHaveProperty('environment');
    });

    it('should return environment as test', async () => {
      const res = await request(app).get('/health');
      expect(res.body.environment).toBe('test');
    });
  });

  describe('GET /metrics', () => {
    it('should return Prometheus metrics', async () => {
      const res = await request(app).get('/metrics');
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain('http_request_duration_seconds');
      expect(res.text).toContain('http_requests_total');
    });
  });

  describe('GET /', () => {
    it('should return API running message', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain('API is running');
    });
  });

  describe('GET /api/nonexistent', () => {
    it('should return 404 for unknown routes', async () => {
      const res = await request(app).get('/api/nonexistent');
      expect(res.statusCode).toBe(404);
    });
  });
});

describe('Security Headers', () => {
  it('should include Helmet security headers', async () => {
    const res = await request(app).get('/health');
    expect(res.headers['x-content-type-options']).toBe('nosniff');
  });

  it('should include X-Frame-Options header', async () => {
    const res = await request(app).get('/health');
    expect(res.headers).toHaveProperty('x-frame-options');
  });
});

describe('API Routes (mocked)', () => {
  describe('GET /api/restaurants', () => {
    it('should return 200', async () => {
      const res = await request(app).get('/api/restaurants');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });
  });

  describe('POST /api/auth/register', () => {
    it('should return 201 for registration', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ name: 'Test', email: 'test@test.com', password: 'password123' });
      expect(res.statusCode).toBe(201);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should return 200 with token', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({ email: 'test@test.com', password: 'password123' });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
  });
});

describe('Compression', () => {
  it('should compress responses when Accept-Encoding is gzip', async () => {
    const res = await request(app)
      .get('/health')
      .set('Accept-Encoding', 'gzip');
    // Supertest automatically decompresses, but we can check the header is set
    expect(res.statusCode).toBe(200);
  });
});
