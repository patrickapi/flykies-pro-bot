const Discord = require("discord.js");
const config = require('../config.js');
const chalk = require('chalk');
const moment = require('moment');
module.exports = async client => {
let sunucular = client.guilds.cache.size.toLocaleString()
let kullanıcılar = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()

  client.user.setPresence({ activity: { type: "PLAYING", name: `Hizmetinizde | ${sunucular} Sunucu `}, status: 'dnd' })
  console.log(`Bot tamamdır`)
};

// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

// name kısmına oynuyorunuzu yazabilirsiniz.
