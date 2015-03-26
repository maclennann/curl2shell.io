function CommandsRepository() {
}

function getCommandCount(db, predicate) {
    return db.Command.count(predicate)
    .catch(function(err){
        console.log(err);
    });
}

function getCommandById(id, db) {
    return db.Command.findOne({
        where: {id: id}
    }).then(function(model){
        return model.get('command');
    }).catch(function(err){
        return err;
    });
}

CommandsRepository.prototype = {
    getCommandCount: getCommandCount,
    getCommandById: getCommandById
};

var commandsRepository = new CommandsRepository();

module.exports = commandsRepository;
