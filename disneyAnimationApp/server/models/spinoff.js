const mongoose = require('mongoose');

const spinoffSchema = mongoose.Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    related: {type: String, required: true},
    type: {type: String, required: true}
});

const Spinoff = mongoose.model('Spinoff', spinoffSchema, 'spinoffs');
module.exports = Spinoff;