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

export const updateUserCredentials = async (email: string, password: string) => {
  try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/user/update", {
          method: "PUT",
          headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
          throw new Error("Failed to update credentials");
      }

      return response.json();
  } catch (error) {
      console.error("Error updating credentials:", error);
      throw error;
  }
};

// Coffee APIs
export const getCoffeeRecommendations = () => API.get<Coffee[]>("/coffee/recommendations");

export const getSavedMatches = () => API.get<Coffee[]>("/coffee/matches");

export const saveCoffeeMatch = (coffeeId: string) => API.post<Favorite>("/coffee/matches", { coffee_id: coffeeId });

export const fetchSavedCoffeeMatches = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
      throw new Error("User is not authenticated");
  }

  const response = await fetch("/api/coffee/matches", {
      method: "GET",
      headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
      },
  });

  if (!response.ok) {
      throw new Error("Failed to fetch saved coffee matches");
  }

  return response.json();
};

// Quiz APIs
export const saveQuizResults = (preferences: Record<string, string>) =>
  API.post<{ message: string }>("/quiz/save", { preferences });

export const getQuizResults = () => API.get<{ quizResults: Record<string, string> }>("/quiz/results");

export const fetchQuizResults = async () => {
  try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/quiz/results", {
          method: "GET",
          headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json"
          },
      });
      if (!response.ok) {
          throw new Error("Failed to fetch quiz results");
      }
      return response.json();
  } catch (error) {
      console.error("Error fetching quiz results:", error);
      return null;
  }
};


// Coffee Shops API (Google Places)
export const fetchNearbyCoffeeShops = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
      throw new Error("User is not authenticated");
  }

  const response = await fetch("/api/shops/nearby", {
      method: "GET",
      headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
      },
  });

  if (!response.ok) {
      throw new Error("Failed to fetch nearby coffee shops");
  }

  return response.json();
};


export default API;
