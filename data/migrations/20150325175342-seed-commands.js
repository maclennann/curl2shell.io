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


// If you're adding commands you can add them here, or make a new migration structured like this.
// Since we're using sqlite, our DB is re-created every deploy so it doesn't matter that this migration
// has already run. But if you're testing manually, you should delete your `data.sqlite3` before
// runs of npm start.
var commands = [
    { shortName: "HelloWorld", shell: 'bash', risk: 'low', category: 'harmless', command: 'echo "hello world"' },
    { shortName: "StopNetworking", shell: 'bash', risk: 'medium', category: 'services', command: 'service networking stop' },
    { shortName: "EchoFile", shell: 'bash', risk: 'low', category: 'harmless', command: 'echo "i heard you like files" > ~/yo.dawg' },
    { shortName: "Guitar", shell: 'bash', risk: 'low', category: 'fun', command: "echo 'E4,B3,G3,D3,A2,E2'|xargs -d,  -i play -n synth pl {} fade 0 1" },
    { shortName: "CurrentTime", shell: 'bash', risk: 'low', category: 'harmless', command: 'date -d @$(grep ^btime /proc/stat | cut -d" " -f 2)' },
    { shortName: "RandomMusic", shell: 'bash', risk: 'low', category: 'fun', command: 'find ~/Music -maxdepth 5 -type f -printf \'%p\n\' -name "*.mp3" | shuf -n 1 | xargs -i mpg123 "{}"' },
    { shortName: "Whallo", shell: 'bash', risk: 'low', category: 'annoying', command: '(crontab -l 2>/dev/null; echo "*/1 * * * * echo \'peekaboo\'| wall") | crontab -'},
    { shortName: "BorkSudoers", shell: 'bash', risk: 'extreme', category: 'catastrophic', command: 'echo "oops!" >> /etc/sudoers'}
]
