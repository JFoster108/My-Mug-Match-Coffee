const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#D9B382] flex flex-col items-center text-white font-serif">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-bold mt-6 tracking-wide">DASHBOARD</h1>

      {/* Navigation */}
      <nav className="mt-4 flex space-x-6 text-[#D9B382] italic text-lg">
        <a href="#" className="hover:underline">Coffee Quiz</a>
        <a href="#" className="hover:underline">Coffee Matches</a>
        <a href="#" className="hover:underline">Coffee Shops</a>
        <a href="#" className="hover:underline">Favorites</a>
        <a href="#" className="hover:underline">Settings</a>
      </nav>

      {/* Main Content Container */}
      <div className="mt-8 bg-[#D9B382] p-8 w-4/5 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-xl italic text-white mb-2">Mug Match Coffee</h2>
        <p className="italic text-white">You deserve a treat! &lt;3</p>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full">
          {/* Recommended Coffee */}
          <div className="bg-[#F5A9A9] p-6 rounded-lg shadow-md text-center">
            <h3 className="italic text-lg border-b-2 border-white mb-2">Recommended Coffee</h3>
            <p className="text-black">Recommended Coffee will appear here, and will be based on quiz results.</p>
          </div>

          {/* Nearby Coffee Shops */}
          <div className="bg-[#F5A9A9] p-6 rounded-lg shadow-md text-center">
            <h3 className="italic text-lg border-b-2 border-white mb-2">Nearby Coffee Shops</h3>
            <p className="text-black">With the help of an API, some shops will appear here.</p>
          </div>

          {/* Daily Coffee Fact */}
          <div className="bg-[#F5A9A9] p-6 rounded-lg shadow-md text-center">
            <h3 className="italic text-lg border-b-2 border-white mb-2">Daily Coffee Fact</h3>
            <p className="text-black">With the help of an API, Coffee facts that cycle out daily will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
