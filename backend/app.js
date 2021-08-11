//====================================================================//
//           CONFIGURACION DE EXPRESS PARA CREAR UN SERVIDOR          //
//====================================================================//

var express = require("express");
var bodyParser = require('body-parser');

var app=express();

//============ ARCHIVO DE RUTAS ================================

var usuarioRoutes = require('./routes/routes');

//============ MIDDLEWARES =====================================

app.use(bodyParser.urlencoded({extended:false})); //CONVIERTE LO QUE LLEGUE POR POST CONVERTIRLO A UN OBJETO JSON
app.use(bodyParser.json()); //CUALQUIER PETICION LO CONVIERTE A JSON

//============ CORS ============================================

// CONFIGURAR CABECERAS Y CORSS === CUANDO HACEMOS PETICIONES AJAX CON JQUERY O ANGULAR A UN BACKEND O UNA API REST 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//============ RUTAS ===========================================

app.use('/',usuarioRoutes);

//============ EXPORTACION =====================================

module.exports = app;