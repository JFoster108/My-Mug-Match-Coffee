import { validate as isUUID } from 'uuid';
import { Op } from 'sequelize';
import Favorite from '../db/models/Favorite.js';
import Coffee from '../db/models/Coffee.js';
import User from '../db/models/User.js';

// Fetch coffee recommendations based on quiz results
export const getCoffeeRecommendations = async (req, res) => {
  try {
    console.log("Fetching coffee recommendations for user:", req.user);

    const coffeeRecommendations = await Coffee.findAll();
    res.json(coffeeRecommendations);
  } catch (err) {
    console.error("Error in getCoffeeRecommendations:", err);
    res.status(500).json({ message: 'Error fetching coffee recommendations', error: err.message });
  }
};

export const saveCoffeeMatch = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // ✅ Log request body
    console.log("Decoded User:", req.user); // ✅ Log user data

    const { coffee_id } = req.body;
    const userId = req.user.id; // ✅ Ensure userId is extracted

    if (!coffee_id) {
      return res.status(400).json({ message: "Coffee ID is required" });
    }

    // ✅ Validate UUID format
    if (!isUUID(coffee_id)) {
      return res.status(400).json({ message: "Invalid UUID format for coffee_id" });
    }

    // ✅ Check if coffee exists
    const coffeeExists = await Coffee.findOne({ where: { coffee_id } });
    if (!coffeeExists) {
      return res.status(404).json({ message: "Coffee not found" });
    }

    // ✅ Save match (Ensure userId is passed)
    const favorite = await Favorite.create({ userId, coffeeId: coffee_id });

    res.status(201).json({ message: "Coffee match saved successfully", favorite });
  } catch (err) {
    console.error("Error saving coffee match:", err);
    res.status(500).json({ message: "Error saving coffee match", error: err.message });
  }
};

// Retrieve saved coffee matches for a user
export const getSavedCoffeeMatches = async (req, res) => {
  try {
    console.log("Fetching saved coffee matches for user:", req.user);

    const userId = req.user.id;
    if (!userId) return res.status(400).json({ message: "User ID missing in token" });

    const savedMatches = await Favorite.findAll({
      where: { userId },
      include: [{ model: Coffee, as: 'coffee' }], // ✅ Ensure association is used
    });

    console.log("Saved Matches:", savedMatches); // ✅ Log the matches

    res.json(savedMatches.map(match => match.coffee));
  } catch (err) {
    console.error("Error fetching saved coffee matches:", err);
    res.status(500).json({ message: "Error fetching saved coffee matches", error: err.message });
  }
};
