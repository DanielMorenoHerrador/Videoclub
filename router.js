const router = require('express').Router();

// Middlewares
const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const PeliculasRouter = require('./views/PeliculaRouter');
const PedidosRouter = require('./views/PedidoRouter');
const UserRouter = require('./views/UserRouter');

//Rutas
router.use('/api', UserRouter); //Login and register routes
router.use('/peliculas',auth, PeliculasRouter); //add auth
router.use('/pedidos',auth, PedidosRouter);

module.exports = router;