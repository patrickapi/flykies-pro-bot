const Discord = require("discord.js"),
client = new Discord.Client();

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");

module.exports.run = async (client, message, args) => {

let kayıtsızrol = db.fetch(`kayıtsız_${message.guild.id}`) || "Ayarlanmamış"
let tag = db.fetch(`tag_${message.guild.id}`) || "fsadgğhpjmı"
 var tagsayisi = message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.username.includes(tag));
var sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
var kayıtsız = message.guild.members.cache.filter(s => !s.bot).filter(member => member.roles.cache.has(kayıtsızrol));




const embed = new Discord.MessageEmbed()
.setAuthor("Flykies Pro" , "https://cdn.glitch.com/28770909-8acc-4da4-9b5e-2397802348b7%2Fthumbnails%2F8e724677-781f-4b21-ab95-5df1ed3185b6.image.png?1618987689677")
.setDescription(`**
> <a:pembekelebek:834328494304395294>・\`Toplam Üye Sayısı\` : ${message.guild.memberCount}

> <a:pembekelebek:834328494304395294>・\`Seste Bulunan Kullanıcı Sayısı\` : ${sesli}

> <a:pembekelebek:834328494304395294>・\`Tagta Bulunan Kullanıcı Sayısı\` : ${tagsayisi.size}

> <a:pembekelebek:834328494304395294>・\`Kayıtsız Kullanıcı Sayısı\` : ${kayıtsız.size}
**`)
.setThumbnail(message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setColor("BLACK")
.setImage(`https://cdn.discordapp.com/attachments/766235851167367188/834325963734253619/standard.gif`)
message.channel.send(embed)
};

exports.config = {
  name: "say",
  guildOnly: true, 
  aliases: [],
}; 