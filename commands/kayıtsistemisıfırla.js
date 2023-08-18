const Discord = require("discord.js"),
client = new Discord.Client();

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");


module.exports.run = async (client, message, args) => {


let kayıtsistemi = db.fetch(`kayıtsistemi_${message.guild.id}`)

if(!kayıtsistemi) {
message.channel.send(`> <:carpi:834334316149473332> **Zaten Kayıt Sistemi Kurulu Değil . Kurmak İçin : f!kayıt-kur.**`)
return
}
message.channel.send("> **Başarılı Bir Şekilde Kayıt Ayarları Sıfırlandı**")
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
db.delete(`kız_${message.guild.id}`)
db.delete(`erkek_${message.guild.id}`)
db.delete(`kayıtsız_${message.guild.id}`)
db.delete(`tag_${message.guild.id}`)


};

exports.config = {
  name: "kayıt-sistemi-sıfırla",
  guildOnly: true,
  aliases: [],
}; 