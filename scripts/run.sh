#!/bin/bash

npm install
node_modules/.bin/bower install

node_modules/.bin/sequelize db:migrate --config data/config/config.json --migrations-path data/migrations --models-path data/models
node app.js
