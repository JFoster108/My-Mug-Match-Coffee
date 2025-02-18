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
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-textDark">
      <h1 className="text-3xl font-bold mb-6">❤️ Favorite Coffees</h1>
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        {favorites.length === 0 ? (
          <p>No favorites saved yet.</p>
        ) : (
          <ul className="space-y-4">
            {favorites.map((coffee, index) => (
              <li key={index} className="p-4 border rounded-lg shadow-md">
                <h2 className="text-xl font-bold">{coffee.name}</h2>
                <p>{coffee.description}</p>
                <p className="text-sm text-gray-500">Flavor: {coffee.flavor_profile}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Favorites;
