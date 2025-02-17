import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Set to true for debugging SQL queries
  }
);

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL successfully'))
  .catch(err => console.error('Error connecting to PostgreSQL:', err));

export default sequelize;
