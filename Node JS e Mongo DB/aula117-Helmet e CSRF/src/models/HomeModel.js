const mongoose = require('mongoose');

// creating a mongoose schema
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;