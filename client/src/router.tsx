import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CoffeeQuiz from "./pages/CoffeeQuiz";
import CoffeeMatches from "./pages/CoffeeMatches";
import CoffeeShops from "./pages/CoffeeShops";
import Favorites from "./pages/Favorites";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login"; // Ensure Login is in "pages" instead of "components"
import { useState } from "react";

const AppRouter = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login onLogin={handleLogin} />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/quiz" element={<CoffeeQuiz />} />
                <Route path="/matches" element={<CoffeeMatches />} />
                <Route path="/shops" element={<CoffeeShops />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/settings" element={<ProfileSettings />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
