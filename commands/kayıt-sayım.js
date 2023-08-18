const Discord = require("discord.js"),
client = new Discord.Client();
const config = require("../config.js")
const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");


module.exports.run = async (client, message, args) => {


let user = message.mentions.members.first() || message.author
let kayıtsayı = db.fetch(`kayıtsayı_${message.guild.id}_${user.id}`) || 0
const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**<a:kelebek:834321655077142548>  |  <@${user.id}> Adlı Kişi ${kayıtsayı} Kişiyi Kayıt Emiş.**`)
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "kayıt-sayım",
  guildOnly: true,
  aliases: ["kayıtsayım", "ks", "kayıt-stat"],
}; //<a:sarikelebek:834328462084014131>