const Discord = require("discord.js"),
client = new Discord.Client();
const config = require("../config.js")
module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**Flykies Pro Botunun Yardım Menüsüne Hoşgeldin**
\`Not : Lütfen Botun Rolünü En Üste Alınız\`**

> <a:kelebek:834321655077142548>・\`f!kayıt-menüsü\` : Kayıt Menüsünü Gösterir.

> <a:kelebek:834321655077142548>・\`f!moderasyon\` : Moderasyon Menüsünü Gösterir.

> <a:kelebek:834321655077142548>・\`f!genel\` : Genel Komutları Gösterir

Linkler:
[Botu Davet Et](${config.link}) | [Destek Sunucusu](https://discord.gg/zCCCrngYeQ)
**`)
.setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "yardım",
  guildOnly: false,
  aliases: ["y"],
}; //<a:sarikelebek:834328462084014131>