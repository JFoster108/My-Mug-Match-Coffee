import { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/coffee/matches", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        });
        const data = await response.json();
        setFavorites(data);
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6B4426] to-[#D9B382] flex justify-center items-center p-10">
      <div className="bg-[#FFF5DC] p-10 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-display text-[#6B4426] text-center mb-6">Your Favorite Coffees</h1>
        <section className="bg-white shadow-lg rounded-lg p-6">
          {favorites.length > 0 ? (
            <ul className="space-y-4">
              {favorites.map((coffee, index) => (
                <li key={index} className="p-4 border-b border-gray-300">
                  <span className="font-bold text-[#6B4426]">{coffee.name}</span> - {coffee.description}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#6B4426] text-center">No favorite coffees yet. Explore and save your favorites!</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Favorites;
