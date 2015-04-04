'use strict';

var a127 = require('a127-magic'),
    express = require('express'),
    app = express(),
    models = require('./data/models');

module.exports = app;

// initialize a127 framework
a127.init(function (config) {
    app.use(a127.middleware(config));

    // adding ui options
    var swaggerTools = config['a127.magic'].swaggerTools,
        port = process.env.PORT || 8081;

    app.use(swaggerTools.swaggerUi({
        swaggerUi: config.ui.swaggerUi,
        apiDocs: config.ui.apiDocs
    }));

    app.set('models', models);

    /*jslint nomen: true*/
    app.use('/', express.static(__dirname + "/public"));
    /*jslint nomen: false*/

    // error handler to emit errors as a json string
    /*jslint unparam: true*/
    app.use(function (err, req, res, next) {
        if (err && typeof err === 'object') {
            Object.defineProperty(err, 'message', { enumerable: true }); // include message property in response
            res.end(JSON.stringify(err));
        }
        next(err);
    });
    /*jslint unparam: false*/

    // begin listening for client requests
    app.listen(port);

    console.log('running: view swagger docs at http://localhost:' + port + '/v1/ui');
});
