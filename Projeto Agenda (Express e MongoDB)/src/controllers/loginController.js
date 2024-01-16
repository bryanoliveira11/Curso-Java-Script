const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('index');
            });
            return;
        }

        req.flash('success', 'Usuário Criado com Sucesso. Faça seu Login.');
        req.session.save(function () {
            return res.redirect('index');
        });
    }
    catch (err) {
        return res.render('404');
    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('index');
            });
            return;
        }

        req.flash('success', `Login Realizado com E-mail : ${req.body.email}`);
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('/');
        });
    }
    catch (err) {
        return res.render('404');
    }
}

exports.logout = (req, res) => {
    req.session.destroy();
    return res.redirect('/');
}