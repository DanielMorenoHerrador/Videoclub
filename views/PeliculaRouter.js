const express = require('express');
const router = express.Router();

//Importo modelo de datos
const PeliculasController = require('../controllers/PeliculaController');

// End-points CRUD movies
router.get('/', PeliculasController.getAll);
router.get('/:id', PeliculasController.getById);
router.get('/name/:title', PeliculasController.getByTitle);
router.post('/', PeliculasController.create);
router.put('/:id', PeliculasController.update);
router.delete('/', PeliculasController.deleteAll);
router.delete('/:id', PeliculasController.delete);

module.exports = router;