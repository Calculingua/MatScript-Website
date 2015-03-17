'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var options = {
    port: 3333,
};

var server = require('./server/server')(options);

server.listen(server.config.port, function() {
    console.log("App Server listening on port " + server.config.port);
});