import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", verified); // ✅ Log token data
    req.user = verified;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token." });
  }
};


export default authMiddleware;
