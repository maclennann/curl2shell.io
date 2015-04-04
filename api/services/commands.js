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

CommandsService.prototype = {
    getCommandById: getCommandById,
    getRandomCommand: getRandomCommand
};

var commandsService = new CommandsService();

module.exports = commandsService;
