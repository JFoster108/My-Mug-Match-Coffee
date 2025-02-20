import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",  // ✅ Make sure this is explicitly defined
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // ✅ Required for Render PostgreSQL
    },
  },
  logging: false, // ✅ Hides logs unless debugging
});

sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully'))
  .catch(err => console.error('❌ Database connection error:', err));

export default sequelize;
