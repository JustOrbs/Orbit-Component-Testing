const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("App is running")
});

app.get("/", (req, res) => {
  res.send("Hello World!")
});

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("messageCreate", message => {
  if(message.content === "ping") {
    message.reply("pong")
  }

  if(message.content === "!lfg") {
    let embed = new Discord.MessageEmbed()
    .setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()})
    .setTitle("Welcome to the Orbit LFG platform")
    .setDescription("Please select an option")
    .setColor("#ffa500")
    
    message.channel.send( {embeds : [embed], components : [{type : 1, components : [{
            type: 2,
            label: 'Create LFG Listing',
            style: 1,
            customId: 'newPostMenu'
        },
        {
            type: 2,
            label: 'View Current Listings',
            style: 2,
            customId: 'viewPostMenu'
        }]}] } )
  }
});

const mySecret = process.env['token']


client.login(mySecret);