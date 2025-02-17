import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import User from './User.js';
import Coffee from './Coffee.js';
import Favorite from './Favorite.js';
import database from '../../config/database.js';

dotenv.config();

// Initialize models
const models = {
  User,
  Coffee,
  Favorite,
};

// Define associations
User.hasMany(Favorite, { foreignKey: 'userId' });
Coffee.hasMany(Favorite, { foreignKey: 'coffeeId' });
Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Coffee, { foreignKey: 'coffeeId' });

export { database, models };
