import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  console.log("Authorization Header:", authHeader); // ✅ Log received token

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1]; // ✅ Extract token from "Bearer <token>"

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // ✅ Attach user data to request
    console.log("Verified User:", req.user); // ✅ Log verified user
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};

export default authMiddleware;
