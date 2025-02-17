import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Coffee from './Coffee.js';

const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
  },
  coffee_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Coffee,
      key: 'coffee_id',
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 5 },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, { timestamps: true });

export default Review;
