const Discord = require("discord.js"),
client = new Discord.Client();

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");
let first;


module.exports.run = async (client, message, args) => {

  const filter = response => {
    	return response.author.id === message.author.id;
    };



if (!message.member.hasPermission('MANAGE_GUİLD')) {
message.channel.send(`> <:carpi:834334316149473332> **Malesef bu komutu kullanabilmek için yeterli iznin yok.**`);
return
}
let otorolrol = db.fetch(`otorolrol_${message.guild.id}`) 
if(args[0] === "sıfırla") {
if(!otorolrol) {
message.channel.send(`> <:carpi:834334316149473332> **Zaten OtoRol Komutu Aktif Değil.**`);
} else {
 db.delete(`otorolrol_${message.guild.id}`) 
}
}
if(args[0] === "kur") {
if(otorolrol) {
message.channel.send(`> <:carpi:834334316149473332> **Zaten OtoRol Komutu Aktif.**`);
return
}


message.channel.send(`
**Flykies Pro** Otorol Sistemine Hoşgeldin. Şimdi Otorolde Verilecek Rolü Yaz.
\`Not : İptal Etmek İstersen iptal yazman yeterli\`
`)
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
 first = collected.first()
if(first.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Otorol Kur Komutu İptal Edildi\`**`)
return
}
let otorolrol = collected.first().mentions.roles.first()
if(!otorolrol) {
message.channel.send(`> <:carpi:834334316149473332> **Bir Rol Etiketlemediğin İçin Komut İptal Edildi.**`)
return
}
db.set(`otorolrol_${message.guild.id}`, otorolrol.id)
message.channel.send(`
Şimdi İse Oto Rol Kanalını Yaz. İstemiyorsan "yok" yaz
\`Not : İptal Etmek İstersen iptal yazman yeterli\`
`)
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
let two;
two = collected.first()
if(two.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Otorol Kur Komutu İptal Edildi\`**`)
db.delete(`otorolrol_${message.guild.id}`)
return
}
let otorollog = collected.first().mentions.channels.first()
if(!otorolrol) {
message.channel.send(`> <:carpi:834334316149473332> **Bir Kanal Etiketlemediğin İçin Komut İptal Edildi.**`)
return
}
db.set(`otorollog_${message.guild.id}`, otorollog.id)
message.channel.send(`
Başarılı Bir Şekilde Oto Rol Aktif Edildi.
\`Not : İptal Etmek İstersen f!otorol sıfırla yazman yeterli\`
`)
});
});

}


};
exports.config = {
  name: "otorol",
  guildOnly: true, 
  aliases: [],
}; 