import { useEffect, useState } from "react";
import { fetchNearbyCoffeeShops } from "../utils/api";

interface CoffeeShop {
    name: string;
    address: string;
    rating: number;
}

const CoffeeShops = () => {
    const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);

    useEffect(() => {
        fetchNearbyCoffeeShops().then(setCoffeeShops).catch(console.error);
    }, []);

    return (
        <div className="min-h-screen bg-background p-6">
            <h1 className="text-3xl font-display font-bold text-primary text-center mb-6">
                Nearby Coffee Shops
            </h1>
            <section className="bg-white shadow-lg rounded-lg p-6">
                {coffeeShops.length > 0 ? (
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
                    <p className="text-secondary text-center">Loading nearby coffee shops...</p>
                )}
            </section>
        </div>
    );
};

export default CoffeeShops;
