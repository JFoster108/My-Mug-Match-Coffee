import express from 'express';
import { signup, login, verifyToken } from '../controllers/authController.js'; // ✅ Make sure verifyToken is imported
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify', authMiddleware, verifyToken); // ✅ This should work now

export default router;

