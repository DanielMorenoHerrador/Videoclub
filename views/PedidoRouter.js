const express = require('express');
const router = express.Router();

//Importar modelo de datos
const PedidoController = require('../controllers/PedidoController');

// Endpoints CRUD pedidos
router.get('/', PedidoController.getAll);
router.get('/:id', PedidoController.getById);
router.get('/title/:title', PedidoController.getByType);
router.post('/', PedidoController.create);
router.put('/:id', PedidoController.update);
router.delete('/', PedidoController.deleteAll);
router.delete('/:id', PedidoController.delete);

module.exports = router;