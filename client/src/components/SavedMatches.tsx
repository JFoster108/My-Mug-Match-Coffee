import React, { useEffect, useState } from "react";
import { getSavedMatches, Coffee } from "../utils/api";

const SavedMatches: React.FC = () => {
  const [matches, setSavedMatches] = useState<Coffee[]>([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await getSavedMatches().then(setSavedMatches);
      } catch (err: any) {
        console.error("Error fetching matches:", err.response?.data || err.message);
      }
    };
    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Saved Coffee Matches</h2>
      {matches.length === 0 ? (
        <p>No saved matches yet.</p>
      ) : (
        <ul>
          {matches.map((coffee) => (
            <li key={coffee.coffee_id}>
              <strong>{coffee.name}</strong>: {coffee.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedMatches;
