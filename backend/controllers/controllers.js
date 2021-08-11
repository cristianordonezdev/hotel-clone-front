//====================================================================//
//           CONTROLADORES Y RUTAS EN NODE                            //
//====================================================================//

var usuario = require ('../models/model') //SE TIENE QUE IMPORTAR MI PROYECTO

var controller = {

    home: function(req,res){
        return res.status(200).send(
            '<h1>HOLA MUNDO</h1>'
        )
    },

    saveUser: function(req,res){
        var user = new usuario();
        var params = req.body; //obtiene los datos del postman

        user.name = params.name;
        user.email= params.email;
        user.subject = params.subject;
        user.message = params.message;

        user.save((err, userStored)=>{
            if(err) return res.status(500).send({messaje:"HA HABIDO ALGUN ERROR AL GUARDAR"});
            if(!userStored) return res.status(404).send({messaje:"NO SE HA PODIDO GUARDAR EL USUARIO"})

            return res.status(200).send({userStored});

        });
    },

    getUsers: function(req,res){
        
        

    }

}

module.exports = controller;