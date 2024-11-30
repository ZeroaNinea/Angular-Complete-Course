const { Sequelize } = require("sequelize");

require("dotenv").config();

const { DB_STRING, DB_STRING_PROD, HOST, NODE_ENV } = process.env;

const DB_PORT = parseInt(process.env.DB_PORT) || 3306;

const connectionString = NODE_ENV === "production" ? DB_STRING_PROD : DB_STRING;

const sequelize = new Sequelize(connectionString, {
  host: HOST,
  port: DB_PORT,
  logging: false,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Database connected on port ${DB_PORT}.`);
  })
  .catch((error) => {
    console.error(`Unable to connect to the database:`, error);
  });

module.exports = sequelize;
