import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Coffee = sequelize.define('Coffee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
});

export default Coffee; 