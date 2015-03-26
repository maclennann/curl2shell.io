function CommandsRepository() {
}

function getCommandsData(id, db) {
  if(id === undefined){
    return db.Command.count()
      .then(function(number){
        var randomNumber = Math.floor(Math.random() * (number - 0)) + 1;
        return getOneCommand(randomNumber, db);
      });
  }

  return getOneCommand(id, db);

}

function getOneCommand(id, db){
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
