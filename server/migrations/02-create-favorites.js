import { DataTypes } from 'sequelize';

export default {
  async up(queryInterface) {
    await queryInterface.createTable('Favorites', { // ✅ Ensure it's capitalized
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Users', // ✅ Ensure this matches your Users table
          key: 'user_id',
        },
        onDelete: 'CASCADE',
      },
      coffeeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Coffees', // ✅ Ensure this matches your Coffees table
          key: 'coffee_id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Favorites'); // ✅ Ensure it's capitalized
  }
};
