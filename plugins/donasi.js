let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085894217616]
│ • Dana [085894217616]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285894217616
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
