import Coffee from '../db/models/Coffee.js';
import Favorite from '../db/models/Favorite.js';
import User from '../db/models/User.js';

// Fetch coffee recommendations based on quiz results
export const getCoffeeRecommendations = async (req, res) => {
  try {
    const coffeeRecommendations = await Coffee.findAll();
    res.json(coffeeRecommendations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching coffee recommendations' });
  }
};

// Retrieve saved coffee matches for a user
export const getSavedCoffeeMatches = async (req, res) => {
  try {
    const userId = req.user.id;
    const savedMatches = await Favorite.findAll({ where: { userId }, include: Coffee });
    res.json(savedMatches.map(match => match.Coffee));
  } catch (err) {
    res.status(500).json({ message: 'Error fetching saved coffee matches' });
  }
};
