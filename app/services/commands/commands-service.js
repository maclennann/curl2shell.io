var repository = require('../../repositories/commands/commands-repository');

function CommandsService() {
}

function lookupCommands(id) {
  return repository.getCommandsData(id);
}

CommandsService.prototype = {
  lookupCommands: lookupCommands
};

var commandsService = new CommandsService();

module.exports = commandsService;
