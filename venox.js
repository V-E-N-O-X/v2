process.on("uncaughtException", console.error);
const global = require('./info.js');

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
//------------------------------------------------------------------
const nsfwCommands = {
  'ahegao': 'ahegao.json',
  'ass': 'ass.json',
  'bdsm': 'bdsm.json',
  'blowjob': 'blowjob.json',
  'cuckold': 'cuckold.json',
  'cum': 'cum.json',
  'eba': 'eba.json',
  'ero': 'ero.json',
  'femdom': 'femdom.json',
  'foot': 'foot.json',
  'gangbang': 'gangbang.json',
  'glasses': 'glasses.json',
  'hentai': 'hentai.json',
  'jahy': 'pussy.json',
  'mangansfw': 'manga.json',
  'masturbation': 'masturbation.json',
  'milf': 'milf.json',
  'neko': 'neko.json',
  'neko2': 'neko2.json',
  'nsfwloli': 'nsfwloli.json',
  'orgy': 'orgy.json',
  'panties': 'panties.json',
  'pussy': 'pussy.json',
  'tentacles': 'tentacles.json',
  'thighs': 'thighs.json'
};

//-------------------------------[ Cases ]-----------------------------------

for (let command in nsfwCommands) {
  switch (command) {
    case 'ahegao':
    case 'ass':
    case 'bdsm':
    case 'blowjob':
    case 'cuckold':
    case 'cum':
    case 'eba':
    case 'ero':
    case 'femdom':
    case 'foot':
    case 'gangbang':
    case 'glasses':
    case 'hentai':
    case 'jahy':
    case 'mangansfw':
    case 'masturbation':
    case 'milf':
    case 'neko':
    case 'neko2':
    case 'nsfwloli':
    case 'orgy':
    case 'panties':
    case 'pussy':
    case 'tentacles':
    case 'thights':
      if (isBan || isBanChat || !m.isGroup || !AntiNsfw) return;
      iris.sendMessage(from, { react: { text: "🥵", key: m.key } });
      
      var nsfwdata = JSON.parse(fs.readFileSync(`./lib/media/nsfw/${nsfwCommands[command]}`));
      var numberOfPictures = 3;

      function getRandomPictures(array, count) {
        var shuffled = array.slice();
        var i = array.length;
        var min = i - count;
        var temp;
        var index;

        while (i-- > min) {
          index = Math.floor((i + 1) * Math.random());
          temp = shuffled[index];
          shuffled[index] = shuffled[i];
          shuffled[i] = temp;
        }

        return shuffled.slice(min);
      }

      var selectedPictures = getRandomPictures(nsfwdata, numberOfPictures);

      for (let picture of selectedPictures) {
        iris.sendMessage(m.chat, { caption: mess.success, image: { url: picture.url } }, { quoted: m });
      }
      break;

    default:
      if (isBan || isBanChat || !m.isGroup || !AntiNsfw) return;
      iris.sendMessage(from, { react: { text: "🥵", key: m.key } });

      var nsfwdata = JSON.parse(fs.readFileSync(`./lib/media/nsfw/${nsfwCommands[command]}`));
      var venoxresult = pickRandom(nsfwdata);
      iris.sendMessage(m.chat, { caption: mess.success, image: { url: venoxresult.url } }, { quoted: m });
      break;
  }
}
//-------------------------------------------------------------------
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

    await iris.sendMessage('@g.us', { text: reportMessage, mentions: groupAdmins }, { quoted: m });

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
case 'rob': case 'attack':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)

        {
          iris.sendMessage(from, { react: { text: "🔪", key: m.key } })
          if (!text) return reply(`Use ${prefix}rob @user`)
          const target =
            m.quoted && m.mentionedJid.length === 0
              ? m.quoted.sender
              : m.mentionedJid[0] || null;
          if (!target || target === m.sender) return reply("what are you trying to do!")
          if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
          while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
          const cara = "cara"
          const user1 = m.sender
          const user2 = target
          const k = 250
          const balance1 = await eco.balance(user1, cara)
          const balance2 = await eco.balance(user2, cara)
          const typ = ['ran', 'rob', 'caught'];
          const random = typ[Math.floor(Math.random() * typ.length)];
          if (k > balance1.wallet) return reply(`☹️ You dont have enough money to pay incase you get caught`);
          if (k > balance2.wallet) return reply(`Sorry, your victim is too poor 🤷🏽‍♂️ let go.`);
          let tpy = random
          switch (random) {
            case 'ran':
              await reply(`Your victim escaped, be more scary☠️ next time.`)
          }
        }
        break;
