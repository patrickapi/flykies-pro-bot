const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const config = require('../config.js')

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

let saas = db.fetch(`saas_${message.guild.id}`)


if (!message.member.hasPermission("ADMINISTRATOR")) {
message.channel.send(`> <:carpi:834334316149473332> **Malesef bu komutu kullanabilmek için yeterli iznin yok.**`);
return
}

if(saas === "acik") {
const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
.setDescription(`> **<a:kelebek:834321655077142548> Sa-as Sistemi Zaten Açık Olduğu İçin Sistem Kapatıldı.**`)
message.channel.send(embed)
db.delete(`saas_${message.guild.id}`)
}
if(!saas) {
const embed2 = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
.setDescription(`> **<a:kelebek:834321655077142548> Sa-as Sistemi Başarılı Bir Şekilde Açıldı.**`)
message.channel.send(embed2)
db.set(`saas_${message.guild.id}`, "acik")
}

};

exports.config = {
  name: "sa-as",
  guildOnly: true,
  aliases: ["saas"],
}; 