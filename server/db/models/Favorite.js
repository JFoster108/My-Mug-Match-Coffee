import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import User from './User.js';
import Coffee from './Coffee.js';

const Favorite = sequelize.define('Favorite', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  coffeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Coffee,
      key: 'id'
    }
  }
});

// Define associations
Favorite.belongsTo(User, { foreignKey: 'userId' });
Favorite.belongsTo(Coffee, { foreignKey: 'coffeeId' });

export default Favorite;