//----------------------------------------------------------------------------------
      case 'transfer': case 'give': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)
        iris.sendMessage(from, { react: { text: "🗿", key: m.key } })

        let value = text.trim().split(" ");
        if (value[0] === "") return reply(`Use ${prefix}transfer 100 @user`);
        const target =
          m.quoted && m.mentionedJid.length === 0
            ? m.quoted.sender
            : m.mentionedJid[0] || null;
        if (!target || target === m.sender) return reply("what are you trying to do!")
        if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
        const word = value[0];
        const code = value[1];
        let d = parseInt(word)
        if (!d) return reply("check your text plz u r using the command in a wrong way")

        const balance = await eco.balance(user1, cara);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
        if (a == true) return reply("you dont have sufficient money to transfer");

        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        reply(`📠 Transaction successful`)

      }
        break;
//----------------------------------------------------------------------------------
      case 'wealth': case 'ritual': {
        if (!isCreator) return reply(mess.botowner)
        var user = m.sender
        var cara = 'cara'
        const give1 = eco.give(user, cara, 9999)
        reply(`You are the wealthiest my *Lord*`)
      }
        break;
//----------------------------------------------------------------------------------
case 'gamble': case 'lottery':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)
        {
          var texts = text.trim().split(" ");
          var opp = texts[1];
          var value = texts[0].toLowerCase();
          var gg = parseInt(value)
          var user = m.sender
          const cara = 'cara'
          const balance = await eco.balance(user, cara);
          const g = (balance.wallet) > parseInt(value)
          const k = 50
          const a = (k) > parseInt(value)
          const twice = gg * 2
          const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
          const r = f[Math.floor(Math.random() * f.length)]
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return reply(mess.grouponly)
          //if (link1 == link2){
          if (texts[0] === "")
            return reply(
              `Example:  ${prefix}gamble 100 direction(left,right,up,down)`
            );
          if (!value) return reply("*Please, specify the amount you are gambling with!");
          if (!opp) return reply("Specify the direction you are betting on!");
          if (!gg) return reply("Check your text please, You are using the command in a wrong way")
          if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          if (g == false) return reply(`You dont have sufficient 💎 Diamond to gamble with`);
          if (a == true) return reply(`Sorry ${pushname}, you can only gamble with more than 💎50.`);
          if (r == opp) {
            let give = await eco.give(user, cara, twice);
            reply(`*📉 You won 💎${twice}*`)
          }
          else {
            let deduct = await eco.deduct(user, cara, texts[0]);
            reply(`*📈 You lost 💎${texts[0]}*`)
          }
        }
        break;
