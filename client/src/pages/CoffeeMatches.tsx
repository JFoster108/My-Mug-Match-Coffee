// client/src/pages/CoffeeMatches.tsx
import { useEffect, useState } from 'react';
import { fetchSavedCoffeeMatches } from '../utils/api';

const CoffeeMatches = () => {
  const [coffeeMatches, setCoffeeMatches] = useState([]);

  useEffect(() => {
    fetchSavedCoffeeMatches().then(setCoffeeMatches);
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-display font-bold text-primary text-center mb-6">
        Your Coffee Matches
      </h1>
      <section className="bg-white shadow-lg rounded-lg p-6">
        {coffeeMatches.length > 0 ? (
          <ul className="space-y-2">
            {coffeeMatches.map((coffee, index) => (
              <li key={index} className="p-3 border-b border-gray-300">
                <span className="font-bold">{coffee.name}</span> - {coffee.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-secondary text-center">No saved coffee matches yet. Take the quiz to find your match!</p>
        )}
      </section>
    </div>
  );
};

export default CoffeeMatches;
