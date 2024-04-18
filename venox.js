process.on("uncaughtException", console.error);
require("./info");

// ====== Lib modules ====== //
const fs = require('fs');
const pm2 = require('pm2');
const util = require("util");
const { promisify } = require('util');
const setTimeoutPromise = promisify(setTimeout);
const chalk = require("chalk");
const axios = require('axios');
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const { EmojiAPI } = require("emoji-api");

// ====== Global modules ====== //
const { addBalance } = require("./lib/limit.js");
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, fetchBuffer } = require('./lib/myfunc')
const _ = require("lodash");
const yargs = require("yargs/yargs");
const iristime = moment.tz('Asia/Dhaka').format('HH:mm:ss');
const irisdate = moment.tz('Asia/Dhaka').format('DD/MM/YYYY');
const time2 = moment().tz('Asia/Dhaka').format('HH:mm:ss');
const currentDate = new Date();
const options = { weekday: 'long' };
const currentDay = new Intl.DateTimeFormat('en-US', options).format(currentDate);
const speed = require('performance-now');
const eco = require('discord-mongoose-economy');
const Jimp = require('jimp');  // for full dp etc.
const modapk = require("tod-api");
const { hentai } = require('./lib/scraper2.js');
const { instadl } = require('./lib/instadl');
const ty = eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority');
const { isLimit, limitAdd, getLimit, giveLimit, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const githubstalk = require('./lib/githubstalk');
let { covid } = require('./lib/covid.js');
const { Gempa } = require("./lib/gempa.js");
const spaceemojis = ["🌌", "🌠", "🚀", "🪐", "🌟"]; 
const manyemojis = ["😄", "👍", "👏", "👌", "🥇", "🌟", "🎉", "🙌", "🤩", "💯", "🔥", "✨", "🚀", "💖", "🌈", "🌞", "🌠", "🌼", "💪", "😎", "💫", "💓", "🎈", "🎁", "🍾", "🎊", "🥳", "👑", "🌺", "🌻", "🌸"];
const os = require('os');
const gis = require("g-i-s");
const { MessageType } = require('@whiskeysockets/baileys');



//=== Required Stuff ===//
let nowtime = '';
if (time2 < "05:00:00") {
  nowtime = 'Good night 🏙';
} else if (time2 < "11:00:00") {
  nowtime = 'Good morning 🌅';
} else if (time2 < "15:00:00") {
  nowtime = 'Good afternoon 🏞';
} else if (time2 < "18:00:00") {
  nowtime = 'Good evening 🌇';
} else if (time2 < "19:00:00") {
  nowtime = 'Good evening 🌆';
} else {
  nowtime = 'Good night 🌌';
}
//
const timestampe = speed();
const latensie = speed() - timestampe

var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}
//
const { Low, JSONFile } = low;
const mongoDB = require("./lib/mongoDB");
//
global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb/.test(opts["db"])
      ? new mongoDB(opts["db"])
      : new JSONFile(`/lib/external/database.json`)
);
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(function () {
        !global.db.READ
          ? (clearInterval(this),
            resolve(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null;
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
global.db = JSON.parse(fs.readFileSync("./lib/external/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {}),
  };


// ====== Imported Modules ====== //
let isSleeping = false;
let banUser = JSON.parse(fs.readFileSync('./lib/database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./lib/database/banChat.json'));
let venoxaudio = JSON.parse(fs.readFileSync('./lib/audio/audio.json'));
let _limit = JSON.parse(fs.readFileSync('./lib/storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./lib/storage/user/bounty.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./lib/storage/user/blood.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./lib/database/nsfw.json'));
let pendaftar = JSON.parse(fs.readFileSync('./lib/storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./lib/database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./lib/database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./lib/database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./lib/database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./lib/database/autostickpc.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./lib/external/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./lib/external/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./lib/external/image.json'))
let videox = JSON.parse(fs.readFileSync('./lib/external/video.json'))
global.db = JSON.parse(fs.readFileSync('./lib/external/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./lib/database/sewa.json'))


// ====== Modules ====== //
const time = moment.tz('Asia/Dhaka').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Dhaka').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
var myHari = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tgel = new Date();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();




// ==== Main Async ==== //
module.exports = iris = async (iris, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = global.prefa
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await iris.decodeJid(iris.user.id)
    const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false
    const text = args.join(" ")
    const from = m.chat
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    const groupMetadata = m.isGroup ? await iris.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isUser = pendaftar.includes(m.sender)
    const isBan = banUser.includes(m.sender)
    const welcm = m.isGroup ? wlcm.includes(from) : false
    const isBanChat = m.isGroup ? banchat.includes(from) : false
    const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const AntiLink = m.isGroup ? ntilink.includes(from) : false
    const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
    const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
    const antiWame = m.isGroup ? ntwame.includes(from) : false
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
    autoreadsw = true
    const content = JSON.stringify(m.message)
    const q = args.join(' ')
    const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
    autoreadsw = true;
    _sewa.expiredCheck(iris, sewa);

    
    // ====== reply module ====== //
    let venox = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "displayName": "IRIS-MD","vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=8801853262586:8801853262586\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" };
    
    const reply = (teks) => {
       iris.sendMessage(m.chat, { text: teks, contextInfo: { externalAdReply: {
         title: info.BotName,
         body: `Iris-Md Whatsapp-Bot 🍀`,
         sourceUrl: global.channel,
         mediaUrl: "",
         mediaType: 1,
         showAdAttribution: true,
         renderLargerThumbnail: false,
         thumbnailUrl: `https://i.ibb.co/G35jn3J/bot2p.jpg` }}}, { quoted: venox });
    };



    // ==== Functions ==== //
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const senderNumber = sender.split('@')[0]
    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1;
    }

    if (m.message) {
      addBalance(m.sender, randomNomor(574), balance);
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
        "\n" +
        chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
    }

    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./lib/storage/user/user.json", JSON.stringify(pendaftar));
    }

  // === Function Wapresence === //
  if (global.autoreadgc) {
  if (command) {
    await iris.sendPresenceUpdate('composing', m.chat);
    const keysToMarkAsRead = [
      {
        remoteJid: m.chat,
        id: m.key.id,
        participant: m.sender,
      },
    ];
    await iris.readMessages(keysToMarkAsRead);
  }
}

if (global.autoRecord) {
  if (m.chat) {
    iris.sendPresenceUpdate("recording", m.chat);
  }
}

if (global.autoTyping) {
  if (m.chat) {
    iris.sendPresenceUpdate("composing", m.chat);
  }
}

if (global.available) {
  if (m.chat) {
    iris.sendPresenceUpdate("available", m.chat);
  }
}

//----------------------------------------------------------------------------------------------------
for (let botto of venoxaudio) {
  if (budy === botto) {
    try {
      let result = fs.readFileSync(`./lib/assets/audio/${botto}.mp3`);
      iris.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    } catch (error) {
      console.error(error);
    }
  }
}
//----------------------------------------------------------------------------------------------------
if (AntiLinkAll) {
  var rondonxk = '[-a-zA-Z0-9@:%._+~#=].[-a-zA-Z0-9@:%._+~#=].[-a-zA-Z0-9()@:%_+.~#?&/=]';
  if (budy.includes("https://") || budy.includes("http://")) {
    if (!isBotAdmins) return;
    const bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by admin so no action will be taken!`;
    if (isAdmins || m.key.fromMe || isCreator) return reply(bvl);
    const kice = m.sender;
    await iris.sendMessage(
      from,
      {
        delete: {
          remoteJid: from,
          id: m.id,
          participant: m.sender,
        },
      },
      {
        quoted: m,
      }
    );
    await iris.sendMessage(from, { text: `\`\`\`「  Antilink System  」\`\`\`\n\n*⚠️ Group link detected!*\n\n*🚫@${kice.split("@")[0]} You are not allowed to send any links in this group!*\n`, contextInfo: { mentionedJid: [kice] } }, { quoted: m });
  }
}
//----------------------------------------------------------------------------------------------------
this.game = this.game || {};
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state === 'PLAYING');

