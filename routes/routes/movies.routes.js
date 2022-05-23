// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require (" ../models/Celebrity.model");
const movieModel = require("../../models/movie.model");
const Movie = require("../models/movie.model");

// all your routes here
 
// forms to create movie
router.get ("movie.create", (req, res, next) => {
    Celebrity.find ()
    .then ((allCast) => {

    res.render ("movies/new-movie",  {allCast});
})
.catch ((err) => console.log (err));
});
//data post to make movie
router.post ("/movies/create", (req, res, next) => {
    const{ title, genre, plot, cast } = req.body;
Movie.create({ title, genre, plot, cast })
.then (( newMovie) => {
    res.redirect ("/movies")
})
.catch ((err) => {
    console.log (err);
    res.render ("movies/newMovie");
})
})
router.get ("/movies", (req, res, next) => {
    Movie.find ()
    .then((allMovies) => {
        res.render ("movies/movies.hbs", {allMovies});
    })
        .catch ((err) => console.log (err));
    })
    router.get ("movies/:id", (req, res, next) => {
        Movie.findById (req.params.id)
        .populate ("cast")
        .then ((movieDetails) => {

        })
    })
module.exports = router;