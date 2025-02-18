import { useState } from "react";

const CoffeeQuiz = () => {
  const [preferences, setPreferences] = useState({
    flavor: "",
    temperature: "",
    milk: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/quiz/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ preferences }),
      });

      const data = await response.json();
      console.log(data);
      alert("Preferences saved successfully!");
    } catch (error) {
      console.error("Error saving preferences:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-textDark">
      <h1 className="text-3xl font-bold mb-6">☕ Coffee Quiz</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <label className="block mb-4">
          <span className="text-lg">Flavor Profile:</span>
          <select
            name="flavor"
            value={preferences.flavor}
            onChange={handleChange}
            className="mt-2 w-full border rounded p-2"
          >
            <option value="">Select one</option>
            <option value="bold">Bold</option>
            <option value="sweet">Sweet</option>
            <option value="nutty">Nutty</option>
            <option value="fruity">Fruity</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-lg">Temperature:</span>
          <select
            name="temperature"
            value={preferences.temperature}
            onChange={handleChange}
            className="mt-2 w-full border rounded p-2"
          >
            <option value="">Select one</option>
            <option value="hot">Hot</option>
            <option value="iced">Iced</option>
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-lg">Milk Preference:</span>
          <select
            name="milk"
            value={preferences.milk}
            onChange={handleChange}
            className="mt-2 w-full border rounded p-2"
          >
            <option value="">Select one</option>
            <option value="none">No Milk</option>
            <option value="dairy">Dairy</option>
            <option value="almond">Almond Milk</option>
            <option value="oat">Oat Milk</option>
          </select>
        </label>

        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition">
          Submit Preferences
        </button>
      </form>
    </div>
  );
};

export default CoffeeQuiz;
