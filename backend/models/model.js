//====================================================================//
//                      CREACION DE UN MODELO                         //
//====================================================================//

var mongoose = require('mongoose'); //cargando el modulo de moongose
var schema = mongoose.Schema;   //esquema de modelo

var modelSchema = schema({
    name : String,
    email : String,
    subject : String,
    message : String
});

module.exports = mongoose.model('usuarios', modelSchema);