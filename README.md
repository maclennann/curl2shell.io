##curl2shell.io

Execute arbitrary commands from the Internet without ever leaving your terminal!

Simply curl our api, and a completely arbitrary command will be sent directly to you,
the user! AT NO CHARGE!

Now, just pipe it to bash and you will be executing commands with ease!

No more messy copy/pasting! No more tedious man pages or ServerFault! Let us
do the work for you, and we'll pass the savings on to you!

Just run:

```bash
curl -H "x-raw-command:1" https://curl2shell.io/v1/commands 2>/dev/null | sudo bash
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
