const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000); /*En caso de que exista un puerto definido en mi sistema que lo tome si no que tome el 3000*/ 
app.set('json spaces', 1);

//middlewares: Empezar a ejecutar a morgan. Procesa datos antes de que el servidor los reciba
app.use(morgan('dev')); /* app.use(morgan('combined')); */
app.use(express.urlencoded({extended:false}));/* Soportando los datos q vamos a recibir */
app.use(express.json());/* Le permite recibir JSON y entenderlos */

//routes
app.use(require('./routes/index'));
/*app.get('/', (req,res) => {
    res.json({"Title": "El Bromas"});
});*/


//starting the server: Aplicacion escucha en el puerto 3000, y cuando inicies has a continuacion.
app.listen(app.get('port'), () =>
{
    console.log(`Server on port ${3000}`);
});