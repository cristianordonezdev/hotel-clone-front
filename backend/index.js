//===========CODIGO PARA CONECTARSE CON LA BASE DE DATOS=======================

var mongoose = require('mongoose');
var app = require('./app');
var port =3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/usuarioHotel')
        .then(()=>{
            console.log('Conexión a la base de datos establecida');
            app.listen(port,()=> console.log("Servidor funcionando en la URL localhost:3000"));
        })
        .catch(err=>console.log(err));
