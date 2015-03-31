'use strict';

var util = require('util');
var commands = require('../services/commands')

module.exports = {
    getRandomCommand: hello,
    getCommandById: hello
};

function hello(req, res) {
    var db = req.app.get('models');
    var command = (req.swagger.params.id === undefined)
                ? commands.getRandomCommand(db)
                : commands.getCommandById(req.swagger.params.id.value, db);

    command.then(function(command) {
        if('x-raw-command' in req.headers) {
            res.status(200).send(command.get('command'));
            return;
        }

        res.status(200).json(command);
    })
    .catch(function(value) {
        res.status(500).json({ error: value});
    });
}
