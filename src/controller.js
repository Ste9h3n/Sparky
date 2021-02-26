const discord = require("discord.js");
const dotenv = require("dotenv");

const express = require("express");

const server = express();
const client = new discord.Client();

dotenv.config({ path: __dirname.replace("src", "private/") + ".env" });

server.listen(process.env.SERVER_PORT);
client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("Sparky's ready.");
})

client.on("message", (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith(`<@!${client.user.id}>`)) {
        msg.channel.send("https://github.com/Ste9h3n/Sparky");
    }

    if (!msg.content.startsWith(process.env.BOT_PREFIX)) return;
})

server.get("/", (req, res) => {
    res.sendStatus(200).send("");
})

