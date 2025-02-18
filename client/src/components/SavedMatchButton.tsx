import React from "react";
import { saveCoffeeMatch } from "../utils/api";

interface SaveMatchButtonProps {
  coffeeId: string;
}

const SaveMatchButton: React.FC<SaveMatchButtonProps> = ({ coffeeId }) => {
  const handleSave = async () => {
    try {
      await saveCoffeeMatch(coffeeId);
      alert("Coffee saved!");
    } catch (err: any) {
      console.error("Error saving coffee match:", err.response?.data || err.message);
    }
  };

  return <button onClick={handleSave}>Save Coffee Match</button>;
};

export default SaveMatchButton;
