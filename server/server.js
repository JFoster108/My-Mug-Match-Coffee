import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import coffeeRoutes from './routes/coffeeRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import database from './config/connection.js';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use(express.static('../client/dist'));
app.use('/api/auth', authRoutes);
app.use('/api/coffee', coffeeRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/shops', shopRoutes);

const PORT = process.env.PORT || 5000;

// Database connection
database.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
