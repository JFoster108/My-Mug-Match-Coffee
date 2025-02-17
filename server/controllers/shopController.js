import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

// Fetch nearby coffee shops using Google Places API
export const getNearbyCoffeeShops = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude) {
      return res.status(400).json({ message: "Latitude and longitude are required" });
    }

    const googlePlacesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=cafe&key=${process.env.GOOGLE_PLACES_API_KEY}`;

    console.log("Fetching coffee shops from:", googlePlacesUrl); // ✅ Log the URL

    const response = await axios.get(googlePlacesUrl);
    console.log("Google API Response:", response.data); // ✅ Log the response

    const coffeeShops = response.data.results.map(shop => ({
      name: shop.name,
      address: shop.vicinity,
      rating: shop.rating || "N/A",
    }));

    res.json(coffeeShops);
  } catch (err) {
    console.error("Error fetching coffee shops:", err);
    res.status(500).json({ message: "Error fetching coffee shops", error: err.message });
  }
};
