var repository = require('../../repositories/commands/commands-repository');

function CommandsService() {
}

function lookupCommands(id, db) {
  return repository.getCommandsData(id, db);
}

CommandsService.prototype = {
  lookupCommands: lookupCommands
};

var commandsService = new CommandsService();

module.exports = commandsService;
