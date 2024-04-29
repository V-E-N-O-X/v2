
const settings = require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const moment = require('moment-timezone')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { exec, execSync } = require('child_process')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const { default: Venox, Browsers, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys");
const NodeCache = require("node-cache")
const Pino = require("pino")
const readline = require("readline")
const { parsePhoneNumber } = require("libphonenumber-js")
const makeWASocket = require("@whiskeysockets/baileys").default
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
var sessionFolderPath = path.join(__dirname, 'lib', 'session');
var sessionPath = path.join(sessionFolderPath, '/creds.json')


const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
let phoneNumber =    process.env.PAIRING_CODE || ""
let owner = settings.ownernomer || settings.SUDO || "8801853262586";
const pairingCode =   phoneNumber || false

async function My_Sess(){
     exec('mkdir ' + sessionFolderPath)
    let code = `${global.SESSION_ID  || settings.SESSION_ID  || process.env.SESSION_ID}`.replace(/24_I_R_I_S_M_D_V_2~/g, "");
   if (code || !fs.existsSync(sessionPath) ) {
        if(code.length < 30){
            let { data } = await axios.get('https://paste.c-net.org/'+code)
            console.log({data})
            await fs.writeFileSync(sessionPath, JSON.stringify(data))
        } else if (code && code.length > 30 ) {
            try {
              log('Checking Session ID!')
             let dataa =  Buffer.from(data, 'base64').toString('utf-8');
              const crd_json = JSON.parse(dataa);
              await fs.writeFileSync(sessionPath, JSON.stringify(crd_json))
            } catch (e) {   console.log(e) }
          }
    }
}


console.log(global.sessionID)
My_Sess();

async function startVenox() {
    delay(5000)
    console.log("STARING IRIS-MD...")

    let { version, isLatest } = await fetchLatestBaileysVersion();
    const { state, saveCreds } = await useMultiFileAuthState(sessionFolderPath || path.join(__dirname, '..', 'lib', 'session'));
    const msgRetryCounterCache = new NodeCache();
    const Venox = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: Browsers.ubuntu('chrome'),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
        },
         markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        getMessage: async (key) => {
            let jid = jidNormalizedUser(key.remoteJid);
            let msg = await store.loadMessage(jid, key.id);

            return msg?.message || "";
        },
        msgRetryCounterCache,
        defaultQueryTimeoutMs: undefined,
    });
   
    store.bind(Venox.ev);

    if (pairingCode && !Venox.authState.creds.registered) {
        let isPairing = false ;
    //let phoneNumber
    if (!!phoneNumber) {
        phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
        isPairing = Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v)) ? true : false
    }


setTimeout(async () => {
    if(isPairing){
        let code = await Venox.requestPairingCode(phoneNumber)
        code = code?.match(/.{1,4}/g)?.join("-") || code
        console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
    }
}, 4000)
    }
Venox.ev.on('messages.upsert', async chatUpdate => {
    try {
        const mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast')
        if (!Venox.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        const m = smsg(Venox, mek, store)
        require("./irisbot")(Venox, m, chatUpdate, store)
    } catch (err) {
        console.log(err)
    }
})

Venox.ev.on('messages.upsert', async chatUpdate => {
    if (global.autoswview){
        mek = chatUpdate.messages[0]
        if (mek.key && mek.key.remoteJid === 'status@broadcast') {
            await Venox.readMessages([mek.key])
        }
    }
})

Venox.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {}
        return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
}

Venox.ev.on('contacts.update', update => {
    for (let contact of update) {
        let id = Venox.decodeJid(contact.id)
        if (store && store.contacts) store.contacts[id] = {
            id,
            name: contact.notify
        }
    }
})

Venox.getName = (jid, withoutContact = false) => {
    id = Venox.decodeJid(jid)
    withoutContact = Venox.withoutContact || withoutContact
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
        v = store.contacts[id] || {}
        if (!(v.name || v.subject)) v = Venox.groupMetadata(id) || {}
        resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
    else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === Venox.decodeJid(Venox.user.id) ?
        Venox.user :
        (store.contacts[id] || {})
    return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

Venox.public = true;

Venox.serializeM = (m) => smsg(Venox, m, store);

Venox.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect, qr } = s;

    if (connection === "open") {
        console.log(chalk.magenta(` `));
        console.log(chalk.yellow(`🌿 Connected to => ` + JSON.stringify(Venox.user, null, 2)));
        await delay(1999);
        console.log(chalk.yellow(`\n                  ${chalk.bold.blue(`[ ${botname} ]`)}\n\n`));
        console.log(chalk.cyan(`< ================================================== >`));
        console.log(chalk.magenta(`\n${themeemoji} YT CHANNEL: Venox`));
        console.log(chalk.magenta(`${themeemoji} GITHUB: TheFlameX`));
        console.log(chalk.magenta(`${themeemoji} INSTAGRAM: @sla.sher_`));
        console.log(chalk.magenta(`${themeemoji} WA NUMBER: ${owner}`));
        console.log(chalk.magenta(`${themeemoji} CREDIT: ${wm}\n`));
    }

    Venox.sendMessage(Venox.user.id, {
        text: `*ɪʀɪs-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ*🍀\n
        _ᴠᴇʀsɪᴏɴ: 2.0.9_
        _ᴘʀᴇꜰɪx: [ ${global.prefa} ]_
        _ᴅᴀᴛᴀʙᴀsᴇ: Public_`,
        contextInfo: {
            externalAdReply: {
                title: "ɪʀɪs-ᴍᴅ",
                body: "🍀 ʙᴀɪʟᴇʏs ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 🍀",
                thumbnailUrl: `${global.botpic}`,
                mediaType: 1,
                mediaUrl: "https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q",
                sourceUrl: "https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q",
            },
        },
    });

    if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode !== 401) {
        startVenox();
    }
});

