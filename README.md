##curl2shell.io

[![Build Status](https://travis-ci.org/maclennann/curl2shell.io.svg?branch=master)](https://travis-ci.org/maclennann/curl2shell.io)

Execute arbitrary commands from the Internet without ever leaving your terminal!

Simply curl our api, and a completely arbitrary command will be sent directly to you,
the user! AT NO CHARGE!

Now, just pipe it to bash and you will be executing commands with ease!

No more messy copy/pasting! No more tedious man pages or ServerFault! Let us
do the work for you, and we'll pass the savings on to you!

### Actual technical stuff

This is built on top of an [apigee127](https://github.com/apigee-127/a127) scaffold with a few minor modifications
(mostly jamming it together with some code I had already written).

How to:

`npm install`

`npm install -g sequelize-cli`

`npm start`

That will migrate the DB and start the API (with a master and some workers) on port 9000.

Now just hit `localhost:8081/v1/command` to receive a random command (or /# to get a specific number).
Set `x-raw-command` to get the command without json wrapping. `localhost:8081/v1/ui` will bring up the [swagger ui](https://github.com/swagger-api/swagger-ui).

The routing and validation is all handled via [a127-magic](https://github.com/apigee-127/magic) using the
swagger spec file in [api/swagger/swagger.yaml](api/swagger/swagger.yaml). It really is magic. And I kinda wish it
were JSON.

### TODO
* Make the swagger doc less aspirational as far as filtering and stuff goes.
* Throw in a vagrant box to make testing the more-catastrophic commands easier
