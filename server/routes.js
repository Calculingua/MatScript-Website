'use strict';

exports = module.exports = function(app) {

    app.use(function(req, res, next) {
        res.render('pre-launch-landing');
    });
};