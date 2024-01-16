const mongoose = require('mongoose');
const validator = require('validator');

// creating a mongoose schema
const ContatoSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    createAt: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contact = null;
    }

    async searchById(id) {
        if (typeof id !== 'string') return;
        const contact = await ContatoModel.findById(id);
        return contact;
    }

    async register() {
        this.validate();

        if (this.errors.length > 0) return;

        await this.contactExists();

        if (this.errors.length > 0) return;

        // creating contact
        this.contact = await ContatoModel.create(this.body);
    }

    async edit(id) {
        if (typeof id !== 'string') return;
        this.validate();

        const email_in_use = await ContatoModel.findOne(
            { email: this.body.email, _id: { $ne: id }}
        );

        if (email_in_use) this.errors.push('E-mail em uso.');

        if (this.errors.length > 0) return;

        // update contact
        this.contact = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
    }

    validate() {
        this.cleanUp();

        // validating email
        if (this.body.email && !validator.isEmail(this.body.email)) {
            this.errors.push('E-mail Inválido !');
        }

        // name required
        if (!this.body.firstname) {
            this.errors.push('Digite o Nome do Contato.');
        }

        // contact must have a phone or a email
        if (!this.body.email && !this.body.phone) {
            this.errors.push('Forneça o E-mail ou o Telefone do Contato.');
        }

    }

    async contactExists() {
        this.contact = await ContatoModel.findOne({ email: this.body.email });
        if (this.contact) this.errors.push('Contato já Cadastrado !');
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            firstname: this.body.firstname,
            lastname: this.body.lastname,
            email: this.body.email,
            phone: this.body.phone
        };
    }
}

module.exports = Contato;