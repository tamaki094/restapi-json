const { Router } = require('express'); /* desde express requiero su metodo Router  para definir nuevas rutas para mi servidor*/
const router = Router();
const movies = require('../sample.json');
const _ = require('underscore');  

//console.log(movies);

router.get('/consultar', (req,res) => {
    res.json(movies);
});


router.post('/insertar', (req,res) => {
    const { title, director, year, rating } = req.body;

    if(title && director && year && rating)
    {
        const id = movies.length + 1;
        const newMovie =
        {
            ...req.body, id
        }; //Pasar todo el objeto req.body dentro de un objeto
        movies.push(newMovie);
        res.json(movies);
    }
    else 
    {
        res.status(500).json('Wrong Request');
        //res.json('Wrong Request');
    }
});


router.delete('/borrar/:id', (req,res) =>{
    const { id } = req.params;
     _.each(movies, (movie, i) =>
     {
        if(movie.id == id)
        {
            movies.splice(i, 1);
        }
     });

    res.json(movies);
});



router.put('/actualizar/:id', (req,res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;

    if(title && director && year && rating)
    {
        _.each(movies, (movie, i) =>
        {
            if(movie.id == id)
            {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });

        res.json(movies);
    }
    else 
    {
        res.status(500).json('Wrong Request');
    }

});

module.exports = router; 