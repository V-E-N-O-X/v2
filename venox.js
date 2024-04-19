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
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser,getAggregateVotesInPollMessage, getContentType, MessageType } = require('@whiskeysockets/baileys')
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
//--------------------------------------------------------------------------------
async function loading() {
    var loadingSteps = [
        "```🌑 Initializing...```",
        "```🌘 Loading modules...```",
        "```🌗 Setting up environment...```",
        "```🌖 Fetching data...```",
        "```🌕 Finalizing...```",
        "```C o m p l e t e...!```🚀",
    ];
    let { key } = await iris.sendMessage(from, {
        text: "ʟᴏᴀᴅɪɴɢ...",
    });

    for (let i = 0; i < loadingSteps.length; i++) {
        await iris.sendMessage(from, { text: loadingSteps[i], edit: key });
    }
}
//-------------------------------[ Cases ]-----------------------------------
switch (command) {

case 'changeprefix':
case 'setprefix': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);

    iris.sendMessage(from, { react: { text: "🍀", key: m.key } });

    if (args.length !== 1) {
        return m.reply(`Please provide a single character as the new prefix.`);
    } else {
        const newPrefix = args[0];
        try {
            global.prefa[0] = newPrefix;
            return m.reply(`${pushname}, prefix changed successfully to "${newPrefix}"`);
        } catch (error) {
            return m.reply(`An error occurred while changing the prefix. Please try again later.`);
        }
    }
    break;
}
//----------------------------------------------------------------------------------
  case 'restart': 

        await iris.sendMessage(from, { react: { text: "⚙", key: m.key } });
        if (!isCreator) return reply(mess.botowner)

        await iris.sendMessage(from, { text: mess.waiting });
        await iris.sendMessage(from, { react: { text: "✅", key: m.key } });
        await iris.sendMessage(from, { text: 'Restarting Success!' });
        pm2.restart('index', (err) => {
          if (err) {
            iris.sendMessage(from, { react: { text: "❌", key: m.key } });
            iris.sendMessage(from, { text: 'Restarting Failed!' });
          } else {
            return;
          }
        });
        break;
//----------------------------------------------------------------------------------
case 'shutdown': case 'sleep':

        if (!isCreator) return reply(mess.owner)
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.owner)
        await iris.sendMessage(from, { react: { text: "⚠️", key: m.key } })

        reply(`Tata its time to sleep!`)
        await sleep(5000)
        process.exit()
        break;
//----------------------------------------------------------------------------------
case 'public': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.owner)
        iris.sendMessage(from, { react: { text: "🫡", key: m.key } })

        iris.public = true
        reply('I am now Publicly accessable!')
        iris.setStatus(`Mode : Public`)
      }
        break;
//----------------------------------------------------------------------------------
case 'self': {
  
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        iris.sendMessage(from, { react: { text: "🫡", key: m.key } })
        iris.public = false
        reply('Only Owner can use me now!')
        iris.setStatus(`Mode : Self`)
      }
        break;
//----------------------------------------------------------------------------------
case 'autoreadgc':
case 'auto-read-gc':
case 'readgc':

    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
    iris.sendMessage(from, { react: { text: '❤', key: m.key } });

    if (args.length === 0) {
        return m.reply(`Auto-Read-GC is currently ${global.autoreadgc ? 'enabled' : 'disabled'}.`);
    } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
        const status = args[0];
        if (status === 'on') {
            global.autoreadgc = true;
            return m.reply('Auto-Read-GC is now enabled.');
        } else {
            global.autoreadgc = false;
            return m.reply('Auto-Read-GC is now disabled.');
        }
    } else {
        return m.reply(`Usage: ${global.prefa[0]}autoreadgc [on/off]`);
    }
    break;
