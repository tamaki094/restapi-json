const { Router } = require('express'); /* desde express requiero su metodo Router  para definir nuevas rutas para mi servidor*/
const router = Router();
const usuarios = require('../usuarios.json');
const _ = require('underscore');  


router.get('/consultar', (req,res) => {
    res.json(usuarios);
});

router.get('/auth/login/:user', (req,res) => {
    console.log(req);

    const { user } = req.params;
    var encontrado = null;

    _.each(usuarios, (usr_arr, i) =>
    {
        _.each(usr_arr, (usr, j) =>
        {
            if(usr.usuario.user == user)
            {
                encontrado = usr;
            }            
            return false;          
        });
       
       
    });

    if(encontrado === null)
    {
        encontrado = {"sucess": false};
    }

    res.json(encontrado);
});

router.post('/autenticacion/login', function(request, response){
    var param = request.body;   
    var encontrado = null;

    _.each(usuarios, (usr_arr, i) =>
    {
        _.each(usr_arr, (usr, j) =>
        {
            console.log(usr.usuario.user + " es igual a " + param.user + "  ? ");
            console.log(usr.usuario.password + " es igual a " + param.pass + "  ? ");
            if(usr.usuario.user == param.user && usr.usuario.password == param.pass)
            {
                encontrado = usr;
            }            
            return false;
           
        });           
    });

    if(encontrado === null)
    {
        encontrado = {"sucess": false};
    }

    response.json(encontrado);    
});



module.exports = router; 

