var commands = require('../../../services/commands/commands-service.js');

function CommandsController() {
}

function get(req, res, next) {
  var db = req.app.get('models');

  commands.lookupCommands(req.params['commandid'], db)
    .then(function (value) {
      if('x-raw-command' in req.headers){
        res.status(200).send(value);
        return;
      }
      res.status(200).json({ command: value});
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
