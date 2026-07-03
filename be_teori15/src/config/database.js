import { Sequelize } from "sequelize";
import "dotenv/config";

console.log("MYSQL_URL:", process.env.MYSQL_URL);

const sequelize = new Sequelize(process.env.MYSQL_URL, {
  dialect: "mysql",
  logging: false,
});

export default sequelize;