'use strict';

var util = require('util'),
    commands = require('../services/commands');

function commandsController(req, res) {
    var db = req.app.get('models'),
        command = (req.swagger.params.id === undefined)
                ? commands.getRandomCommand(db)
                : commands.getCommandById(req.swagger.params.id.value, db);

    command.then(function (command) {
        if (req.headers.hasOwnProperty('x-raw-command')) {
            res.status(200).send(command.get('command'));
            return;
        }

        res.status(200).json(command);
    })
        .catch(function (value) {
            res.status(500).json({ error: value});
        });
}

module.exports = {
    getRandomCommand: commandsController,
    getCommandById: commandsController
};
