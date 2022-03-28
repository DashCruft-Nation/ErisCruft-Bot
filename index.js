const Eris = require("eris");
require('dotenv').config()

const bot = new Eris(process.env.TOKEN, {
    intents: [
        "guildMessages",
        "guilds"
    ]
});

bot.on("ready", () => {
    console.log("Ready!");
});

bot.on("error", (err) => {
    console.error(err);
});

bot.on("messageCreate", (message) => {
    const prefix = ";";

    if (!message.content.startsWith(prefix)) return;

    if (message.content.toLowerCase() === `${prefix}ping`) {
        message.channel.createMessage({ content: ":bruv:", messageReference: { messageID: message.id } });
    }
});

bot.connect();