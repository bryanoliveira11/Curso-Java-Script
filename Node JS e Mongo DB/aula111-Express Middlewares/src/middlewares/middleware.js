// middleware example

exports.middlewareGlobal = (req, res, next) => {
    if (req.body.user) {
        console.log(`User POST = ${req.body.user}`);
    }
    next();
}