//----------------------------------------------------------------------------------
case 'slot': case 'spin': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);

    var today = new Date();
    if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0) {
        if (text == 'help') return reply(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💎100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`);
        if (text == 'money') return reply(`*1:* Small Win --> +💎20\n\n*2:* Small Lose --> -💎20\n\n*3:* Big Win --> +💎100\n\n*4:* Big Lose --> -💎50\n\n*5:* 🎉 JackPot --> +💎1000`);

        const fruit1 = ["🥥", "🍎", "🍇"];
        const fruit2 = ["🍎", "🍇", "🥥"];
        const fruit3 = ["🍇", "🥥", "🍎"];
        const fruit4 = ["🍇", "🥥", "🍎"];
        const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_'];
        const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_'];
        const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_'];
        const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_'];
        const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💎1000*'];

        const user = m.sender;
        const cara = "cara";
        const k = 100;
        const balance1 = await eco.balance(user, cara);

        if (k > balance1.wallet) return reply(`You are going to be spinning on your wallet, you need at least 💎100`);

        const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
        const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
        const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
        const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];

        const mess1 = lose[Math.floor(Math.random() * lose.length)];
        const mess2 = won[Math.floor(Math.random() * won.length)];
        const mess3 = near[Math.floor(Math.random() * near.length)];
        const mess4 = jack[Math.floor(Math.random() * jack.length)];
        const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];

        if ((f1 !== f2) && f2 !== f3) {
            const deduct1 = await eco.deduct(user, cara, 50);
            reply(`${mess1}\n\n*Big Lose -->* _💎50_`);
        } else if ((f1 === f2) && f2 === f3) {
            const give1 = await eco.give(user, cara, 100);
            reply(`${mess2}\n*_Big Win -->* _💎100_`);
        } else if ((f1 === f2) && f2 !== f3) {
            const give2 = await eco.give(user, cara, 20);
            reply(`${mess3}\n*Small Win -->* _💎20_`);
        } else if ((f1 !== f2) && f1 === f3) {
            const deduct2 = await eco.deduct(user, cara, 20);
            reply(`${mess5}\n\n*Small Lose -->* _💎20_`);
        } else if ((f1 !== f2) && f2 === f3) {
            const give4 = await eco.give(user, cara, 20);
            reply(`${mess3}\n\n*Small Win -->* _💎20_`);
        } else if (((f1 === f2) && f2 === f3) && f3 === f4) {
            const give5 = await eco.give(user, cara, 1000);
            reply(`${mess4}\n\n_🎊 JackPot -->_ 💎1000_`);
        } else {
            reply(`Do you understand what you are doing?`);
        }
    } else {
        reply(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`);
    }
}
break;
//----------------------------------------------------------------------------------
case 'limituser': case 'userlimit': case 'limit':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        {
          let txt = `「 *All User Limit* 」\n\n`
          for (let i of _limit) {
            txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
          }
          reply(txt)
        }
        break;
