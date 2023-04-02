const mongoose = require('mongoose');

const idSchema = mongoose.Schema({
    maxCharacterId: {type: Number, required: true},
    maxEraId: {type: Number, required: true},
    maxMovieId: {type: Number, required: true}
});

module.exports = mongoose.model('ID', idSchema);