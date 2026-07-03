import { Sequelize } from "sequelize";
import "dotenv/config";

// Railway MySQL plugin biasanya menyediakan MYSQL_URL / DATABASE_URL sekaligus.
// Kalau tersedia, pakai itu. Kalau tidak, susun dari variable terpisah.
const connectionString = process.env.DATABASE_URL || process.env.MYSQL_URL;

const sequelize = connectionString
  ? new Sequelize(connectionString, {
      dialect: "mysql",
      logging: false,
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: "mysql",
        logging: false,
      },
    );

export default sequelize;
