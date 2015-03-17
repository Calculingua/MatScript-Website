'use strict';

var _ = require('lodash');
var path = require('path');

exports = module.exports = function(options) {
    var config = {
        appPath: path.resolve(__dirname, '..', '..'),
        serverPath: path.resolve(__dirname, '..'),
        viewPath: path.resolve(__dirname, '..', 'views'),
        secret: "big damn heros",
    };

    config = _.assign(config, options);
    config.express = require('./express').bind(config);

    return config;
};