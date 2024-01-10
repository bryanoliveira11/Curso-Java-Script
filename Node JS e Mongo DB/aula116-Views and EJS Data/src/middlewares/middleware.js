// middleware example

exports.middlewareGlobal = (req, res, next) => {
    res.locals.localVar = 'Local Var Test';
    next();
}