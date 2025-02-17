import { DataTypes } from 'sequelize';

export default {
  async up(queryInterface) {
    await queryInterface.createTable('Preferences', {
      preference_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
      coffee_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Coffees',
          key: 'coffee_id',
        },
        onDelete: 'CASCADE',
      },
      flavor_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: 'Flavors',
          key: 'flavor_id',
        },
        onDelete: 'CASCADE',
      },
      temp_preference: {
        type: DataTypes.ENUM('hot', 'cold'),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Preferences');
  }
};
