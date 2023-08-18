const Discord = require("discord.js"),
client = new Discord.Client();

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");
const config = require('../config.js')
const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports.run = async (client, message, args) => {

let kayıtkanalı = db.fetch(`kayıtkanalı_${message.guild.id}`) || "Ayarlanmamış"
let kayıtyetkili = db.fetch(`kayıtyetkili_${message.guild.id}`) || "Ayarlanmamış"
let erkekrol = db.fetch(`erkek_${message.guild.id}`) || "Ayarlanmamış"
let kızrol = db.fetch(`kız_${message.guild.id}`) || "Ayarlanmamış"
let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`) || "Ayarlanmamış"
let tag = db.fetch(`tag_${message.guild.id}`) || "Ayarlanmamış"
let kayıtsistemi = db.fetch(`kayıtsistemi_${message.guild.id}`)

if (!message.member.hasPermission('MANAGE_GUİLD')) {
message.channel.send(`> <:carpi:834334316149473332> **Malesef bu komutu kullanabilmek için yeterli iznin yok.**`);
return
}

if(!kayıtsistemi) {
message.channel.send(`> <:carpi:834334316149473332> **Malesef Kayıt Sistemi Kurulu Değil . Kurmak İçin : f!kayıt-kur.**`)
return
}


const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**Flykies Pro Botunun Kayıt Ayarlarına Hoşgeldin**
\`Not : Lütfen Botun Rolünü En Üste Alınız\`**

> <a:ayar:834360844920815627>・\`Kayıt Kanalı\` : <#${kayıtkanalı}>

> <a:ayar:834360844920815627>・\`Kayıt Yetkilisi\` : <@&${kayıtyetkili}>

> <a:ayar:834360844920815627>・\`Erkek Rol\` : <@&${erkekrol}>

> <a:ayar:834360844920815627>・\`Kız Rol\` : <@&${kızrol}>

> <a:ayar:834360844920815627>・\`Kayıtsız Rol\` : <@&${kayıtsız}>

> <a:ayar:834360844920815627>・\`Tag\` : ${tag}

Linkler:
[Botu Davet Et](${config.link}) | [Destek Sunucusu](https://discord.gg/zCCCrngYeQ)
**`)
.setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "kayıt-ayarları",
  guildOnly: true,
  aliases: ["kayıtayarları"],
}; //<a:sarikelebek:834328462084014131>