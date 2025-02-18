import { useEffect, useState } from 'react';
import { fetchQuizResults, updateUserCredentials } from '../utils/api';

const ProfileSettings = () => {
  const [quizResults, setQuizResults] = useState<string | null>(null);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

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
      setMessage('Credentials updated successfully!');
    } catch (error) {
      setMessage('Error updating credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6B4426] to-[#D9B382] flex justify-center items-center p-10">
      <div className="bg-[#FFF5DC] p-10 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-display text-[#6B4426] text-center mb-6">Profile Settings</h1>
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
          <h2 className="text-2xl font-bold text-[#6B4426] mb-4">Your Quiz Results</h2>
          {quizResults ? (
            <p className="text-[#3D2B1F]">{quizResults}</p>
          ) : (
            <p className="text-[#6B4426]">Loading quiz results...</p>
          )}
        </section>
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-[#6B4426] mb-4">Update Credentials</h2>
          {message && <p className="text-[#6B4426] mb-4">{message}</p>}
          <form onSubmit={handleUpdateCredentials} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="New Email"
              onChange={handleChange}
              className="w-full p-3 border border-[#D9B382] rounded-md"
            />
            <input
              type="password"
              name="password"
              placeholder="New Password"
              onChange={handleChange}
              className="w-full p-3 border border-[#D9B382] rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-[#6B4426] text-[#FFF5DC] p-3 rounded-md hover:bg-[#5A3A1E] transition"
            >
              Update
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ProfileSettings;

