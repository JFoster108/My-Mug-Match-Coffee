import React, { useEffect, useState } from "react";
import { fetchQuizResults, updateUserCredentials } from "../utils/api";

const ProfileSettings = () => {
  const [quizResults, setQuizResults] = useState<string | null>(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchQuizResults().then(setQuizResults);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserCredentials(formData.email, formData.password);
      setMessage("Credentials updated successfully!");
    } catch (error) {
      setMessage("Error updating credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3D2B1F] to-[#D9B382] text-textDark flex justify-center items-center p-6">
      <div className="bg-[#FFF5DC] p-8 rounded-2xl shadow-xl border-2 border-gold max-w-lg w-full text-center">
        {/* Title */}
        <h1 className="text-4xl font-display text-gold italic mb-4">
          Profile Settings
        </h1>

        {/* Quiz Results Section */}
        <section className="bg-[#E8A87C] p-6 rounded-lg shadow-lg text-center border-2 border-gold mb-6">
          <h2 className="text-2xl font-display text-gold italic mb-2">
            Your Quiz Results
          </h2>
          <hr className="border-t border-gold mb-4" />
          {quizResults ? (
            <p className="text-textDark">{quizResults}</p>
          ) : (
            <p className="text-secondary">Loading quiz results...</p>
          )}
        </section>

        {/* Update Credentials Form */}
        <form onSubmit={handleUpdateCredentials} className="space-y-4">
          <h2 className="text-2xl font-display text-gold italic mb-2">
            Update Your Credentials
          </h2>
          <hr className="border-t border-gold mb-4" />

          <input
            type="email"
            name="email"
            placeholder="New Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gold bg-[#FFF5DC] text-textDark focus:ring-2 focus:ring-gold outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gold bg-[#FFF5DC] text-textDark focus:ring-2 focus:ring-gold outline-none"
            required
          />

          <button
            type="submit"
            className="bg-[#6B4426] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#8D5A2B] transition w-full"
          >
            Update Credentials
          </button>
        </form>

        {/* Message Display */}
        {message && (
          <p className="mt-4 text-lg text-accent font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;


