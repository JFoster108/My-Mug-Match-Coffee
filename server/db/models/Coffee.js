import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

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
  }
});

export default Coffee;