import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

// Define User model
const User = sequelize.define("mug_match_users", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Insert seed data
const seedUsers = async () => {
  await sequelize.sync(); // Sync database tables
  await User.bulkCreate([
    {
      email: "testuser@example.com",
      password: "hashedpassword123", // You should hash passwords before storing!
    },
    {
      email: "john.doe@example.com",
      password: "hashedpassword456",
    },
  ]);
  console.log("✅ Users Seeded!");
};

seedUsers().then(() => process.exit());
