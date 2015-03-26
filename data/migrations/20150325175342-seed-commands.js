"use strict";
var db = require('../models');

// A pseudomigration to put some data into the commands table.
// This doesn't seem to be best practice for Sequelize, but
// I actually have no idea at this point.
module.exports = {
    up: function(migration, DataTypes, done) {
        db.Command.bulkCreate(commands).then(function(){done();});
    },

    down: function(migration, DataTypes, done) {
        done();
    }
};

var commands = [
    { shortName: "HelloWorld", shell: 'bash', risk: 'low', category: 'harmless', command: 'echo "hello world"' },
    { shortName: "StopNetworking", shell: 'bash', risk: 'medium', category: 'services', command: 'service networking stop' },
    { shortName: "EchoFile", shell: 'bash', risk: 'low', category: 'harmless', command: 'echo "i heard you like files" > ~/yo.dawg' },
    { shortName: "Guitar", shell: 'bash', risk: 'low', category: 'fun', command: "n=('' E4 B3 G3 D3 A2 E2);while read -n1 -p 'string? ' i;do case $i in [1-6]) play -n synth pl ${n[$i]} fade 0 1 ;; *) echo;break;;esac;done" },
    { shortName: "CurrentTime", shell: 'bash', risk: 'low', category: 'harmless', command: 'date -d @$(grep ^btime /proc/stat | cut -d" " -f 2)' },
    { shortName: "RandomMusic", shell: 'bash', risk: 'low', category: 'fun', command: 'find ~/Music -maxdepth 5 -type f -printf \'%p\n\' -name "*.mp3" | shuf -n 1 | xargs -i mpg123 "{}"' }
]
