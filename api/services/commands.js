'use strict';

var repository = require('../repositories/commands'),
    CommandsService = function () {
        return this;
    };

function getCommandById(id, db) {
    return repository.getCommandById(id, db);
}

function getRandomCommand(db) {
    return repository.getCommandCount(db)
        .then(function (number) {
            var randomNumber = Math.floor(Math.random() * number) + 1;
            return repository.getCommandById(randomNumber, db);
        });
}

function getCommandsByRisk(db, acceptableRisks) {
    return repository.getCommandsByRisk(db, acceptableRisks);
}

function getCommandsByCategory(db, acceptableCategories) {
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
