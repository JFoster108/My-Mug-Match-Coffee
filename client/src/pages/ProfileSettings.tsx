import { useEffect, useState } from 'react';
import { fetchQuizResults, updateUserCredentials } from '../utils/api';

const ProfileSettings = () => {
  const [quizResults, setQuizResults] = useState(null);
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
    <div className="min-h-screen bg-background p-6 flex flex-col items-center">
      <h1 className="text-3xl font-display font-bold text-primary text-center mb-6">
        Profile Settings
      </h1>
      
      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Your Quiz Results</h2>
        {quizResults ? (
          <p className="text-textDark">{quizResults}</p>
        ) : (
          <p className="text-secondary">Loading quiz results...</p>
        )}
      </section>
      
      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4">Update Login Credentials</h2>
        <form onSubmit={handleUpdateCredentials} className="space-y-4">
          <input 
            type="email" 
            name="email" 
            placeholder="New Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
          <input 
            type="password" 
            name="password" 
            placeholder="New Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
          <button 
            type="submit" 
            className="w-full p-3 bg-primary text-white font-bold rounded-md hover:bg-opacity-90"
          >
            Update
          </button>
        </form>
        {message && <p className="text-center text-secondary mt-4">{message}</p>}
      </section>
    </div>
  );
};

export default ProfileSettings;
