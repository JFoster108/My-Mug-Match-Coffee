import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3D2B1F] to-[#D9B382] text-textDark p-6 relative flex flex-col items-center">
      {/* Logout Button in the Top Left Corner */}
      <button className="absolute top-6 left-6 bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-800 transition">
        Logout
      </button>
      
      {/* Title */}
      <h1 className="text-5xl font-display text-center text-gold mb-4">Mug Match Coffee</h1>
      <p className="text-xl text-center italic text-gold mb-6">You deserve a treat! &lt;3</p>
      
      {/* Navigation Bar */}
      <nav className="bg-[#FFF5DC] py-3 px-8 shadow-md rounded-lg w-full max-w-4xl mx-auto flex justify-around text-lg font-semibold text-[#6B4426] border-2 border-gold">
        <Link to="/quiz" className="hover:text-accent">Coffee Quiz</Link>
        <Link to="/matches" className="hover:text-accent">Coffee Matches</Link>
        <Link to="/shops" className="hover:text-accent">Coffee Shops</Link>
        <Link to="/favorites" className="hover:text-accent">Favorites</Link>
        <Link to="/settings" className="hover:text-accent">Settings</Link>
      </nav>

      {/* Main Dashboard Content */}
      <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center">
        <section className="bg-[#E8A87C] p-6 rounded-lg shadow-lg text-center w-80 border-2 border-gold">
          <h2 className="text-2xl font-display text-gold italic mb-2">Recommended Coffee</h2>
          <hr className="border-t border-gold mb-4" />
          <p>Recommended Coffee will appear here, and will be based on quiz results.</p>
        </section>
        
        <section className="bg-[#E8A87C] p-6 rounded-lg shadow-lg text-center w-80 border-2 border-gold">
          <h2 className="text-2xl font-display text-gold italic mb-2">Nearby Coffee Shops</h2>
          <hr className="border-t border-gold mb-4" />
          <p>With the help of an API, some shops will appear here.</p>
        </section>
        
        <section className="bg-[#E8A87C] p-6 rounded-lg shadow-lg text-center w-80 border-2 border-gold">
          <h2 className="text-2xl font-display text-gold italic mb-2">Daily Coffee Fact</h2>
          <hr className="border-t border-gold mb-4" />
          <p>With the help of an API, Coffee facts that cycle out daily will appear here.</p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
