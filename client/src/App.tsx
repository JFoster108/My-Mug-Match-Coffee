import React, { useState } from "react";
import "./index.css";
import Login from "./pages/Login";
import SavedMatches from "./components/SavedMatches";
import { setAuthToken } from "./utils/api";



const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("token"));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="bg-blue-500 text-white p-4">
      Tailwind is working!
    </div>
  );
};

export default App;
