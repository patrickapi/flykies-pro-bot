const Discord = require("discord.js"),
client = new Discord.Client();
const config = require("../config.js")
module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**Flykies Pro Botunun Yardım Menüsüne Hoşgeldin**
\`Not : Lütfen Botun Rolünü En Üste Alınız\`**

> <a:pembekelebek:834328494304395294>・\`f!say\` : Sunucu Bilgisini Görüntülersiniz.

> <a:pembekelebek:834328494304395294>・\`f!sil\` : Belirlediğiniz Kadar Mesaj Silersiniz.

> <a:pembekelebek:834328494304395294>・\`f!otorol kur\` : Otorol Ayarlarsınız.

> <a:pembekelebek:834328494304395294>・\`f!otorol sıfırla\` : Otorol Sıfırlarsınız.

> <a:pembekelebek:834328494304395294>・\`f!isimdeğiştir\` : Herhangi Birinin İsmini Değiştirirsiniz.

> <a:pembekelebek:834328494304395294>・\`f!isimdeğiştir\` : Bu Sistemi Açarsanız Bot Sa Diyenlere Otomatik As Der.

Linkler:
[Botu Davet Et](${config.link}) | [Destek Sunucusu](https://discord.gg/zCCCrngYeQ)
**`)
.setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "moderasyon-menü",
  guildOnly: true, 
  aliases: ["moderasyon"],
}; 