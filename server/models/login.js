const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../db');

const Login = sequelize.define('login', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});

module.exports = { Login };
