const mongoose = require('mongoose');

const eraSchema = mongoose.Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    start_year: {type: String, required: true},
    end_year: {type: String, required: true},
    description: {type: String, required: true},
    moviesInEra: {type: String, required: true}
});

const Era = mongoose.model('Era', eraSchema);
module.exports = Era;