Venox.ev.on('creds.update', saveCreds);
Venox.ev.on("messages.upsert", () => { });

Venox.sendText = (jid, text, quoted = '', options) => Venox.sendMessage(jid, {
    text: text,
    ...options
}, {
    quoted,
    ...options
})

Venox.sendTextWithMentions = async (jid, text, quoted, options = {}) => Venox.sendMessage(jid, {
    text: text,
    mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
    ...options
}, {
    quoted
})

Venox.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options)
    } else {
        buffer = await imageToWebp(buff)
    }

    await Venox.sendMessage(jid, {
        sticker: {
            url: buffer
        },
        ...options
    }, {
        quoted
    })
    return buffer
}

Venox.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`, `[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options)
    } else {
        buffer = await videoToWebp(buff)
    }

    await Venox.sendMessage(jid, {
        sticker: {
            url: buffer
        },
        ...options
    }, {
        quoted
    })
    return buffer
}

Venox.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
}

//Adding welcome
Venox.ev.on('group-participants.update', async (anu) => {
    if (global.welcome === 'true') {
        console.log(anu);
        try {
            let metadata = await Venox.groupMetadata(anu.id);
            let participants = anu.participants;
            for (let num of participants) {
                try {
                    let ppuser = await Venox.profilePictureUrl(num, 'image');
                } catch (err) {
                    ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
                }
                try {
                    let ppgroup = await Venox.profilePictureUrl(anu.id, 'image');
                } catch (err) {
                    ppgroup = 'https://i.ibb.co/RBx5SQC/avatar-group-large-v2.png?q=60';
                }
                let memb = metadata.participants.length;
                let venoxbuffer = await Venox.getBuffer(ppuser);
                let venoxbody = '';
                if (anu.action === 'add') {
                    let venoxName = num;
                    const venoxtime = moment.tz('Asia/Dhaka').format('HH:mm:ss');
                    const venoxdate = moment.tz('Asia/Dhaka').format('DD/MM/YYYY');
                    const venoxmembers = metadata.participants.length;
                    let mono = "```";
                    venoxbody = `
❖━━━━━━━━━[ ᴡᴇʟᴄᴏᴍᴇ ]━━━━━━━━━❖
│
│ 🌈 ${mono}${venoxName.split("@")[0]}${mono}
│ 🍀 ${mono}Joined: ${venoxtime} ${venoxdate}${mono}
│ 👥 ${mono}Members: ${venoxmembers}${mono}
❖━━━━━━━━━━━━━━━━━━━━━━━━━━━━━❖
`;
                } else if (anu.action === 'remove') {
                    const venoxtime = moment.tz('Asia/Dhaka').format('HH:mm:ss');
                    const venoxdate = moment.tz('Asia/Dhaka').format('DD/MM/YYYY');
                    let venoxName = num;
                    const venoxmembers = metadata.participants.length;
                    let moni = "```";
                    venoxbody = `
❖━━━━━━━━━[ ʟᴇᴀᴠɪɴɢ ]━━━━━━━━━❖
│
│ 🌈 ${moni}${venoxName.split("@")[0]}${moni}
│ 🎌 ${moni}Left: ${venoxtime} ${venoxdate}${moni}
│ 👥 ${moni}Members: ${venoxmembers}${moni}
❖━━━━━━━━━━━━━━━━━━━━━━━━━━━━━❖
`;
                }
                Venox.sendMessage(anu.id,
                    {
                        text: venoxbody,
                        contextInfo: {
                            mentionedJid: [num],
                            "externalAdReply": {
                                "showAdAttribution": true,
                                "containsAutoReply": true,
                                "title": `${global.botname}`,
                                "body": `${global.ownername}`,
                                "previewType": "PHOTO",
                                "thumbnailUrl": ``,
                                "thumbnail": venoxbuffer,
                                "sourceUrl": `${global.link}`
                            }
                        }
                    });
            }
        } catch (err) {
            console.log(err);
        }
    }
})

Venox.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk])
    }

    return buffer
}



}
 //   return startVenox()

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


startVenox()
