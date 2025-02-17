import express from 'express';
import { signup, login } from '../controllers/authController.js'; // Now actually used
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', authMiddleware, verifyToken);

export default router;
