module.exports = function log(req, res, next) {
    console.log('logging');
    next();
};