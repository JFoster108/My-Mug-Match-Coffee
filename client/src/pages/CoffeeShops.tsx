import { useEffect, useState } from "react";
import { fetchNearbyCoffeeShops } from "../utils/api";

// Define CoffeeShop interface
interface CoffeeShop {
  name: string;
  address: string;
  rating: number;
}

const CoffeeShops = () => {
  const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          console.log("User Location:", latitude, longitude);

          try {
            const shops = await fetchNearbyCoffeeShops(latitude, longitude);
            setCoffeeShops(shops);
          } catch (err) {
            console.error("Error fetching nearby coffee shops:", err);
            setError("Failed to fetch coffee shops.");
          } finally {
            setLoading(false);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Location access denied. Enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-display font-bold text-primary text-center mb-6">
        Nearby Coffee Shops
      </h1>

      {loading ? (
        <p className="text-secondary text-center">Loading nearby coffee shops...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : coffeeShops.length > 0 ? (
        <ul className="space-y-4">
          {coffeeShops.map((shop, index) => (
            <li key={index} className="p-4 border-b border-gray-300 flex flex-col">
              <span className="text-lg font-bold text-secondary">{shop.name}</span>
              <span className="text-textDark">{shop.address}</span>
              <span className="text-sm text-gray-500">Rating: {shop.rating} ⭐</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-secondary text-center">No coffee shops found nearby.</p>
      )}
    </div>
  );
};

export default CoffeeShops;
