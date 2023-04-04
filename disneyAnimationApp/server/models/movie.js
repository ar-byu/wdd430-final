const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    promoImage: {type: String},
    year: {type: String, required: true},
    era: {type: String, required: true},
    length: {type: String, required: true},
    trailerLink: {type: String},
    trivia: {type: String, required: true},
    category: {type: String, required: true}
});

let Movie = mongoose.model('Movie', movieSchema, 'movies');
module.exports = Movie;