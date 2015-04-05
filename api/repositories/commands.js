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

function getCommandsByRisk(db, acceptableRisks) {
    return db.Command.findAll({
        where: {
            risk: {
                in: acceptableRisks
            }
        }
    }).then(function (models) {
        return models;
    });
}

function getCommandsByCategory(db, acceptableCategories) {
    return db.Command.findAll({
        where: {
            category: {
                in: acceptableCategories
            }
        }
    }).then(function (models) {
        return models;
    });
}

CommandsRepository.prototype = {
    getCommandCount: getCommandCount,
    getCommandById: getCommandById,
    getCommandsByRisk: getCommandsByRisk,
    getCommandsByCategory: getCommandsByCategory
};

var commandsRepository = new CommandsRepository();

module.exports = commandsRepository;
