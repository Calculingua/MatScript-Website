'use strict';
var path = require('path');
var _ = require('lodash');
var express = require('express');

exports = module.exports = function(options) {
    options = options || {};
    var settings = {
        serverPath: __dirname,
        appPath: path.resolve(__dirname, ".."),
    };
    settings = _.assign(settings, options);

    var app = express();
    app.config = require('./config')(settings);
    app.config.express(app);
    // config.passport(app); EVENTUALLY


    require('./routes')(app);

    return app;
};

