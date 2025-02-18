import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#3E2A1C] via-[#B68D60] to-[#FFF5DC] text-center p-6">
      <h1 className="text-5xl font-cursive text-gold">Mug Match Dashboard</h1>
      <p className="italic text-lg text-secondary">Find your perfect coffee match! ☕</p>

      <nav className="mt-6 space-x-4 text-lg font-semibold text-primary">
        <Link to="/quiz" className="hover:text-accent">Coffee Quiz</Link>
        <Link to="/matches" className="hover:text-accent">Coffee Matches</Link>
        <Link to="/shops" className="hover:text-accent">Coffee Shops</Link>
        <Link to="/favorites" className="hover:text-accent">Favorites</Link>
        <Link to="/settings" className="hover:text-accent">Settings</Link>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-5xl">
        <div className="bg-secondary text-textDark p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-cursive text-gold">Recommended Coffee</h2>
          <p>Your personalized coffee recommendations based on your quiz results.</p>
        </div>
        <div className="bg-secondary text-textDark p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-cursive text-gold">Nearby Coffee Shops</h2>
          <p>Find coffee shops near you with the help of Google Places API.</p>
        </div>
        <div className="bg-secondary text-textDark p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-cursive text-gold">Daily Coffee Fact</h2>
          <p>Learn something new about coffee every day!</p>
        </div>
      </div>

      <button className="mt-8 bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-accent transition">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
