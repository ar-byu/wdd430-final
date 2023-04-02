const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
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

module.exports = mongoose.model('Character', characterSchema);