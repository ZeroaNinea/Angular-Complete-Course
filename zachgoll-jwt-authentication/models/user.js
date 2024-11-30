const { Model, NUMBER, STRING } = require("sequelize");

const sequelize = require("../config/database");

class User extends Model {}

User.init(
  {
    id: {
      type: NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 50],
      },
    },
    hash: {
      type: STRING,
      allowNull: false,
    },
    salt: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "User" }
);

module.exports = User;
