global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://bit.ly/3AQZZnw', 'GAADA']
global.Owner = {
  // use the phone number with the country code, for example Indonesia '62' America '1' etc
  '6285888213719': {
  	name : 'Fth Gamteng', 
      isDev : true, 
      isCreator : true, 
  }, 
  '6285894217616': {
  	name : 'Creator Games-Wabot', 
      isDev : true, 
      isCreator: true, 
  }, 
  '6285894217616': { // put your number here
    name: 'Nesz || Recode Aja',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: true // if true this number will send if user use command /owner or /creator
  },
  '628588821379': { // put your number here
    name: 'FTH PLAYZ || OWNER ZANIXON',
    isDev: true, // if true this number will send if bot have bug and developer mode true
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false, // if true this number will send if user use command /owner or /creator
  },
  '628193338940': {
    name: 'Ferly',
    isDev: true, 
    isReport: true, // if true this number will send if user use command /report or /join
    isCreator: false,
 }, 
  '6285894217616': {
    isReport: true
  },
  '13479805233': {} // ignore if you don't want anything, like name dll
}
global.mods = ['6285719381591'] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais'
}

// Sticker WM
global.packname = 'PUNYA • NESZ\nWm\n\n\nMe: Nesz (recode) \n©RPG'
global.author = 'NI STICKER\nWm Ya\nDonasi\nPulsa\n085894217616 (INDOSAT)\nWm\nWm\nWm\nWm\nWm\nWm\nWm\nWm'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
