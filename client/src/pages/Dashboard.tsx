import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ Remove token from storage
    navigate("/"); // ✅ Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3D2B1F] to-[#D9B382] text-white flex flex-col items-center p-6">
      {/* Header */}
      <h1 className="text-5xl font-bold mt-6 tracking-wide">Mug Match Dashboard</h1>
      <p className="italic text-lg text-gray-300 mt-2">Find your perfect coffee match! ☕</p>

      {/* Navigation Bar */}
      <nav className="mt-6 flex space-x-6 text-lg">
        <Link to="/quiz" className="hover:underline">Coffee Quiz</Link>
        <Link to="/matches" className="hover:underline">Coffee Matches</Link>
        <Link to="/shops" className="hover:underline">Coffee Shops</Link>
        <Link to="/favorites" className="hover:underline">Favorites</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
      </nav>

      {/* Content Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Recommended Coffee */}
        <div className="bg-[#F5A9A9] p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold border-b-2 border-white pb-2">Recommended Coffee</h3>
          <p className="text-black mt-3">Your personalized coffee recommendations based on your quiz results.</p>
        </div>

        {/* Nearby Coffee Shops */}
        <div className="bg-[#F5A9A9] p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold border-b-2 border-white pb-2">Nearby Coffee Shops</h3>
          <p className="text-black mt-3">Find coffee shops near you with the help of Google Places API.</p>
        </div>

        {/* Daily Coffee Fact */}
        <div className="bg-[#F5A9A9] p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold border-b-2 border-white pb-2">Daily Coffee Fact</h3>
          <p className="text-black mt-3">Learn something new about coffee every day!</p>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-8 bg-red-600 hover:bg-red-800 text-white py-2 px-6 rounded-lg transition shadow-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
