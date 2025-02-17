import express from 'express';
import { signup, login } from '../controllers/authController.js'; // Now actually used

const router = express.Router();

// Routes
router.post('/signup', signup);
router.post('/login', login);

export default router;
