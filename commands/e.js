exports.config = {
  name: "erkek",
  guildOnly: true,
  aliases: ["e"],
}; 
const config = require('../config.js')
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
message.channel.send(`> <:carpi:834334316149473332> **Kayıt Sistemi Kurulu Değil. Kurmak İçin : f!kayıt-kur.**`)
return
}

let user;
user = message.mentions.members.first();
let kayıtyetkili = db.fetch(`kayıtyetkili_${message.guild.id}`) 
let erkekrol = db.fetch(`erkek_${message.guild.id}`) 
let kayıtsız = db.fetch(`kayıtsız_${message.guild.id}`) 
let tag = db.fetch(`tag_${message.guild.id}`) || "Ayarlanmamış"
if(!message.member.roles.cache.has(kayıtyetkili)) {
const embed1 = new Discord.MessageEmbed()
.setDescription(`> **<:carpi:834334316149473332> Bu Komutu Kullanmak İçin <@&${kayıtyetkili}> Rolüne İhtiyacın Var**`)
message.channel.send(embed1)
return
}
if(!user) {
const embed3 = new Discord.MessageEmbed()
.setDescription(`> **<:carpi:834334316149473332> Kayıt Ediceğin Kişiyi Etiketlemen Gerek!**`)
message.channel.send(embed3)
return
}

if(!user.roles.cache.has(kayıtsız)) {
const embed2 = new Discord.MessageEmbed()
.setDescription(`> **<:carpi:834334316149473332> Bu Komutu Gerçekleştiremiyorum. Etiketlediğiniz Kişi Zaten Kayıtlı Veya Kayıtsız Rolu Yok**`)
message.channel.send(embed2)
return
}
let isim = args[1]
let yaş = args[2]
if(!isim) {
const embed3 = new Discord.MessageEmbed()
.setDescription(`> **<:carpi:834334316149473332> Bu Komutu Gerçekleştiremiyorum. Lütfen İsim Belirt**`)
message.channel.send(embed3)
return
}
if(!yaş) {
const embed3 = new Discord.MessageEmbed()
.setDescription(`> **<:carpi:834334316149473332> Bu Komutu Gerçekleştiremiyorum. Lütfen Yaş Belirt**`)
message.channel.send(embed3)
return
}

user.roles.add(erkekrol).catch(error => {
message.channel.send("**> <:carpi:834334316149473332> Erkek Rolü Veremedim! Yetkilerimi Kontrol Et!**")
})
user.roles.remove(kayıtsız).catch(error => {
message.channel.send("**> <:carpi:834334316149473332> Kayıtsız Rolü Alamadım! Yetkilerimi Kontrol Et!**")
})

if(tag === "yok") {
message.guild.members.cache.get(user.id).setNickname(`${isim} | ${yaş}`).catch(error => {
message.channel.send("**> <:carpi:834334316149473332> Şahısın İsmini Değiştiremedim! Yetkilerimi Kontrol Et!**")
})
} else {
message.guild.members.cache.get(user.id).setNickname(`${tag}  ${isim} | ${yaş}`).catch(error => {
message.channel.send("**> <:carpi:834334316149473332> Şahısın İsmini Değiştiremedim! Yetkilerimi Kontrol Et!**")
})
}
let kayıtsayı = db.fetch(`kayıtsayı_${message.guild.id}_${message.author.id}`) || 0
if(kayıtsayı === "0") {
db.set(`kayıtsayı_${message.guild.id}_${message.author.id}`, 1)
} else {
db.add(`kayıtsayı_${message.guild.id}_${message.author.id}`, 1)
}

const basarili = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**<a:tik:834412579140665356>  |  <@${user.id}> Başarılı Bir Şekilde Kayıt Oldu.**
**<@&${erkekrol}> Adlı Rol Verildi , <@&${kayıtsız}> Adlı Rol Alındı.**`)
.setColor("BLACK")
.setTimestamp()
message.channel.send(basarili)
};

