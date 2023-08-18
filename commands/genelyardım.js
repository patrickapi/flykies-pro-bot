const Discord = require("discord.js"),
client = new Discord.Client();
const config = require('../config.js')
module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**Flykies Pro Botunun Yardım Menüsüne Hoşgeldin**
\`Not : Lütfen Botun Rolünü En Üste Alınız\`**

> <a:kelebek:834321655077142548>・\`f!istatistik\` : Botun İstatistiğini Gösterir.

> <a:kelebek:834321655077142548>・\`f!ping\` : Botun Pingini Gösterir.

> <a:kelebek:834321655077142548>・\`f!linkler\` : Linkleri Görürsünüz.

Linkler:
[Botu Davet Et](${config.link}) | [Destek Sunucusu](https://discord.gg/zCCCrngYeQ)
**`)
.setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "genel-yardım",
  guildOnly: false,
  aliases: ["genel"],
}; //<a:sarikelebek:834328462084014131>