//----------------------------------------------------------------------------------
case 'film': case 'movie': case 'moviesearch':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting)
        if (!q) return reply(`Please enter a Movie search term...\nExample: ${prefix}movie openheimar`)
        xfarrapi.Film(q)
          .then(data => {
            console.log(data)
            let krl = `*Search Term:* ${q}\n\n`
            for (let i of data) {
              krl += (`${prefix}----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
            }
            iris.sendMessage(from, { image: { url: data[0].thumb }, caption: krl }, { quoted: fdocs })
          });
        break;
//----------------------------------------------------------------------------------
case 'wallpaper':
case 'animewallpaper':
case 'animewall': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    reply(mess.waiting);
    iris.sendMessage(from, { react: { text: "🥵", key: m.key } });

    if (!args.join(" ")) return reply("Please enter a term to search!");

    const { AnimeWallpaper } = require("anime-wallpaper");
    const wall = new AnimeWallpaper();
    const pages = [1, 2, 3, 4];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    const wallpapers = await wall.getAnimeWall4({ title: args.join(" "), type: "sfw", page: randomPage }).catch(() => []);

    const maxImagesToSend = 15;
    const minImagesToSend = 5;
    const imagesToSend = Math.min(maxImagesToSend, Math.max(minImagesToSend, wallpapers.length));

    for (let i = 0; i < imagesToSend; i++) {
        let message = {
            image: { url: wallpapers[i].image },
            footer: BotName,
            headerType: 4
        };
        iris.sendMessage(m.chat, message, { quoted: m });
    }
}
break;
//----------------------------------------------------------------------------------
case 'wikimedia':
case 'wikiimage': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!args.join(" ")) return reply("What picture are you looking for??");

    let { wikimedia } = require('./lib/scraper');
    const results = await wikimedia(args.join(" "));
    const result = results[Math.floor(Math.random() * results.length)];

    let buttons = [
        { buttonId: `${prefix}wikimedia ${args.join(" ")}`, buttonText: { displayText: 'Next Image' }, type: 1 }
    ];

    let buttonMessage = {
        image: { url: result.image },
        caption: `Title: ${result.title}\nSource: ${result.source}\nMedia Url: ${result.image}`,
        footer: BotName,
        buttons: buttons,
        headerType: 4
    };

    iris.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case 'quotesimagexxx':
case 'qoutesimagexxx':
case 'quoteimage': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    const cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`);
    reply(mess.waiting);
    iris.sendMessage(m.chat, { image: { url: cok }, caption: 'Here it is...' }, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case 'quotesanime':
case 'animequotes': {
    let { quotesAnime } = require('./lib/scraper');
    const results = await quotesAnime();
    const result = results[Math.floor(Math.random() * results.length)];

    let buttonMessage = {
        text: `_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
    };

    iris.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case 'animestory': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    reply(mess.waiting);

    try {
        const res = await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`);
        const sections = [];

        for (let i of res.data) {
            const list = {
                title: `${i.title}`,
                rows: [
                    {
                        title: `${i.title}\n\n`,
                        rowId: `${prefix}animesearch ${i.mal_id}`,
                        description: `${i.synopsis}`
                    },
                ]
            };
            sections.push(list);
        }

        const sendm = await iris.sendMessage(
            from,
            {
                text: "Anime Search",
                footer: BotName,
                title: OwnerName,
                buttonText: "Search Results",
                sections
            },
            { quoted: m }
        );
    } catch (err) {
        console.error(err);
        reply("An error occurred while fetching anime data.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'poll': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);

    let [poll, opt] = text.split("|");
    if (!poll || !opt || opt.split(",").length < 2) {
        return await reply(`Mention a question and at least 2 options.\nExample: ${prefix}poll Who is the best admin?|Venox,Tobi,Kai...`);
    }

    let options = opt.split(",").map(option => option.trim());

    await iris.sendMessage(m.chat, {
        poll: {
            name: poll.trim(),
            values: options,
        },
    });

    break;
}
//----------------------------------------------------------------------------------
case 'creategc': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.botowner);
    
    if (!args.join(" "))
        return reply(`Please use ${prefix + command} groupname`);
    
    try {
        let groupInfo = await iris.groupCreate(args.join(" "), []);
        let inviteCode = await iris.groupInviteCode(groupInfo.id);
        
        const groupCreationDate = moment(groupInfo.creation * 1000)
            .tz("Asia/Dhaka")
            .format("DD/MM/YYYY HH:mm:ss");

        const groupOwner = groupInfo.owner.split("@")[0];

        const createGroupMsg = `
            *Create Group*

Name: ${groupInfo.subject}
Owner: @${groupOwner}
Creation Date: ${groupCreationDate}

Join Link:
https://chat.whatsapp.com/${inviteCode}
        `;

        iris.sendMessage(m.chat, {
            text: createGroupMsg,
            mentions: await iris.parseMention(createGroupMsg),
        }, { quoted: m });

    } catch {
        reply(`An error occurred while creating the group.`);
    }
    
    break;
}
//----------------------------------------------------------------------------------
case 'quote':
case 'qt': {
    if (!args[0] && !m.quoted) {
        return m.reply(`Please provide a text (Type or mention a message)!`);
    }

    try {
        let userPfp;
        if (m.quoted) {
            userPfp = await iris.profilePictureUrl(m.quoted.sender, "image");
        } else {
            userPfp = await iris.profilePictureUrl(m.sender, "image");
        }

        const waUserName = pushname;
        const quoteText = m.quoted ? m.quoted.body : args.join(" ");

        const quoteJson = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 700,
            height: 580,
            scale: 2,
            messages: [
                {
                    entities: [],
                    avatar: true,
                    from: {
                        id: 1,
                        name: waUserName,
                        photo: {
                            url: userPfp,
                        },
                    },
                    text: quoteText,
                    replyMessage: {},
                },
            ],
        };

        const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
            headers: { "Content-Type": "application/json" },
        });

        const buffer = Buffer.from(quoteResponse.data.result.image, "base64");
        await iris.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.BotName}`,
            author: waUserName,
        });
    } catch (error) {
        console.error(error);
        m.reply("Error generating quote!");
    }
    break;
}
//----------------------------------------------------------------------------------
case 'support': case 'supportgc': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    await iris.sendMessage(from, { react: { text: "💫", key: m.key } });
    reply(`⚙ *My developers Channel:*\n📶 *ᴄʟɪᴄᴋ ʜᴇʀᴇ ғᴏʀ ʟɪɴᴋ:* » gg.gg/irisbotz`);
    break;
}
//----------------------------------------------------------------------------------
case 'owner': case 'creator': case 'mod': case 'mods': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        iris.sendMessage(from, { react: { text: "💫", key: m.key } })
        iris.sendContact(m.chat, global.Owner, m)
      }
        break;
//----------------------------------------------------------------------------------
case 'addmod':
case 'addowner':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!isCreator) return reply(mess.botowner);
  iris.sendMessage(from, { react: { text: "🛡️", key: m.key } });

  if (!args[0]) return reply(`Use ${prefix + command} number\nExample ${prefix + command} ${OwnerNumber}`);
  let bnnd = args[0].replace(/[^0-9]/g, '');
  let ceknye = await iris.isOnWhatsApp(bnnd);
  if (!ceknye) return reply(`Enter a valid and registered number on WhatsApp!`);
  Owner.push(bnnd);
  fs.writeFileSync('./lib/database/mod.json', JSON.stringify(Owner));
  reply(`Number ${bnnd} has become an owner!`);
  break;
//----------------------------------------------------------------------------------
case 'delowner':
case 'delmod':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!isCreator) return reply(mess.botowner);
  iris.sendMessage(from, { react: { text: "🛡️", key: m.key } });

  if (!args[0]) return reply(`Use ${prefix + command} number\nExample ${prefix + command} 8801975492880`);
  let ya = args[0].replace(/[^0-9]/g, '');
  let unp = Owner.indexOf(ya);
  if (unp !== -1) {
    Owner.splice(unp, 1);
    fs.writeFileSync('./lib/database/mod.json', JSON.stringify(Owner));
    reply(`The number ${ya} has been deleted from the owner list!`);
  } else {
    reply(`The number ${ya} is not in the owner list!`);
  }
  break;
//----------------------------------------------------------------------------------
case 'modlist':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!isCreator) return reply(mess.botowner);
  iris.sendMessage(from, { react: { text: "🛡️", key: m.key } });

  try {
    const modData = fs.readFileSync('./lib/database/mod.json', 'utf8');
    const mods = JSON.parse(modData);

    if (mods.length === 0) {
      reply('There are no mods in the list.');
    } else {
      let modList = '';

      mods.forEach((mod, index) => {
        modList += `(${index + 1}) ${iris.getName(mod)}\n`;
      });

      reply(`List of moderators:\n\n${modList}`);
    }
  } catch (error) {
    console.error(error);
    reply('Failed to fetch mod list.');
  }
  break;
//----------------------------------------------------------------------------------
case 'setbotpp':
  if (!isCreator) return reply(mess.botowner);
  if (isBanChat) return reply(mess.bangc);
  iris.sendMessage(from, { react: { text: "🫡", key: m.key } });

  if (!quoted) return `Send/reply with an image with caption: ${prefix + command}`;
  if (!/^image/.test(mime)) return `Send/reply with an image with caption: ${prefix + command}`;
  if (/webp/.test(mime)) return `Send/reply with an image with caption: ${prefix + command}`;
  let media = await iris.downloadAndSaveMediaMessage(quoted);
  await iris.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media));
  reply(mess.jobdone);
  break;
//----------------------------------------------------------------------------------
case 'chatgpt':
case 'ai':
case 'gpt':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);

  const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
  iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

  if (!q) return reply(`Please provide a text query. Example: ${prefix + command} Hello, ChatGPT!`);

  try {
    const apiUrl = `https://api.maher-zubair.tech/ai/chatgptv4?q=${encodeURIComponent(q)}`;

    const response = await fetch(apiUrl);
    const responseData = await response.json();

    if (response.status === 200 && responseData && responseData.status === true && responseData.data) {
      const message = responseData.data;
      const me = m.sender;
      await iris.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });
    } else {
      return reply("Sorry, I couldn't fetch a response from the API at the moment.");
    }
  } catch (error) {
    console.error(error);
    reply("An error occurred while fetching the response from the API.");
  }
  break;