//----------------------------------------------------------------------------------
case 'autotyping':
case 'auto-typing':

    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
    iris.sendMessage(from, { react: { text: '❤', key: m.key } });

    if (args.length === 0) {
        if (global.autoTyping) {
            return m.reply(`Auto typing in group chats is currently *enabled*.\n\nTo disable, use \`${global.prefa[0]}autotyping off\`.`);
        } else {
            return m.reply(`Auto typing in group chats is currently *disabled*.\n\nTo enable, use \`${global.prefa[0]}autotyping on\`.`);
        }
    } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
        const status = args[0];
        if (status === 'on') {
            global.autoTyping = true;
            return m.reply(`Auto typing in group chats is now *enabled*.`);
        } else {
            global.autoTyping = false;
            return m.reply(`Auto typing in group chats is now *disabled*.`);
        }
    } else {
        return m.reply(`Usage: \`${global.prefa[0]}autotyping [on/off]\``);
    }
    break;
//----------------------------------------------------------------------------------
case 'autorecord':
case 'auto-recording':

    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
    iris.sendMessage(from, { react: { text: '❤', key: m.key } });

    if (args.length === 0) {
        if (global.autoRecord) {
            return m.reply(`Auto recording is currently *enabled*.\n\nTo disable, use \`${global.prefa[0]}autorecord off\`.`);
        } else {
            return m.reply(`Auto recording is currently *disabled*.\n\nTo enable, use \`${global.prefa[0]}autorecord on\`.`);
        }
    } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
        const status = args[0];
        if (status === 'on') {
            global.autoRecord = true;
            return m.reply(`Auto recording is now *enabled*.`);
        } else {
            global.autoRecord = false;
            return m.reply(`Auto recording is now *disabled*.`);
        }
    } else {
        return m.reply(`Usage: \`${global.prefa[0]}autorecord [on/off]\``);
    }
    break;
//----------------------------------------------------------------------------------
case 'setimgmenu':

    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
    iris.sendMessage(from, { react: { text: '🌸', key: m.key } });

    try {
        let delb = await iris.downloadAndSaveMediaMessage(quoted);
        await fsx.copy(delb, "./lib/assets/iris3.jpg");
        fs.unlinkSync(delb);
        return reply(mess.done);
    } catch (error) {
        console.error('Error setting image menu:', error);
        return reply(`An error occurred while setting the image menu. Please try again later.`);
    }
    break;
//----------------------------------------------------------------------------------
case 'setvidmenu':

    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
    iris.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    try {
        let delb = await iris.downloadAndSaveMediaMessage(quoted);
        await fsx.copy(delb, "./lib/system/iris_2.mp4");
        fs.unlinkSync(delb);
        return reply(mess.done);
    } catch (error) {
        console.error('Error setting vid menu:', error);
        return reply(`An error occurred while setting the video menu. Please try again later.`);
    }
    break;
//----------------------------------------------------------------------------------
case 'myip':
case 'ipbot':

    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
    iris.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    var http = require("http");
    http.get(
        {
            host: "api.ipify.org",
            port: 80,
            path: "/",
        },
        function (resp) {
            resp.on("data", function (ip) {
                reply("🔎 My public IP address is: " + ip);
            });
        }
    );
    break;
