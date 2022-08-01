// Las rutas sirven para poder trabajar con las peticiones que se hacen al servidor

const express = require('express');
const router = express.Router();

const controller = require('../controllers/ejemplo.controller');

// router.get('/listar', controller.listar);
// router.post('/crear', controller.crear);
// router.put('/actualizar/:id', controller.actualizar);
// router.delete('/eliminar/:id', controller.eliminar);

module.exports = router;
