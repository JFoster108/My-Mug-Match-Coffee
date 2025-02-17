import express from 'express';
import { getCoffeeRecommendations, getSavedCoffeeMatches, saveCoffeeMatch } from '../controllers/coffeeController.js'; // ✅ Import saveCoffeeMatch
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/recommendations', authMiddleware, getCoffeeRecommendations);
router.get('/matches', authMiddleware, getSavedCoffeeMatches);
router.post('/matches', authMiddleware, saveCoffeeMatch); // ✅ Now it should work!

export default router;
