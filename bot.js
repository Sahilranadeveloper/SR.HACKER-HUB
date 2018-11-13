var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =s.{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "s." //The text before commands, you can put anything that you prefer

    if(message.author.id != "511045081382387722" && message.channel.id === "508219003685175311{
        if(msg.startsWith('s.', 0)){
            if(msg === prefix + "helo" && message.channel.id === "508219003685175311{
                message.channel.send('helo bro!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand s. helo right now. More will be added when my creator (sahil rana) is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with 's.' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
