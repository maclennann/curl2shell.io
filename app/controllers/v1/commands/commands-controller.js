var commands = require('../../../services/commands/commands-service.js');

function CommandsController() {
}

function get(req, res, next) {
  var db = req.app.get('models');
  var command = (req.params['commandid'] === undefined)
              ? commands.getRandomCommand(db)
              : commands.getCommandById(req.params['commandid'], db);

  command.then(function(command) {
    if('x-raw-command' in req.headers) {
      res.status(200).send(command);
      return;
    }

    res.status(200).json({ command: command});
  })
  .catch(function(value) {
    res.status(500).json({ error: value});
  });
}

CommandsController.prototype = {
  get: get
};

var commandsController = new CommandsController();

module.exports = commandsController;
