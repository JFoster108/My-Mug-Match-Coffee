import sequelize from '../config/database.js';
import User from '../models/User.js';
import Coffee from '../models/Coffee.js';
import Preference from '../models/Preferences.js';
import Review from '../models/Reviews.js';
import Flavor from '../models/Flavors.js';

// Associations
User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

Coffee.hasMany(Review, { foreignKey: 'coffee_id' });
Review.belongsTo(Coffee, { foreignKey: 'coffee_id' });

User.hasMany(Preference, { foreignKey: 'user_id' });
Preference.belongsTo(User, { foreignKey: 'user_id' });

Coffee.hasMany(Preference, { foreignKey: 'coffee_id' });
Preference.belongsTo(Coffee, { foreignKey: 'coffee_id' });

Flavor.hasMany(Preference, { foreignKey: 'flavor_id' });
Preference.belongsTo(Flavor, { foreignKey: 'flavor_id' });

// Sync Database
const syncDB = async () => {
  try {
    await sequelize.sync({ force: false }); // Set `true` to reset tables
    console.log('Database synced successfully!');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDB();

export { User, Coffee, Preference, Review, Flavor };
