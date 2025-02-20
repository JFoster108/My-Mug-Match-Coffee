import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    define: {
      timestamps: true
    },
    migrationStoragePath: "db/migrations",  // ✅ Ensure migrations are in the right place
    models: "db/models" // ✅ Tell Sequelize where your models are
  }
};
