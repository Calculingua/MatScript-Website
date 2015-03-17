'use strict';

var swig = require('swig'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    path = require('path'),
    express = require('express'),
    session = require('express-session'),
    _ = require('lodash');

module.exports = exports = function(app) {

    // view engine setup
    app.set('views', this.viewPath);
    app.set('view engine', 'html');
    app.engine('html', swig.renderFile);

    // You should configure nginx to serve public files when in production
    app.use(express.static(path.join(this.appPath, 'public')));


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());

    // sessions and authentication
    // app.use(session({secret: this.secret}));
    // app.use(passport.initialize());
    // app.use(passport.session());

    // Make the path available to templates
    // app.use(function(req, res, next) {
    //     res.locals = _.extend({
    //         path: req.path,
    //         assets: this.assetmanager.assets 
    //     }, res.locals);
    //     next();
    // });

};