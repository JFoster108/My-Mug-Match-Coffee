import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import User from './User.js';
import Coffee from './Coffee.js';

const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // ✅ Ensure a UUID is generated
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
    },
    onDelete: 'CASCADE',
  },
  coffeeId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Coffee,
      key: 'coffee_id',
    },
    onDelete: 'CASCADE',
  },
}, {
  timestamps: true,
});

export default Favorite;
