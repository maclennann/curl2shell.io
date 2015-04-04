'use strict';

var CommandsRepository = function () {
    return this;
};

function getCommandCount(db, predicate) {
    return db.Command.count(predicate)
        .catch(function (err) {
            return err;
        });
}

function getCommandById(id, db) {
    return db.Command.findOne({
        where: {id: id}
    }).then(function (model) {
        return model;
    }).catch(function (err) {
        return err;
    });
}

CommandsRepository.prototype = {
    getCommandCount: getCommandCount,
    getCommandById: getCommandById
};

var commandsRepository = new CommandsRepository();

module.exports = commandsRepository;
