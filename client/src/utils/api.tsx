// client/src/utils/api.ts
import axios from "axios";

const API = axios.create({
  baseURL: "/api", // Adjust this if your backend is deployed separately
});

// Fetch coffee recommendations based on quiz results
export const fetchCoffeeRecommendations = async () => {
  const response = await API.get("/coffee/recommendations");
  return response.data;
};

// Fetch saved coffee matches
export const fetchSavedCoffeeMatches = async () => {
  const response = await API.get("/coffee/matches");
  return response.data;
};

// Fetch nearby coffee shops (Uses Google Places API)
export const fetchNearbyCoffeeShops = async () => {
  const response = await API.get("/shops/nearby");
  return response.data;
};

// Fetch the daily coffee fact (Uses API Ninjas Fact API)
export const fetchDailyCoffeeFact = async () => {
  const response = await API.get("/coffee/fact");
  return response.data;
};

// Update user credentials
export const updateUserCredentials = async (email: string, password: string) => {
  const response = await API.put("/auth/update", { email, password });
  return response.data;
};
