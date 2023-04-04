var express = require('express');
var router = express.Router();
const Movie = require ('../models/movie');

router.get('/', (req, res, next) => {
    Movie.find({})
    .then(data => {
        res.status(200).send(data);
    })
    .catch(error => {
        res.status(500).json({
            message: "An error occurred while fetching movies: ",
            error: error
        });
    });
});

router.post('/', (req, res, next) => {
    const movie = new Movie({
        id: req.body.id,
        title: req.body.title,
        promoImage: req.body.promoImage,
        year: req.body.year,
        era: req.body.era,
        length: req.body.length,
        trailerLink: req.body.trailerLink,
        trivia: req.body.trivia,
        category: req.body.category
    });
    movie
        .save()
        .then(createdMovie => {
            res.status(201).json({
                message: "Movie added successfully",
                movie: createdMovie
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "An error occurred while adding the movie: ",
                error: error
            });
        });
});

router.put('/:id', (req, res, next) => {
    Movie  
        .findOne({id: req.params.id})
        .then(movie => {
            movie.title = req.body.title,
            movie.promoImage = req.body.promoImage,
            movie.year = req.body.year,
            movie.era = req.body.era,
            movie.length = req.body.length,
            movie.trailerLink = req.body.trailerLink,
            movie.trivia = req.body.trivia,
            movie.category = req.body.category

            Movie
                .updateOne({id: req.params.id}, movie)
                .then(result => {
                    res.status(204).json({
                        message: "Character updated successfully"
                    })
                })
                .catch(error => {
                    res.status(500).json({
                        message: "An error occurred while updating the movie: ",
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Character not found"
            });
        });
});

router.delete('/:id', (req, res, next) => {
    Movie
        .findOne({id: req.params.id})
        .then(movie => {
            Movie
                .deleteOne({id: req.params.id})
                .then(result => {
                    res.status(204).json({
                        message: "Movie successfully deleted"
                    });
                })
                .catch(error => {
                    res.status(500).json({
                        message: "An error occurred while deleting the movie: ",
                        error: error
                    });
                });
        })
        .catch(error => {
            res.status(500).json({
                message: "Movie not found"
            });
        });
});

module.exports = router;
