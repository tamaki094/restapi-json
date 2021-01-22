const { Router } = require('express'); /* desde express requiero su metodo Router  para definir nuevas rutas para mi servidor*/
const router = Router();
const movies = require('../sample.json');
//console.log(movies);

router.get('/', (req,res) => {
    res.json(movies);
});


router.post('/peticion', (req,res) => {
    const { title, director, year, rating } = req.body;

    if(title && director && year && rating)
    {
        res.json('Guardado');
    }
    else 
    {
        res.json('Wrong Request');
    }
    res.send('recibido');
});
module.exports = router;