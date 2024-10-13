const Partido = require('../models/Partido');

exports.criarPartido = async (req, res) => {
  try {
    const { nome, sigla, numeroRegistro } = req.body;
    const partido = await Partido.create({ nome, sigla, numeroRegistro });
    res.json(partido);
  } catch (err) {
    res.status(400).send('Erro ao criar partido');
  }
};

exports.listarPartidos = async (req, res) => {
  const partidos = await Partido.findAll();
  res.json(partidos);
};

exports.deletarPartido = async (req, res) => {
  const { id } = req.params;
  await Partido.destroy({ where: { id } });
  res.status(200).send('Partido deletado');
};
