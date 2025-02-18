import React, { useState } from "react";

const CoffeeQuiz = () => {
  const [answers, setAnswers] = useState({
    flavor: "",
    intensity: "",
    milkPreference: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quiz Answers:", answers);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#6B4426] to-[#D9B382]">
      <div className="bg-[#FFF5DC] p-10 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-display text-[#6B4426] mb-4">Find Your Perfect Coffee</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-[#6B4426] text-lg">Favorite Flavor:</label>
          <select name="flavor" onChange={handleChange} className="w-full p-3 border border-[#D9B382] rounded-md">
            <option value="">Select</option>
            <option value="chocolate">Chocolate</option>
            <option value="nutty">Nutty</option>
            <option value="fruity">Fruity</option>
          </select>

          <label className="block text-[#6B4426] text-lg">Intensity:</label>
          <select name="intensity" onChange={handleChange} className="w-full p-3 border border-[#D9B382] rounded-md">
            <option value="">Select</option>
            <option value="mild">Mild</option>
            <option value="medium">Medium</option>
            <option value="strong">Strong</option>
          </select>

          <label className="block text-[#6B4426] text-lg">Milk Preference:</label>
          <select name="milkPreference" onChange={handleChange} className="w-full p-3 border border-[#D9B382] rounded-md">
            <option value="">Select</option>
            <option value="black">Black</option>
            <option value="with milk">With Milk</option>
            <option value="oat milk">Oat Milk</option>
          </select>

          <button type="submit" className="w-full bg-[#6B4426] text-[#FFF5DC] p-3 rounded-md hover:bg-[#5A3A1E] transition">
            Find My Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default CoffeeQuiz;