//----------------------------------------------------------------------------------
case "repo":
case "repository": {
    try {
        const [, username, repoName] = botscript.match(
            /github\.com\/([^/]+)\/([^/]+)/
        );
        const response = await axios.get(
            `https://api.github.com/repos/V-E-N-O-X/IRIS-MD`
        );
        if (response.status === 200) {
            const repoData = response.data;
            const formattedInfo = `
🔎 *Repository Information:*
📚 *Name:* ${repoData.name}
📝 *Description:* ${repoData.description}
👤 *Owner:* ${repoData.owner.login}
⭐ *Stars:* ${repoData.stargazers_count}
🍴 *Forks:* ${repoData.forks_count}

🔗 [GitHub Repository](${repoData.html_url})
`.trim();

            const message = {
                text: formattedInfo,
                parse_mode: "Markdown",
                requestPaymentMessage: {
                    currencyCodeIso4217: "USD",
                    amount1000: 69000,
                    requestFrom: m.sender,
                    noteMessage: {
                        extendedTextMessage: {
                            text: "Payment requested for repository information.",
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                },
                            },
                        },
                    },
                },
            };

            await iris.relayMessage(m.chat, message);
        } else {
            await iris.relayMessage(m.chat, {
                text: `Unable to fetch repository information`,
            });
        }
    } catch (error) {
        console.error(error);
        await iris.relayMessage(m.chat, {
            text: `Repository currently not available`,
        });
    }
    break;
}
//----------------------------------------------------------------------------------
case 'sc':
case 'script':
case 'scriptbot':
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    const githubRepoUrl = 'https://api.github.com/repos/V-E-N-O-X/IRIS-MD';

    fetch(githubRepoUrl)
        .then(response => response.json())
        .then(data => {
            const repoInfo = {
                stars: data.stargazers_count,
                forks: data.forks_count,
                lastUpdate: data.updated_at,
                owner: data.owner.login
            };

            // Format the date
            const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
            const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString('en-GB');

            const formattedInfo = `*GitHub Repository:* ${data.html_url}
⭐ *Stars:* ${repoInfo.stars}
♈ *Forks:* ${repoInfo.forks}
📅 *Release Date:* ${releaseDate}
🕐 *Last Update:* ${lastUpdateDate}
👨‍💻 *Owner:* ${repoInfo.owner}`;

            m.reply(formattedInfo);
            iris.sendPoll(m.chat, uy, [`${prefix}help`, `${prefix}myip`], {
                quoted: m
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub repository info:', error);
            m.reply('An error occurred while fetching repository information');
        });

    break;
//----------------------------------------------------------------------------------
case 'server':
case 'sysinfo': {
    const used = process.memoryUsage();
    const cpu = os.cpus()[0];
    const totalCpuUsage = ((1 - cpu.times.idle / (cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.idle)) * 100).toFixed(2);
    const systemName = `${os.platform()} ${os.release()}`;
    const totalMemory = formatBytes(os.totalmem());
    const usedMemory = formatBytes(used.rss);
    const nodeMemoryUsage = Object.entries(used).map(([key, value]) => `${key}: ${formatBytes(value)}`).join(', ');
    const cpuModel = `${cpu.model.trim()} (${cpu.speed} MHz)`;
    const uptime = secondsToDhms(process.uptime());
    const responseSpeed = latensie.toFixed(4);

    const response = `
- *🎌 ɪʀɪs-ᴍᴅ sᴇʀᴠᴇʀ ɪɴꜰᴏ 🎌* -

- *sʏsᴛᴇᴍ*-
${systemName}

- *ʀᴀᴍ*-
${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

- *ᴍᴇᴍᴏʀʏ*-
${Object.keys(used).map(key => `${key}: ${formatp(used[key])}`).join(', ')}

- *ᴄᴘᴜ*-
${totalCpuUsage}%

- *ᴄᴘᴜ ᴍᴏᴅᴇʟ*-
${cpu.model.trim()} (${cpu.speed} MHz)

- *ʀᴜɴᴛɪᴍᴇ*-
${runtime(process.uptime())}
`.trim();

        m.reply(respon);
        break;
      }
//----------------------------------------------------------------------------------
case 'ban': {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!isCreator) return m.reply(mess.botowner);
    iris.sendMessage(from, { react: { text: "🫡", key: m.key } });

    if (!args[0]) return m.reply(`Select 'add' or 'del' (add to ban, del to unban). For Example: reply *${prefix}ban add* to the user you want to ban.`);
    
    let orgnye;
    if (args[1]) {
        orgnye = args[1] + "@s.whatsapp.net";
    } else if (m.quoted) {
        orgnye = m.quoted.sender;
    } else {
        return m.reply(`Please specify the user to ban.`);
    }
    
    const isBanned = banUser.includes(orgnye);
    
    if (args[0] === "add") {
        if (isBanned) return m.reply('User is already banned.');
        banUser.push(orgnye);
        return m.reply(`Successfully banned the user.`);
    } else if (args[0] === "del") {
        if (!isBanned) return m.reply('User is not banned.');
        const index = banUser.indexOf(orgnye);
        banUser.splice(index, 1);
        return m.reply(`Successfully unbanned the user.`);
    } else {
        return m.reply("Invalid command. Use 'add' or 'del'.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'ttc':
case 'ttt':
case 'tictactoe': {
    if (isBan) return m.reply(mess.ban);
    if (isBanChat) return m.reply(mess.banChat);
    iris.sendMessage(from, { react: { text: "🎮", key: m.key } });

    let TicTacToe = require("./lib/tictactoe");
    this.game = this.game ? this.game : {};

    const playerInGame = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
    if (playerInGame) return m.reply(`${pushname} You are still in a game...`);

    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
    if (room) {
        m.reply(`Hey ${pushname}, your partner is found!`);
        room.o = m.chat;
        room.game.playerO = m.sender;
        room.state = 'PLAYING';
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        });
        let str = `Room ID: ${room.id}\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\nWaiting @${room.game.currentTurn.split('@')[0]}\nType *surrender* to surrender and admit defeat...`;

        if (room.x !== room.o) {
            await iris.sendText(room.x, str, m, { mentions: parseMention(str) });
        }
        await iris.sendText(room.o, str, m, { mentions: parseMention(str) });
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        };
        if (text) room.name = text;
        m.reply(`Waiting for partner...${text ? ` Type the command below: ${prefix} ${command} ${text}` : ''}`);
        this.game[room.id] = room;
    }
}
break;
//----------------------------------------------------------------------------------
case 'report':
case 'suggest': {
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply(`Please provide a report message.`);
    if (text.length > 300) return m.reply(`The report message should not exceed 300 characters.`);

    const senderLink = `wa.me/${m.sender.split("@")[0]}`;
    const groupName = conn.getName(m.chat);
    const reportMessage = `*📮 Report Message*\n\n*Sender ➛* ${senderLink}\n\n*Group Name ➛* ${groupName}\n\n*Message ➛* ${text}`;

    for (let mod of global.Owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '8801853262586@s.whatsapp.net')) {
        await iris.sendMessage(mod, { text: reportMessage }, { quoted: m });
    }

    await iris.sendMessage('120363026915700516@g.us', { text: reportMessage, mentions: groupAdmins }, { quoted: m });

    m.reply(`*✅ Your report has been submitted successfully to the support group & owner.*\n\n*You will get a response shortly... ♥️*`);
    break;
}
//----------------------------------------------------------------------------------
case 'dice':
case 'roll': {
    iris.sendMessage(from, { react: { text: "🎲", key: m.key } });
    const result = Math.floor(Math.random() * 6) + 1;
    const diceMessage = `🎲 *Dice Roll Result:* ${result}`;
    reply(diceMessage);
}
break;
//----------------------------------------------------------------------------------
case 'flipcoin':
case 'coin': {
    iris.sendMessage(from, { react: { text: "🪙", key: m.key } });
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
    reply(flipCoinMessage);
}
break;
//----------------------------------------------------------------------------------
case 'rps': {
    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });
    const validMoves = ['rock', 'paper', 'scissors'];
    if (!args[0] || !validMoves.includes(args[0].toLowerCase())) {
        return reply('Please provide a valid move: rock, paper, or scissors. 🪨 📄 ✂️');
    }
    const botMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    const userMove = args[0].toLowerCase();
    let result;
    if (userMove === botMove) {
        result = 'It\'s a tie! 🤝';
    } else if (
        (userMove === 'rock' && botMove === 'scissors') ||
        (userMove === 'paper' && botMove === 'rock') ||
        (userMove === 'scissors' && botMove === 'paper')
    ) {
        result = `You win! 🥳 ${userMove} beats ${botMove}.`;
    } else {
        result = `You lose! 😞 ${botMove} beats ${userMove}.`;
    }
    reply(`You chose ${userMove}. IrisBot chose ${botMove}. ${result}`);
}
break;
//----------------------------------------------------------------------------------
case 'daily':
case 'claim':
case 'reward': {
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);
    iris.sendMessage(from, { react: { text: "💰", key: m.key } });
    let user = m.sender;
    const cara = "cara";
    const daily = await eco.daily(user, cara, 999);
    if (daily.cd) return reply(`You already claimed your daily reward for today. 🌟 Come back in ${daily.cdL}`);
    reply(`You claimed 💎${daily.amount} for your daily reward. 💎`);
}
break;
//----------------------------------------------------------------------------------
case 'wallet':
case 'purse': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);
    iris.sendMessage(from, { react: { text: "💳", key: m.key } });
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    const user = m.sender;
    const cara = "cara";
    const balance = await eco.balance(user, cara);
    reply(`💼 ${pushname}'s Wallet:\n\n_💎${balance.wallet}_`);
}
break;
//----------------------------------------------------------------------------------
case 'bank':
case 'levee': {
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);
    iris.sendMessage(from, { react: { text: "💳", key: m.key } });
    const user = m.sender;
    const cara = "cara";
    const balance = await eco.balance(user, cara);
    reply(`🏦 ${pushname}'s Bank:\n\n_💎${balance.bank}/${balance.bankCapacity}_`);
}
break;
//----------------------------------------------------------------------------------
case 'capacity':
case 'bankupgrade': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);
    iris.sendMessage(from, { react: { text: "💲", key: m.key } });
    if (!text) return reply(`💰 *Bank Capacity Upgrades* 💰\n\n1️⃣ | 1000 sp = 💎100\n\n2️⃣ | 10000 sp = 💎1000\n\n3️⃣ | 100000 sp = 💎10000\n\nExample: ${prefix}capacity 1 OR ${prefix}bankupgrade 1000`);
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    const cara = "cara";
    let value = text.trim();
    let k = parseInt(value);
    const balance = await eco.balance(user, cara);
    switch (value) {
        case '1000':
        case '1':
            if (k > balance.wallet) return reply(`You need to pay 💎100 to increase bank capacity to 1000 sp.`);
            const deduct1 = await eco.deduct(user, cara, 100);
            const add1 = eco.giveCapacity(user, cara, 1000);
            await reply(`1000 💎diamond storage has been added to ${pushname}'s bank.`);
            break;
        case '10000':
        case '2':
            if (k > balance.wallet) return reply(`You need to pay 💎1000 to increase bank capacity to 10000 sp.`);
            const deduct2 = await eco.deduct(user, cara, 1000);
            const add2 = eco.giveCapacity(user, cara, 10000);
            await reply(`10000 💎diamond storage has been added to ${pushname}'s bank.`);
            break;
        case '100000':
        case '3':
            if (k > balance.wallet) return reply(`You need to pay 💎10000 to increase bank capacity to 100000 sp.`);
            const deduct3 = await eco.deduct(user, cara, 10000);
            const add3 = eco.giveCapacity(user, cara, 100000);
            await reply(`100000 💎diamond storage has been added to ${pushname}'s bank.`);
            break;
    }
}
break;
//----------------------------------------------------------------------------------
case 'deposit':
case 'pay-in': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);
    iris.sendMessage(from, { react: { text: "📥", key: m.key } });
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (!text) return reply("Please provide the amount you want to deposit!");
    const texts = text.trim();
    const user = m.sender;
    const cara = 'cara';
    const deposit = await eco.deposit(user, cara, texts);
    if (deposit.noten) return reply('You can\'t deposit what you don\'t have.');
    reply(`💳 Successfully deposited 💎${deposit.amount} to your bank.`);
}
break;
//----------------------------------------------------------------------------------
case 'withdraw':
case 'withdrawal': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);
    iris.sendMessage(from, { react: { text: "💸", key: m.key } });
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    const user = m.sender;
    if (!text) return reply("Please provide the amount you want to withdraw!");
    const query = text.trim();
    const cara = 'cara';
    const withdraw = await eco.withdraw(user, cara, query);
    if (withdraw.noten) return reply('🏧 Insufficient funds in your bank');
    const add = eco.give(user, cara, query);
    reply(`🏧 ALERT  💎${withdraw.amount} has been added to your wallet.`);
}
break;
//----------------------------------------------------------------------------------
