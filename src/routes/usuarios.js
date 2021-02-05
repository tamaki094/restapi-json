const { Router } = require('express'); /* desde express requiero su metodo Router  para definir nuevas rutas para mi servidor*/
const router = Router();
const usuarios = require('../usuarios.json');
const _ = require('underscore');  


router.get('/consultar', (req,res) => {
    res.json(usuarios);
});



module.exports = router; 

