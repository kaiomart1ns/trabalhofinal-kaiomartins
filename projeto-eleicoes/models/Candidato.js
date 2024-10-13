const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Partido = require('./Partido');

const Candidato = sequelize.define('Candidato', {
  nome: { type: DataTypes.STRING, allowNull: false },
  numeroCandidato: { type: DataTypes.INTEGER, allowNull: false, unique: true }
});

Candidato.belongsTo(Partido, { foreignKey: 'partidoId' });

module.exports = Candidato;