if (room) {
  let isWin = false;
  let isTie = false;
  let isSurrender = false;

  if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return;

  isSurrender = !/^[1-9]$/.test(m.text);

  if (m.sender !== room.game.currentTurn && !isSurrender) return;

  let ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1);
  if (!isSurrender && ok < 1) {
    reply({
      '-3': 'Game Has Ended',
      '-2': 'Invalid',
      '-1': 'Invalid Position',
      '0': 'Invalid Position',
    }[ok]);
    return;
  }

  if (m.sender === room.game.winner) isWin = true;
  else if (room.game.board === 511) isTie = true;

  let arr = room.game.render().map(v => ({
    'X': '❌',
    'O': '⭕',
    '1': '1️⃣',
    '2': '2️⃣',
    '3': '3️⃣',
    '4': '4️⃣',
    '5': '5️⃣',
    '6': '6️⃣',
    '7': '7️⃣',
    '8': '8️⃣',
    '9': '9️⃣',
  }[v]));

  if (isSurrender) {
    room.game._currentTurn = m.sender === room.game.playerX;
    isWin = true;
  }

  let winner = isSurrender ? room.game.currentTurn : room.game.winner;
  let str = `Room ID: ${room.id}\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\nTyped *surrender* to surrender and admit defeat`;

  if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat;

  if (room.x !== room.o) {
    await iris.sendText(room.x, str, m, { mentions: parseMention(str) });
  }
  await iris.sendText(room.o, str, m, { mentions: parseMention(str) });

  if (isTie || isWin) {
    delete this.game[room.id];
  }
}
//----------------------------------------------------------------------------------------------------
const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const smallinput = budy.toLowerCase();
const prefix = global.prefa

