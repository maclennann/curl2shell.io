"use strict";
/*jslint nomen: true*/
var fs        = require("fs"),
    path      = require("path"),
    Sequelize = require("sequelize"),
    basename  = path.basename(module.filename),
    env       = process.env.NODE_ENV || "development",
    config    = require(__dirname + '/../config/config.json')[env],
    sequelize = new Sequelize(config.database, config.username, config.password, config),
    db        = {};


fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== basename);
    })
    .forEach(function (file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });
/*jslint nomen: false*/
Object.keys(db).forEach(function (modelName) {
    if (db[modelName].hasOwnProperty("associate")) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
