const discord = require("discord.js");
const dotenv = require("dotenv");

const client = new discord.Client();

dotenv.config({ path: __dirname.replace("src", "private/") + ".env" });
client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    console.log("Sparky's ready.");
})
