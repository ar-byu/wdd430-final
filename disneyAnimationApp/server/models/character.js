const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    role: {type: String, required: true},
    movie: {type: String, required: true},
    image: {type: String},
    description: {type: String, required: true},
    trivia: {type: String, required: true}
});

let Character = mongoose.model('Character', characterSchema, 'characters');
module.exports = Character;