const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('eleicoes_db', 'root', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => console.log('Conectado ao MySQL com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MySQL:', err));

module.exports = sequelize;
