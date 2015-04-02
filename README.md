##curl2shell.io

[![Build Status](https://travis-ci.org/maclennann/curl2shell.io.svg?branch=master)](https://travis-ci.org/maclennann/curl2shell.io)

Execute arbitrary commands from the Internet without ever leaving your terminal!

Simply curl our api, and a completely arbitrary command will be sent directly to you,
the user! AT NO CHARGE!

Now, just pipe it to bash and you will be executing commands with ease!

No more messy copy/pasting! No more tedious man pages or ServerFault! Let us
do the work for you, and we'll pass the savings on to you!

Just run:

```bash
curl -H "x-raw-command:1" http://curl2shell.io/v1/command 2>/dev/null | sudo bash
```

And you'll be on your way!

Don't want to wait for that pesky HTTPS encryption? No problem! Just drop the S and
we will send the packets to you encryption-free! It's that easy!

But wait, there's more!

[more]


### Actual technical stuff

I'm still in the process of learning how to 'really' node. This was generated with
the [yeoman expressrestapi generator](https://github.com/trwalker/generator-express-rest-api).

How to:

`npm install`

`npm install -g sequelize-cli`

`npm start`

That will migrate the DB and start the API (with a master and some workers) on port 9000.

Now just hit `localhost:9000/v1/commands` to receive a random command (or /# to get a specific number).
Set `x-raw-command` to get the command without json wrapping.

### Ideas

* /v1/install/cron.sh - installs a cron job that just curls /v1/commands and pipes to bash once and hour at random minute
* set ridiculous aliases (e.g. cd -> sudo reboot)
* steal more stuff from climagic
* separate calls (via resource or qsp) by shell type, risk-level, category
    * this is documented in the swagger but doesn't actually work
