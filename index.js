const Discord = require("discord.js")  
const client = new Discord.Client();      
const config = require("./config.js")
    const moment = require('moment')
const fs = require("fs");                
require('./util/Loader.js')(client);     

const {
    JsonDatabase,
    YamlDatabase
} = require("wio.db");

const db = new JsonDatabase("myDatabase");
const yamldb = new YamlDatabase("myDatabase");



client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);              
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);  
    console.log(`${props.config.name} komutu yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})

client.login(config.token)


client.on("guildMemberAdd", member => {
      let aylar = {
               "01": "Ocak",
               "02": "Şubat",
               "03": "Mart",
               "04": "Nisan",
               "05": "Mayıs",
               "06": "Haziran",
               "07": "Temmuz",
               "08": "Ağustos",
               "09": "Eylül",
               "10": "Ekim",
               "11": "Kasım",
               "12": "Aralık"
    }

  let bitiş = member.user.createdAt
      let günü = moment(new Date(bitiş).toISOString()).format('DD')
      let ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık").replace("13","CodAre")//codare
     let yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
     let saati = moment(new Date(bitiş).toISOString()).format('HH:mm')

let günay = `${günü} ${ayı} ${yılı} ${saati}`  

      let süre = member.user.createdAt
      let gün = moment(new Date(süre).toISOString()).format('DD')
      let hafta = moment(new Date(süre).toISOString()).format('WW')
      let ay = moment(new Date(süre).toISOString()).format('MM')
      let ayy = moment(new Date(süre).toISOString()).format('MM')
      let yıl =  moment(new Date(süre).toISOString()).format('YYYY')
     let yıl2 = moment(new Date().toISOString()).format('YYYY')

     let netyıl = yıl2 - yıl

     let created = ` ${netyıl} yıl  ${ay} ay ${hafta} hafta ${gün} gün önce`

     let kontrol;
     if(süre < 1296000000) kontrol = 'Bu hesap şüpheli!'
     if(süre > 1296000000) kontrol = 'Bu hesap güvenli!'


let kayıtsistemi = db.fetch(`kayıtsistemi_${member.guild.id}`)
let kayıtsız = db.fetch(`kayıtsız_${member.guild.id}`) || "Ayarlanmamış"
let tag = db.fetch(`tag_${member.guild.id}`) || "Ayarlanmamış"
let kayıtkanalı = db.fetch(`kayıtkanalı_${member.guild.id}`) || "Ayarlanmamış"
let kayıtyetkili = db.fetch(`kayıtyetkili_${member.guild.id}`) || "Ayarlanmamış"
if(!kayıtsistemi) { 
return
} else {


const embed = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`${member.guild.name} | Kayıt Sistemi`)
.setDescription(`**<a:elmas:834385474985394176>  |  <@${member.id}> Sunucumuza Hoşgeldin!**
**<a:hypesquad:821080975533670431>  |  Senin Sayende ${member.guild.memberCount} Kişi Olduk**
**<a:kelebek:834321655077142548>  |  Hesabının Kuruluş Tarihi ${günay}
${kontrol}**
**<a:ayar:834360844920815627>  |  Kayıt Olmak İçin <@&${kayıtyetkili}> Rolüne Başvurabilirsin.**`)
.setTimestamp()
.setFooter(`Flykies Pro`, config.logo)
.setImage("https://cdn.discordapp.com/attachments/828973605664456744/834493645293617202/giphy.gif")
client.channels.cache.get(kayıtkanalı).send(`<@&${kayıtyetkili}> & <@${member.id}>`, embed)



const embed2 = new Discord.MessageEmbed()
.setDescription(`> **<:carpi:834334316149473332> Katılan Kişinin İsmini Değiştiremedim ! Yetkilerimi Kontrol Et**`)

if(tag === "yok") {
member.setNickname(`İsim | Yaş`).catch(error => {
client.channels.cache.get(kayıtkanalı).send(embed2)
})
return
}
member.setNickname(`${tag}  İsim | Yaş`).catch(error => {
client.channels.cache.get(kayıtkanalı).send(embed2)
})
}
})

client.on(`message`, msg => {
let saas = db.fetch(`saas_${msg.guild.id}`)

if(saas === "acik") {
if(msg.content.toLowerCase() === "sa") {
msg.channel.send(`**<a:kelebek:834321655077142548> <@${msg.author.id}>, Aleyküm selam hoşgeldin^^**`)
}
}
})



