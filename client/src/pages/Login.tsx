import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import { login, setAuthToken } from "../utils/api";



const Login: React.FC = () => { 
  const navigate = useNavigate(); // ✅ Enables redirection after login
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(formData);

      if (response.token) {  // ✅ Access token directly from the response
        localStorage.setItem("token", response.token);
        setAuthToken(response.token);
        navigate("/dashboard");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-textDark">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <label className="block mb-4">
          <span className="text-lg">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full border rounded p-2"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-lg">Password:</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-2 w-full border rounded p-2"
            required
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
