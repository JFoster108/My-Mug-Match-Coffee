import React, { useState } from "react";
import { login, setAuthToken } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      localStorage.setItem("token", response.token);
      setAuthToken(response.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-[#6B4426] to-[#D9B382]">
      <div className="bg-[#FFF5DC] p-10 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-3xl font-display text-[#6B4426] mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#D9B382] rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#D9B382] rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-[#6B4426] text-[#FFF5DC] p-3 rounded-md hover:bg-[#5A3A1E] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
