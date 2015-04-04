'use strict';

var a127 = require('a127-magic');
var express = require('express');
var app = express();
var models = require('./data/models');

module.exports = app; // for testing

// initialize a127 framework
a127.init(function(config) {

    // include a127 middleware
    app.use(a127.middleware(config));

    // adding ui options
    var swaggerTools = config['a127.magic'].swaggerTools;
    app.use(swaggerTools.swaggerUi({
        swaggerUi: config.ui.swaggerUi,
        apiDocs: config.ui.apiDocs
    }));

    app.set('models', models);

    app.use('/', express.static(__dirname+"/public"));

    // error handler to emit errors as a json string
    app.use(function(err, req, res, next) {
        if (err && typeof err === 'object') {
            Object.defineProperty(err, 'message', { enumerable: true }); // include message property in response
            res.end(JSON.stringify(err));
        }
        next(err);
    });
    var port = process.env.PORT || 8081;
    // begin listening for client requests
    app.listen(port);

    console.log('running: view swagger docs at http://localhost:'+port+'/v1/ui');
});
