'use strict';

var util = require('util'),
    commands = require('../services/commands'),
    Logger = require('../../lib/logger'),
    logger = new Logger('comandsController');

// If the user requested raw commands instead of JSON,
// extract and join on newlines for execution
function getRawCommands(model) {
    model = model.map(function (e) { return e.command; });
    return model.join('\n');
}

function commandsController(req, res) {
    logger.info('Processing commandsController request: %s', req.url);

    var db = req.app.get('models'),
        command = (req.swagger.params.id === undefined)
                ? commands.getRandomCommand(db)
                : commands.getCommandById(req.swagger.params.id.value, db);

    command.then(function (command) {
        logger.info('Got back command %s with line %s', command.get('id'), command.get('command'));

        if (req.headers.hasOwnProperty('x-raw-command')) {
            logger.info('Returning raw command.');
            res.status(200).send(command.get('command'));
            return;
        }

        res.status(200).json(command);
    }).catch(function (value) {
        logger.error('Error: %s', value);
        res.status(500).json({ error: value });
    });
}

function commandsByRisk(req, res) {
    var db = req.app.get('models');

    commands.getCommandsByRisk(db, [req.swagger.params.risk.value])
        .then(function (models) {
            if (req.swagger.params.count !== undefined && req.swagger.params.count.value > 0 && req.swagger.params.count.value < models.length) {
                models = models.slice(0, req.swagger.params.count.value);
            }

            if (req.headers.hasOwnProperty('x-raw-command')) {
                res.status(200).send(getRawCommands(models));
                return;
            }

            res.status(200).json(models);
        }).catch(function (value) {
            logger.error('Error: %s', value);
            res.status(500).json({ error: value });
        });
}

function commandsByCategory(req, res) {
    var db = req.app.get('models');

    commands.getCommandsByCategory(db, [req.swagger.params.category.value])
        .then(function (models) {
            if (req.swagger.params.count !== undefined && req.swagger.params.count.value > 0 && req.swagger.params.count.value < models.length) {
                models = models.slice(0, req.swagger.params.count.value);
                return;
            }

            if (req.headers.hasOwnProperty('x-raw-command')) {
                res.status(200).send(getRawCommands(models));
                return;
            }

            res.status(200).json(models);
        }).catch(function (value) {
            logger.error('Error: %s', value);
            res.status(500).json({ error: value });
        });
}

module.exports = {
    getRandomCommand: commandsController,
    getCommandById: commandsController,
    getCommandsByRisk: commandsByRisk,
    getCommandsByCategory: commandsByCategory
};
