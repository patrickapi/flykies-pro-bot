const Discord = require("discord.js"),
client = new Discord.Client();
const config = require("../config.js")
module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**Flykies Pro Botunun Yardım Menüsüne Hoşgeldin**
\`Not : Lütfen Botun Rolünü En Üste Alınız\`**

> <a:sarikelebek:834328462084014131>・\`f!kayıt-kur\` : Kayıt Sistemini Kurarsınız.

> <a:sarikelebek:834328462084014131>・\`f!erkek\` : Erkek Olarak Kayıt Edersiniz.

> <a:sarikelebek:834328462084014131>・\`f!kız\` : Kız Olarak Kayıt Edersiniz.

> <a:sarikelebek:834328462084014131>・\`f!kayıt-sayım\` : Yetkilinin Kaç Kişiyi Kayıt Ettiğini Görürsünüz.

> <a:sarikelebek:834328462084014131>・\`f!kayıt-ayarları\` : Kayıt Ayarlarını Görürsünüz.

> <a:sarikelebek:834328462084014131>・\`f!kayıt-sistemi-sıfırla\` : Kayıt Sistemini Sıfırlarsınız

Linkler:
[Botu Davet Et](${config.link}) | [Destek Sunucusu](https://discord.gg/zCCCrngYeQ)
**`)
.setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "kayıt-menü",
  guildOnly: false,
  aliases: ["kayıt-yardım", "kayıt-menüsü"],
}; 