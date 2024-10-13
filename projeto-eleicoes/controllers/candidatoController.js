const Candidato = require('../models/Candidato');
const Partido = require('../models/Partido');

exports.criarCandidato = async (req, res) => {
  try {
    const { nome, partidoId, numeroCandidato } = req.body;
    const candidato = await Candidato.create({ nome, partidoId, numeroCandidato });
    res.json(candidato);
  } catch (err) {
    res.status(400).send('Erro ao criar candidato');
  }
};

exports.listarCandidatos = async (req, res) => {
  const candidatos = await Candidato.findAll({ include: Partido });
  res.json(candidatos);
};
