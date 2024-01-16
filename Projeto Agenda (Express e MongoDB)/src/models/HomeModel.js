const mongoose = require('mongoose');
const ContactModel = require('./ContatoModel');

// creating a mongoose schema
const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home{
    async getAllContacts() {
        const contacts = await ContactModel.ContactModel.find().sort({createdAt: -1});
        return contacts;
    }
}

module.exports = Home;