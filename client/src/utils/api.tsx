import axios from "axios";

// Define API response types
export interface User {
  id: string;
  email: string;
  name?: string;
  username?: string;
}

export interface Coffee {
  coffee_id: string;
  name: string;
  description: string;
  flavor_profile: string;
  createdAt: string;
  updatedAt: string;
}

export interface Favorite {
  id: string;
  userId: string;
  coffeeId: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// Create Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change this when deploying
});

// Function to set authentication token in headers
export const setAuthToken = (token: string | null): void => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};

// Authentication APIs
export const signup = (userData: { name: string; username: string; email: string; password: string }) =>
  API.post<AuthResponse>("/auth/signup", userData);

export const login = (userData: { email: string; password: string }) =>
  API.post<AuthResponse>("/auth/login", userData);

export const verifyToken = () => API.get<{ message: string; user: User }>("/auth/verify");

// Coffee APIs
export const getCoffeeRecommendations = () => API.get<Coffee[]>("/coffee/recommendations");

export const getSavedMatches = () => API.get<Coffee[]>("/coffee/matches");

export const saveCoffeeMatch = (coffeeId: string) => API.post<Favorite>("/coffee/matches", { coffee_id: coffeeId });

// Quiz APIs
export const saveQuizResults = (preferences: Record<string, string>) =>
  API.post<{ message: string }>("/quiz/save", { preferences });

export const getQuizResults = () => API.get<{ quizResults: Record<string, string> }>("/quiz/results");

// Coffee Shops API (Google Places)
export const getNearbyShops = (latitude: number, longitude: number) =>
  API.get<{ name: string; address: string; rating: number }[]>(`/shops/nearby?latitude=${latitude}&longitude=${longitude}`);

export default API;
