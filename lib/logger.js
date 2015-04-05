'use strict';

var bunyan = require('bunyan'),
    logger = bunyan.createLogger({name: 'curl2shell'}),
    Logger = function (className) {
        return logger.child({class: className});
    }

module.exports = Logger;
