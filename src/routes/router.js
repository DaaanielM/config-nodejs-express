const router = require('express').Router();

router.use('/ejemplo', require('../routes/ejemplo.route'));

router.use('/categorias', require('../routes/categorias.route'));

// router.use('/pedidos', require('../routes/listPedidos.route'));

// parcial2

// Recuerda cambiar la base de datos en db.js :v
module.exports = router;
