const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608715013636751392")
setInterval(function() {
channel.send(`Ashraf_Gamer`);
}, 30)
})

client.login(process.env.BOT_TOKEN);