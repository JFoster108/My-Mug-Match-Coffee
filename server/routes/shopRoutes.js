import express from 'express';
import { getNearbyCoffeeShops } from '../controllers/shopController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Fetch nearby coffee shops
router.get('/nearby', authMiddleware, getNearbyCoffeeShops);

export default router;
