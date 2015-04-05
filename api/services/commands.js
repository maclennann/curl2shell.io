'use strict';
var Logger = require('../../lib/logger'),
    logger = new Logger('commandsService');

var repository = require('../repositories/commands'),
    CommandsService = function () {
        return this;
    };

function getCommandById(id, db) {
    logger.info('Fetching command %s', id);
    return repository.getCommandById(id, db);
}

function getRandomCommand(db) {
    logger.info('Getting random command.');

    return repository.getCommandCount(db)
        .then(function (number) {
            var randomNumber = Math.floor(Math.random() * number) + 1;
            return getCommandById(randomNumber, db);
        });
}

function getCommandsByRisk(db, acceptableRisks) {
    logger.info('Fetching commands with risks %s', acceptableRisks.join(', '));
    return repository.getCommandsByRisk(db, acceptableRisks);
}

function getCommandsByCategory(db, acceptableCategories) {
    logger.info('Fetching commands with categories %s', acceptableCategories.join(', '));
    return repository.getCommandsByCategory(db, acceptableCategories);
}

CommandsService.prototype = {
    getCommandById: getCommandById,
    getRandomCommand: getRandomCommand,
    getCommandsByRisk: getCommandsByRisk,
    getCommandsByCategory: getCommandsByCategory
};

var commandsService = new CommandsService();

module.exports = commandsService;
