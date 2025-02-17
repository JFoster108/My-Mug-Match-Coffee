import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Coffee from './Coffee.js';
import Flavor from './Flavor.js';

const Preference = sequelize.define('Preference', {
  preference_id: {
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
  flavor_id: {
    type: DataTypes.UUID,
    allowNull: true,
    references: {
      model: Flavor,
      key: 'flavor_id',
    },
  },
  temp_preference: {
    type: DataTypes.ENUM('hot', 'cold'),
    allowNull: false,
  },
});

export default Preference;
