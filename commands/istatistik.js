const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
const config = require('../config.js')
const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , config.logo)
.setDescription(`**Flykies Pro Botunun İstatistik Menüsüne Hoşgeldin**`)

.addField(`> <a:kelebek:834321655077142548>・\`Sunucu Sayısı\` :`, client.guilds.cache.size.toLocaleString())

.addField(`> <a:kelebek:834321655077142548>・\`Kullanıcı Sayısı\` :`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString())

.addField(`> <a:kelebek:834321655077142548>・\`Botun Sahibi\` :`, `<@409383730365595670>`)

.addField(`> <a:kelebek:834321655077142548>・\`Geliştiriciler\` :`, `<@704287854192361543> <@781051846776193066>`)

.addField(`> <a:kelebek:834321655077142548>・\`Discord.js Sürümü\` :`, `v${Discord.version}`)
.addField(`**
Linkler:**`,
`**[Botu Davet Et](${config.link}) | [Destek Sunucusu](https://discord.gg/zCCCrngYeQ)
**`)
.setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "i",
  guildOnly: true,
  aliases: ["istatistik"],
}; //<a:sarikelebek:834328462084014131>