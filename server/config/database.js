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
    logging: true,
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.log('Database connection error:', err));

export default sequelize;
