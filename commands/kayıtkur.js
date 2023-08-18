const Discord = require("discord.js"),
client = new Discord.Client();

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");


let first;
let two;
let three;
let four;
let five;
let six;

module.exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) {
message.channel.send(`> <:carpi:834334316149473332> **Malesef bu komutu kullanabilmek için yeterli iznin yok.**`);
return
}

let kayıtsistemi = db.fetch(`kayıtsistemi_${message.guild.id}`)

if(kayıtsistemi) {
message.channel.send(`> <:carpi:834334316149473332> **Zaten Kayıt Sistemi Kurulu  . Sıfırlamak İçin : f!kayıt-sistemi-sıfırla.**`)
return
}

message.channel.send(`
**Flykies Pro** Botunun Kayıt Sistemine Hoşgeldin. Şimdi Kayıt Kanalını Etiketle
\`Not İptal Etmek İstersen İptal Yazman Yeterli\`
`)

  const filter = response => {
    	return response.author.id === message.author.id;
    };



/////////////////////////////////////////////////////////////////////////////////////////////////////////
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
 first = collected.first()
if(first.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Kayıt Kur Komutu İptal Edildi\`**`)
return
}
let kayıtkanalı = first.mentions.channels.first()
if(!kayıtkanalı) {
message.channel.send(`> <:carpi:834334316149473332> **Bir Kanal Etiketlemediğin İçin Komut İptal Edildi.**`)
return
}
db.set(`kayıtkanalı_${message.guild.id}`, kayıtkanalı.id)
db.set(`kayıtsistemi_${message.guild.id}`, "acik")
message.channel.send(`
Şimdi İse Kayıt Yetkilisi Rolünü Etiketle.
\`Not İptal Etmek İstersen İptal Yazman Yeterli\`
`)
/////////////////////////////////////////////////////////////////////////////////////////////////////////
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected2 => {
two = collected2.first()
let kayıtyetkilisi = collected2.first().mentions.roles.first();
if(two.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Kayıt Kur Komutu İptal Edildi\`**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
return
}
if(!kayıtyetkilisi) {
message.channel.send(`> <:carpi:834334316149473332> **Bir Rol Etiketlemediğin İçin Komut İptal Edildi.**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
return
}
db.set(`kayıtyetkili_${message.guild.id}`, kayıtyetkilisi.id)
message.channel.send(`
Şimdi İse Erkek Rolünü Etiketle.
\`Not İptal Etmek İstersen İptal Yazman Yeterli\`
`)
/////////////////////////////////////////////////////////////////////////////////////////////////////////
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected3 => {
three = collected3.first()

let erkek = collected3.first().mentions.roles.first();
if(three.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Kayıt Kur Komutu İptal Edildi\`**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
return
}
if(!erkek) {
message.channel.send(`> <:carpi:834334316149473332> **Bir Rol Etiketlemediğin İçin Komut İptal Edildi.**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
return
}
db.set(`erkek_${message.guild.id}`, erkek.id)
message.channel.send(`
Şimdi İse Kız Rolünü Etiketle.
\`Not İptal Etmek İstersen İptal Yazman Yeterli\`
`)
///////////////////////////////////////////////////////////////////////////////////////////////////////
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected4 => {
four = collected4.first()

let kız = collected4.first().mentions.roles.first();
if(four.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Kayıt Kur Komutu İptal Edildi\`**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
db.delete(`erkek_${message.guild.id}`)
return
}
if(!kız) {
message.channel.send(`> <:carpi:834334316149473332> **Bir Rol Etiketlemediğin İçin Komut İptal Edildi.**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`, "acik")
db.delete(`erkek_${message.guild.id}`)
return
}
db.set(`kız_${message.guild.id}`, kız.id)
message.channel.send(`
Şimdi İse Kayıtsız Rolünü Etiketle.
\`Not İptal Etmek İstersen İptal Yazman Yeterli\`
`)
///////////////////////////////////////////////////////////////////////////////////////////////////////
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected5 => {
five = collected5.first()

let kayıtsız = collected5.first().mentions.roles.first();
if(five.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Kayıt Kur Komutu İptal Edildi\`**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
db.delete(`kız_${message.guild.id}`)
db.delete(`erkek_${message.guild.id}`)
return
}
if(!kayıtsız) {
message.channel.send(`> <:carpi:834334316149473332> **Bir Rol Etiketlemediğin İçin Komut İptal Edildi.**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
db.delete(`kız_${message.guild.id}`)
db.delete(`erkek_${message.guild.id}`)
return
}
db.set(`kayıtsız_${message.guild.id}`, kayıtsız.id)
message.channel.send(`
Şimdi İse Tagını Yaz. Yoksa "yok" Yaz
\`Not İptal Etmek İstersen İptal Yazman Yeterli\`
`)
///////////////////////////////////////////////////////////////////////////////////////////////////////
message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected6 => {
six = collected6.first()

let tag = collected6.first().content
if(six.content === "iptal") {
message.channel.send(`**Başarılı Bir Şekilde \`Kayıt Kur Komutu İptal Edildi\`**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
db.delete(`kız_${message.guild.id}`)
db.delete(`erkek_${message.guild.id}`)
db.delete(`kayıtsız_${message.guild.id}`)
return
}
if(tag.lenght > 5) {
message.channel.send(`> <:carpi:834334316149473332> **Tagın 5 Karakterden Büyük Olamaz Dostum.**`)
db.delete(`kayıtkanalı_${message.guild.id}`)
db.delete(`kayıtyetkili_${message.guild.id}`)
db.delete(`kayıtsistemi_${message.guild.id}`)
db.delete(`kız_${message.guild.id}`)
db.delete(`erkek_${message.guild.id}`)
db.delete(`kayıtsız_${message.guild.id}`)
return
}
db.set(`tag_${message.guild.id}`, tag)
message.channel.send(`
**Başarılı Bir Şekilde Kayıt Sistemi Kuruldu**
\`Not Sıfırlamak İstersen İptal f!kayıt-sistemi-sıfırla Yeterli\`
`)
});                                                                                   ;
});
});
});
});
});

};

exports.config = {
  name: "kayıt-kur",
  guildOnly: true,
  aliases: ["kayıt-kur"],
}; 