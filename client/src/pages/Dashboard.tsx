import { useEffect, useState } from 'react';
import { fetchCoffeeRecommendations, fetchNearbyCoffeeShops, fetchDailyCoffeeFact } from '../utils/api';

const Dashboard = () => {
  const [coffeeRecommendations, setCoffeeRecommendations] = useState([]);
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [dailyFact, setDailyFact] = useState('');

  useEffect(() => {
    fetchCoffeeRecommendations().then(setCoffeeRecommendations);
    fetchNearbyCoffeeShops().then(setCoffeeShops);
    fetchDailyCoffeeFact().then(setDailyFact);
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-display font-bold text-primary text-center mb-6">
        Welcome to Your Dashboard
      </h1>
      
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Your Coffee Matches</h2>
        {coffeeRecommendations.length > 0 ? (
          <ul className="space-y-2">
            {coffeeRecommendations.map((coffee, index) => (
              <li key={index} className="p-3 border-b border-gray-300">
                <span className="font-bold">{coffee.name}</span> - {coffee.description}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-secondary">No matches found. Take the quiz!</p>
        )}
      </section>
      
      <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Nearby Coffee Shops</h2>
        {coffeeShops.length > 0 ? (
          <ul className="space-y-2">
            {coffeeShops.map((shop, index) => (
              <li key={index} className="p-3 border-b border-gray-300">
                <span className="font-bold">{shop.name}</span><br/>
                {shop.address}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-secondary">Loading nearby coffee shops...</p>
        )}
      </section>
      
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Daily Coffee Fact</h2>
        <p className="text-secondary">{dailyFact}</p>
      </section>
    </div>
  );
};

export default Dashboard;
