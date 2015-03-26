"use strict";
module.exports = function(sequelize, DataTypes) {
    var Command = sequelize.define("Command", {
        shortName: DataTypes.STRING,
        shell: DataTypes.STRING,
        risk: DataTypes.STRING,
        category: DataTypes.STRING,
        command: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Command;
};
