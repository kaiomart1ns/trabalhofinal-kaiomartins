const express = require('express');
const router = express.Router();
const partidoController = require('../controllers/partidoController');

router.post('/', partidoController.criarPartido);
router.get('/', partidoController.listarPartidos);
router.delete('/:id', partidoController.deletarPartido);

module.exports = router;
