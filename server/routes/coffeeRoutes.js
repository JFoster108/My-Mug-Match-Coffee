import express from 'express';
import { getCoffeeRecommendations, getSavedCoffeeMatches } from '../controllers/coffeeController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Fetch coffee recommendations based on quiz results
router.get('/recommendations', authMiddleware, getCoffeeRecommendations);

// Retrieve saved coffee matches
router.get('/matches', authMiddleware, getSavedCoffeeMatches);

export default router;
