// middleware example

exports.flashMessages = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

// CSRF checking middlewares
exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

// check if user is logged in
exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Faça Login para acessar essa página.');
        req.session.save(function () {
            res.redirect('/login/index');
        });
        return;
    }
    next();
};