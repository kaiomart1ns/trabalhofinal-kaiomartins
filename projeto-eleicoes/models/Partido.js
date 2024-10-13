const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Partido = sequelize.define('Partido', {
  nome: { type: DataTypes.STRING, allowNull: false },
  sigla: { type: DataTypes.STRING, allowNull: false },
  numeroRegistro: { type: DataTypes.INTEGER, allowNull: false, unique: true }
});

module.exports = Partido;
