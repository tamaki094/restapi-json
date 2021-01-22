const { Router } = require('express'); /* desde express requiero su metodo Router  para definir nuevas rutas para mi servidor*/
const router = Router();


router.get('/', (req,res) => {
    /*res.send('Hello world!');*/
    res.json({"Title": "El Bromas"});
});

router.get('/test', (req,res) => {
    const data =
    {
        "name": "Edri Alan ANgulo Arteaga",
        "email": "edri.alan.94@gmail.com"
    }
    res.json(data);
});


module.exports = router;