//----------------------------------------------------------------------------------
case 'dalle':
case 'imgai': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    await iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

    if (!q) return reply(`Please provide a query to generate an image. Example: ${prefix + command} Beautiful landscape`);

    const apiUrl = `https://api.maher-zubair.tech/ai/dalle?q=${encodeURIComponent(q)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch image from the API");
        
        const imageData = await response.buffer();
        await iris.sendMessage(m.chat, { image: imageData }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply("An error occurred while generating the image.");
    }
}
break;

//----------------------------------------------------------------------------------
case 'mathai':
case 'mathsai': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    await iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

    if (!q) return reply(`What is your Question?`);

    try {
        const response = await fetch(`https://api.maher-zubair.tech/ai/mathssolve?q=${encodeURIComponent(q)}`);
        if (!response.ok) throw new Error("Failed to fetch response from the API");
        
        const data = await response.json();
        if (!data.result) throw new Error("Failed to get response. Please try again later");

        reply(data.result);
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'bardai':
case 'bard': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    await iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

    if (!q) return reply(`What is your Question?`);

    try {
        const response = await fetch(`https://api.maher-zubair.tech/ai/bard?q=${encodeURIComponent(q)}`);
        if (!response.ok) throw new Error("Failed to fetch response from the API");

        const data = await response.json();
        if (!data.result) throw new Error("Failed to get response. Please try again later");

        reply(data.result);
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'blackboxai':
case 'bbai': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    await iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

    if (!q) return reply(`What is your Question?`);

    try {
        const response = await fetch(`https://api.maher-zubair.tech/ai/blackboxv4?q=${encodeURIComponent(q)}`);
        if (!response.ok) throw new Error("Failed to fetch response from the API");

        const data = await response.json();
        if (!data.result) throw new Error("Failed to get response. Please try again later");

        reply(data.result);
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'photoleapai': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    await iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

    if (!q) return reply(`What is your Question?`);

    try {
        const response = await fetch(`https://api.maher-zubair.tech/ai/photoleap?q=${encodeURIComponent(q)}`);
        if (!response.ok) throw new Error("Failed to fetch response from the API");

        const data = await response.json();
        if (!data.result) throw new Error("Failed to get response. Please try again later");

        reply(data.result);
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'lamaai': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    await iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

    if (!q) return reply(`What is your Question?`);

    try {
        const response = await fetch(`https://api.maher-zubair.tech/ai/llama-2?q=${encodeURIComponent(q)}`);
        if (!response.ok) throw new Error("Failed to fetch response from the API");

        const data = await response.json();
        if (!data.result) throw new Error("Failed to get response. Please try again later");

        reply(data.result);
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'gemini': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);

    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    await iris.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

    if (!q) return reply(`What is your Question?`);

    try {
        const response = await fetch(`https://api.maher-zubair.tech/ai/gemini?q=${encodeURIComponent(q)}`);
        if (!response.ok) throw new Error("Failed to fetch response from the API");

        const data = await response.json();
        if (!data.result) throw new Error("Failed to get response. Please try again later");

        reply(data.result);
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'gcsetting':
case 'groupsetting': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    await iris.sendMessage(from, { react: { text: "🫡", key: m.key } });

    const commands = [
        ['group open', 'group close'],
        ['leveling on', 'leveling off'],
        ['antilinkgc on', 'antilinkgc off'],
        ['antilinktg on', 'antilinktg off'],
        ['antilinktt on', 'antilinktt off'],
        ['antilinkytch on', 'antilinkytch off'],
        ['antilinkytvid on', 'antilinkytvid off'],
        ['antilinkig on', 'antilinkig off'],
        ['antilinkfb on', 'antilinkfb off'],
        ['antilinktwit on', 'antilinktwit off'],
        ['antilinkall on', 'antilinkall off'],
        ['antiwame on', 'antiwame off']
    ];

    const listTitles = [
        'Group open/close',
        'Leveling on/off',
        'Antilink Group on/off',
        'Antilink Telegram on/off',
        'Antilink Tiktok on/off',
        'Antilink Youtube Channel on/off',
        'Antilink Youtube Video on/off',
        'Antilink Instagram on/off',
        'Antilink Facebook on/off',
        'Antilink Twitter on/off',
        'Antilink All on/off',
        'Anti Wame on/off'
    ];

    const descriptions = ['Activate', 'Deactivate'];
    const featureNames = [
        'Group', 'Leveling', 'Auto Sticker', 'Antilink Group',
        'Antilink Telegram', 'Antilink Tiktok', 'Antilink Youtube Channel',
        'Antilink Youtube Video', 'Antilink Instagram', 'Antilink Facebook',
        'Antilink Twitter', 'Antilink All', 'Anti Wame', 'Auto Revoke'
    ];

    let sections = [];

    commands.forEach((commandPair, index) => {
        const [commandOn, commandOff] = commandPair;
        const section = {
            title: listTitles[index],
            rows: [
                {
                    title: descriptions[0],
                    description: `Activate ${featureNames[index]}`,
                    rowId: `${prefix}${commandOn}`
                },
                {
                    title: descriptions[1],
                    description: `Deactivate ${featureNames[index]}`,
                    rowId: `${prefix}${commandOff}`
                }
            ]
        };
        sections.push(section);
    });

    try {
        await iris.sendMessage(from, {
            text: "Group Settings",
            sections
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply("An error occurred while sending the message.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'emojimix': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    await iris.sendMessage(from, { react: { text: "🫡", key: m.key } });

    if (!q) return reply(`*Example:* ${prefix + command} 😊+🌹`);
    
    const [emoji1, emoji2] = q.split("+");

    try {
        const response = await fetch(`https://tenor.googleapis.com/v2/featured?key=API_KEY_HERE&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            return reply("Failed to find mixed emoji.");
        }

        for (const result of data.results) {
            const encmedia = await iris.sendImageAsSticker(from, result.url, m, { packname: global.packname, author: global.author, categories: result.tags });
            await fs.unlinkSync(encmedia);
        }
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing your request.");
    }
}
break;
//----------------------------------------------------------------------------------
case 'nsfw': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.grouponly);
    if (!isBotAdmins) return reply(mess.botadmin);
    if (!isAdmins && !isCreator) return reply(mess.useradmin);
    await iris.sendMessage(from, { react: { text: "⚠️", key: m.key } });

    if (args[0] === "on") {
        if (ntnsfw.includes(from)) return reply('NSFW commands are already enabled in this group.');
        ntnsfw.push(from);
        reply('Enabled NSFW commands in this group!');
    } else if (args[0] === "off") {
        if (!ntnsfw.includes(from)) return reply('NSFW commands are already disabled in this group.');
        const index = ntnsfw.indexOf(from);
        if (index !== -1) ntnsfw.splice(index, 1);
        reply('Disabled NSFW commands in this group!');
    } else {
        reply(`NSFW (not safe for work) feature is currently ${ntnsfw.includes(from) ? 'enabled' : 'disabled'} in this group.\n\nTo enable NSFW commands, use *'${prefix}nsfw on'*.\nTo disable NSFW commands, use *'${prefix}nsfw off'*.`);
    }
}
break;
} // remove this '{'
//----------------------------------------------------------------------------------
