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

function whereIn(field, values) {
    var whereClause = { where: {} };
    whereClause.where[field] = { in: values};
    return whereClause;
}

function getCommandsByRisk(db, acceptableRisks) {
    return db.Command
        .findAll(whereIn('risk', acceptableRisks))
        .then(function (models) {
            return models;
        });
}

function getCommandsByCategory(db, acceptableCategories) {
    return db.Command
        .findAll(whereIn('category', acceptableCategories))
        .then(function (models) {
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
