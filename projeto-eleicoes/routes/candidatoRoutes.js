const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');

router.post('/', candidatoController.criarCandidato);
router.get('/', candidatoController.listarCandidatos);

module.exports = router;
