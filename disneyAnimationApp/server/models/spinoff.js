const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    related: {type: String, required: true},
    type: {type: String, required: true}
});

module.exports = mongoose.model('Character', characterSchema);