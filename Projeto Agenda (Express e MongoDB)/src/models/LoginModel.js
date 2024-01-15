const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// creating a mongoose schema
const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.validate();

        // checking if there's any errors
        if (this.errors.length > 0) return;

        // validating if user already exists
        await this.userExists()

        if (this.errors.length > 0) return;

        // generating a hash os the password
        const salt = bcrypt.genSaltSync();
        this.body.password = bcrypt.hashSync(this.body.password, salt);

        // creating user
        this.user = await LoginModel.create(this.body);
    }

    async login() {
        this.validate();
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email });

        if (!this.user) {
            this.errors.push('Usuário não Existe.');
            return;
        }

        if (!bcrypt.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha Inválida !');
            this.user = null;
            return;
        }
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Usuário já Cadastrado !');
    }

    validate() {
        this.cleanUp();

        // validating email
        if (!validator.isEmail(this.body.email)) {
            this.errors.push('E-mail Inválido !');
        }

        // validating password
        if (this.body.password.length < 3 || this.body.password.length >= 50) {
            this.errors.push('Sua Senha deve ter entre 3 e 50 caracteres !');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;