import express from 'express';
import { saveQuizResults, getQuizResults } from '../controllers/quizController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Save quiz results
router.post('/save', authMiddleware, saveQuizResults);

// Fetch past quiz results
router.get('/results', authMiddleware, getQuizResults);

export default router;
