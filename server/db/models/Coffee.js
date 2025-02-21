import { DataTypes } from 'sequelize';
import sequelize from '../../config/connection.js';

const Coffee = sequelize.define('Coffee', {
  coffee_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  flavor_profile: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  createdAt: {  // ✅ Explicitly define createdAt
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {  // ✅ Explicitly define updatedAt
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, { timestamps: true });

export default Coffee;