const greetings = {
  'hello': `🌟 Hello ${pushname}, I am ${BotName}. How can I assist you today? 🤖`,
  'hi': `🌈 Hi ${pushname}, did it hurt? When you fell from heaven? 😊`,
  'hey': `🌼 Hey there ${pushname}, are you a magician? Because whenever I look at you, everyone else disappears. 🎩✨`,
  'how are you': `🌟 Hey ${pushname}, do you believe in love at first sight, or should I walk by again? 😏`,
  'commands': `📋 Sure! Here are some available commands:\n- ${prefix}help: Display available commands.\n- ${prefix}weather [city]: Get the weather forecast for a specific city.\n- ${prefix}joke: Get a random joke.\n- ${prefix}quote: Get a random quote.\n- ${prefix}news: Get the latest news headlines.\n- ${prefix}translate [text]: Translate text to another language. ℹ️`,
  'good morning': `🌞 Good morning, ${pushname}! Did you have lucky charms for breakfast? Because you look magically delicious! 🍀😉`,
  'ohayo': `🌅 Ohayo ${pushname}! Are you made of copper and tellurium? Because you're Cu-Te! 😊`,
  'konichiwa': `🌸 Konichiwa ${pushname}! Are you a time traveler? Because I can't imagine my future without you. ⏳💕`,
  'good afternoon': `🌤️ Good afternoon, ${pushname}! Are you a parking ticket? Because you have "fine" written all over you. 😉`,
  'good evening': `🌙 Good evening, ${pushname}! If you were a vegetable, you'd be a cute-cumber! 🥒😄`,
  'good night': `🌟 Good night, ${pushname}! Are you tired? Because you've been running through my mind all day. 💭😴`,
  'sweet dreams': `🌠 Sweet dreams, ${pushname}! I hope your dreams are as sweet as you are! 🌈✨`,
  'venox': `Sensei is sleeping, and I lost connection with him... 🌌`,
};

for (const [keyword, response] of Object.entries(greetings)) {
  if (smallinput.includes(keyword)) {
    reply(response);
    break;
  }
}
//----------------------------------------------------------------------------------------------------
switch (command) {
  
