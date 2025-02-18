import axios from "axios";

// Load environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
console.log("API Base URL:", API_BASE_URL);
console.log("Google Places API Key:", GOOGLE_PLACES_API_KEY);

// Define API response types
export interface User {
  id: string;
  email: string;
  name?: string;
  username?: string;
}

export interface CoffeeShop {
  name: string;
  address: string;
  rating: number;
  place_id: string;
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

// Create an Axios instance
const api = axios.create({
  baseURL: "/api", // Uses Vite proxy instead of hardcoding localhost
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Function to Log In
export const login = async (
  formData: { email: string; password: string }
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/login", formData);
  return response.data;
};

// 🔹 Set auth token in Axios for future requests
export const setAuthToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  }
};

export const saveCoffeeMatch = async (coffeeId: string): Promise<void> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No authentication token found");

  await axios.post("/api/coffee/matches", { coffee_id: coffeeId }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};


export const fetchSavedCoffeeMatches = async (): Promise<Coffee[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No authentication token found");

  const response = await axios.get<Coffee[]>("/api/coffee/matches", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};


// 🔹 Fetch saved coffee matches
export const getSavedMatches = async (): Promise<Coffee[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No authentication token found");

  const response = await axios.get<Coffee[]>(`${GOOGLE_PLACES_API_KEY}/coffee/matches`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return response.data;
};

export const fetchNearbyCoffeeShops = async (latitude: number, longitude: number): Promise<CoffeeShop[]> => {
  const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
    params: {
      location: `${latitude},${longitude}`,
      radius: 5000,
      type: "cafe",
      key: GOOGLE_PLACES_API_KEY,
    },
  });

  // Transform Google API response to match the CoffeeShop interface
  return response.data.results.map((shop: any) => ({
    name: shop.name,
    address: shop.vicinity, // Google API uses "vicinity" for address
    rating: shop.rating || "No rating",
    place_id: shop.place_id,
  }));
};


// 🔹 Fetch quiz results
export const fetchQuizResults = async (): Promise<string> => {
  const response = await api.get<string>("/quiz/results");
  return response.data;
};

// 🔹 Update user credentials
export const updateUserCredentials = async (
  email: string,
  password: string
): Promise<void> => {
  await api.put("/auth/update", { email, password });
};

export default api;
