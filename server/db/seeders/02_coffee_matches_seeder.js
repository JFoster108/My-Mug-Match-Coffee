import sequelize from "../../config/database.js";
import { DataTypes } from "sequelize";

// Define Coffee Match Model
const CoffeeMatch = sequelize.define("coffee_matches", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  coffee_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

// Insert sample coffee matches
const seedCoffeeMatches = async () => {
  await sequelize.sync(); // Sync database tables
  await CoffeeMatch.bulkCreate([
    {
      user_id: "dd7c9f24-5429-4ead-8595-f65842c8069d", // Use actual user ID from your database
      coffee_name: "Caramel Macchiato",
      description: "A delicious blend of caramel, espresso, and milk.",
    },
    {
      user_id: "dd7c9f24-5429-4ead-8595-f65842c8069d",
      coffee_name: "Espresso",
      description: "A strong, bold coffee for true caffeine lovers.",
    },
  ]);
  console.log("✅ Coffee Matches Seeded!");
};

seedCoffeeMatches().then(() => process.exit());
