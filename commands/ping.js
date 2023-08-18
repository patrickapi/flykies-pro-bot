const Discord = require("discord.js"),
client = new Discord.Client();

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("Flykies Pro" , "https://cdn.glitch.com/28770909-8acc-4da4-9b5e-2397802348b7%2Fthumbnails%2F8e724677-781f-4b21-ab95-5df1ed3185b6.image.png?1618987689677")
.setDescription(`**<a:hypesquad:821080975533670431>・Pingim : ${client.ws.ping} ms・<a:hypesquad:821080975533670431>**`)
.setTimestamp()
.setFooter(`${message.author.username} Tarafından Kullanıldı`)
message.channel.send(embed)
};

exports.config = {
  name: "ping",
  guildOnly: true, 
  aliases: [],
}; 