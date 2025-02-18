import React, { useState } from "react";
import "./index.css";



const App: React.FC = () => {
  const [_isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("token"));

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
