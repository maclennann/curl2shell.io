#!/bin/bash
npm install
bower install

sequelize db:migrate --config data/config/config.json --migrations-path data/migrations --models-path data/models
node server.js 1 prod 127.0.0.1 3000 8081
