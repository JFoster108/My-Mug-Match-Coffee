import User from '../db/models/mug_match_users.js';

// Save quiz results for the user
export const saveQuizResults = async (req, res) => {
  try {
    const userId = req.user.id;
    const { preferences } = req.body;
    await User.update({ quizResults: preferences }, { where: { id: userId } });
    res.json({ message: 'Quiz results saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving quiz results' });
  }
};

// Retrieve past quiz results for the user
export const getQuizResults = async (req, res) => {
  try {
    console.log("Fetching quiz results for user:", req.user);

    const userId = req.user.id;
    if (!userId) return res.status(400).json({ message: "User ID missing in token" });

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ quizResults: user.quizResults });
  } catch (err) {
    console.error("Error fetching quiz results:", err);
    res.status(500).json({ message: "Error fetching quiz results", error: err.message });
  }
};

