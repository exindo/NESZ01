let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('Wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
╠═〘 *R P G* Botz 〙 
╠➥ *Versi:* ${package.version} 
╠➥ *Prefix:* ' ${usedPrefix} '
╠➥ *Menu:* ${usedPrefix}menu
╠➥ *Ping:* ${neww - old} *ms*
╠➥ *Total user:* ${totalreg} *user*
╠➥ *Uptime:* ${uptime}
╠➥ *Script:* Saya Hanya Recode Mang
║
╠═〘 DONASI 〙 ═
╠➥ Dana: 085894217616
╠➥ Indosat: 085894217616
║
╠═ Request? #rec (pesan) 
╠═ Official Group *${conn.user.name}* :
${(global.linkGC).map((v, i) => '║ *Group ' + (i + 1) + '*\n║' + v).join`\n║\n`}
║
╠═ Youtube? 
║ *Yt Nesz:* -
║ *Yt Fth Playz:* -
║${readMore}
╠═〘 SYARAT & KETENTUAN R P G BOTZ 〙 
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS PENYALAH*
║   *GUNAAN BOT*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS KEBOCORAN DATA*
║   *PRIBADI ANDA*
╠➥ *KAMI AKAN MENYIMPAN DATA*
║   *SEPERTI NOMER TELEPON*
║   *ANDA DI DATABASE KAMI*
║ 
║ 
╠═ ©2021 ${package.name}
╠═ Script original by *Nurutomo* || Recode By *Nesz*
╠═〘 R P G *INFO* 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
