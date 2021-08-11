//====================================================================//
//           CONFIGURACION DE MIS RUTAS EN BACKEND                    //
//====================================================================//

var express = require('express');
var usuarioController = require('../controllers/controllers');

var router = express.Router();

router.get('/home', usuarioController.home);
router.post('/save-user', usuarioController.saveUser);

module.exports = router;