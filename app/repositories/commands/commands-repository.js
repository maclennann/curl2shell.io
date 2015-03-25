var db = require('../../../data/models');

function CommandsRepository() {
}

function getCommandsData(id) {
  if(id === undefined){
    return db.Command.count()
      .then(function(number){
        var randomNumber = Math.floor(Math.random() * (number - 0)) + 1;
        return getOneCommand(randomNumber);
      });
  }

  return getOneCommand(id);

}

function getOneCommand(id){
  return db.Command.findOne({
    where: {id: id}
  }).then(function(model){
    return model.get('command');
  }).catch(function(err){
    return err;
  });
}

CommandsRepository.prototype = {
    getCommandsData: getCommandsData
};

var commandsRepository = new CommandsRepository();

module.exports = commandsRepository;
