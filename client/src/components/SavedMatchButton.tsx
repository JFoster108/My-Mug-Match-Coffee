import React from "react";
import { saveCoffeeMatch } from "../utils/api"; // ✅ Import the correct function

interface SaveMatchButtonProps {
  coffeeId: string;
}

const SaveMatchButton: React.FC<SaveMatchButtonProps> = ({ coffeeId }) => {
  const handleSave = async () => {
    try {
      await saveCoffeeMatch(coffeeId); // ✅ Use `saveCoffeeMatch` instead
      alert("Coffee saved!");
    } catch (err: any) {
      console.error("Error saving coffee match:", err.response?.data || err.message);
    }
  };

  return <button onClick={handleSave}>Save Coffee Match</button>;
};

export default SaveMatchButton;
