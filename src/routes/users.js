const { Router, response } = require('express');

const router = Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) =>
{
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); //el await es para decirle a la pp que va tomar tiempo la peticion
    const usuarios = await response.json();
    console.log(usuarios);
    res.json(usuarios);
});


module.exports = router;