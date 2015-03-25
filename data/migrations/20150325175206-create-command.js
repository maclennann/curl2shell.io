"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("Commands", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      shortName: {
        type: DataTypes.STRING
      },
      shell: {
        type: DataTypes.STRING
      },
      risk: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING
      },
      command: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Commands").done(done);
  }
};
