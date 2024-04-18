require("./info.js");
//
//
const {
  default: irisConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
} = require("@whiskeysockets/baileys");
//
const fs = require("fs");
const axios = require('axios');
const { atob } = require('atob');
const pino = require("pino");
const chalk = require("chalk");
const FileType = require("file-type");
const CFonts = require("cfonts");
const { exec, spawn, execSync } = require("child_process");
const moment = require("moment-timezone");
const PhoneNumber = require("awesome-phonenumber");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);
const path = require("path");
//
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./lib/exif");
//
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
} = require("./lib/myfunc");
//
const figlet = require("figlet");
const { color } = require("./lib/color");
//
//
//
async function MakeSession(cc) {
  try {
    const sessionPath = __dirname + '/lib/session/creds.json';
    if (!fs.existsSync(sessionPath)) {
      if (cc.length < 30) {
        const { data } = await axios.get('https://paste.c-net.org/' + cc);
        await fs.writeFileSync(sessionPath, atob(data), "utf8");
      } else {
        const c = atob(cc);
        await fs.writeFileSync(sessionPath, c, "utf8");
      }
    }
  } catch (error) {
    console.error('Error creating session:', error);
  }
}
//
//
async function startIris() {
  try {
    console.log(
      color(
        figlet.textSync("Iris-2.0", {
          font: "Standard",
          horizontalLayout: "default",
          vertivalLayout: "default",
          whitespaceBreak: false,
        }),
        "green"
      )
    );
    console.log(color('\nHello, I am VenoxSenpai, Developer of this Bot\n\nThanks for using: Iris-MD Whatasapp Bot.', 'aqua'));
    console.log(color('\nYou can follow me on GitHub: V-E-N-O-X', 'aqua'));
    //
    //
    //
    //
    const { state } = await useMultiFileAuthState("./lib/session");
    //
    //
    //
    //
    const store = makeInMemoryStore({
      logger: pino().child({ level: "silent", stream: "store" }),
    });
    //
    //
    //
    //
    const iris = irisConnect({
      logger: pino({ level: "silent" }),
      printQRInTerminal: true,
      browser: ["iris Bot", "Safari", "3.O"],
      auth: state,
    });
    //
    //
    //
    store.bind(iris.ev);
  } catch (error) {
    console.error('Error starting Iris bot:', error);
  }
}
//
//
async function main() {
  try {
    //
    //
    const cc = info.sessionID.replace(/24_I_R_I_S_M_D_V_2~/g, "");
    //
    //
    await MakeSession(cc);
    //
    //
    await startIris();
  } catch (error) {
    console.error('Error in main function:', error);
  }
}
//
//
main();
//
//
//
//
//
//
//
//
//
//
//
//
//
iris.ws.on('CB:call', async (json) => {
  const callerId = json.content[0].attrs['call-creator']
  if (json.content[0].tag === 'offer') {
    try {
      let contactMessage = await iris.sendContact(callerId, global.Owner)
      await iris.sendMessage(callerId, { text: `Automatic Block System!\nDo not call this number!\nPlease unblock this number with permission from the Bot Owner.` }, { quoted: contactMessage })
      await sleep(8000)
      await iris.updateBlockStatus(callerId, "block")
    } catch (error) {
      console.error(error)
    }
  }
})
//
//
//
iris.ev.on('connection.update', async (update) => {
  const { connection } = update;
  if (connection === 'open') {
    console.log("ɪʀɪs-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ sᴜᴄᴄᴇssꜰᴜʟʟʏ ✅");
    iris.sendMessage(iris.user.id, {
      text: `
*ɪʀɪs-ᴍᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ 🍀*\n
_ᴘʟᴜɢɪɴs: 231_
_ᴍᴏᴅᴇ: Undefined_
_ᴘʀᴇꜰɪx: [ ${global.prefa} ]_\n
📶 *ᴄʟɪᴄᴋ ʜᴇʀᴇ ғᴏʀ ʟɪɴᴋ:*
» gg.gg/irisbotz`,
      contextInfo: {
        externalAdReply: {
          title: "ɪʀɪs-ᴍᴅ",
          body: "🍀 ʙᴀɪʟᴇʏs ʟɪɢʜᴛᴡᴇɪɢʜᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ 🍀",
          thumbnailUrl: "https://i.ibb.co/G35jn3J/bot2p.jpg",
          mediaType: 1,
          mediaUrl: "https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q",
          sourceUrl: "https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q",
        }
      }
    });
  }
});

iris.ev.on("messages.upsert", async (chatUpdate) => {
  try {
    mek = chatUpdate.messages[0];
    if (!mek.message) return;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    if (mek.key && mek.key.remoteJid === "status@broadcast") return;
    if (!iris.public && !mek.key.fromMe && chatUpdate.type === "notify")
      return;
    if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
    m = smsg(iris, mek, store);
    require("./iris_plugins/venox.js")(iris, m, chatUpdate, store);
  } catch (err) {
    console.log(err);
  }
});
//
//
//
iris.ev.on('groups.update', async pea => {
  try {
    ppgc = await iris.profilePictureUrl(pea[0].id, 'image')
  } catch {
    ppgc = 'https://images2.alphacoders.com/882/882819.jpg'
  }
  let wm_fatih = { url: ppgc }
  if (pea[0].announce == true) {
    iris.sendMessage(m.chat, { image: wm_fatih, caption: 'Group has been *Closed!* Only *Admins* can send Messages!' })
  } else if (pea[0].announce == false) {
    iris.sendMessage(m.chat, { image: wm_fatih, caption: 'Group has been *Opened!* Now *Everyone* can send Messages!' })
  } else if (pea[0].restrict == true) {
    iris.sendMessage(m.chat, { image: wm_fatih, caption: 'Group Info modification has been *Restricted*, Now only *Admins* can edit Group Info !' })
  } else if (pea[0].restrict == false) {
    iris.sendMessage(m.chat, { image: wm_fatih, caption: 'Group Info modification has been *Un-Restricted*, Now only *Everyone* can edit Group Info !' })
  } else {
    iristextddfq = `Group Subject has been updated To:\n\n*${pea[0].subject}*`
    iris.sendMessage(pea[0].id, { image: wm_fatih, caption: iristextddfq })
  }
})
//
//
//
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
//
//
//
//
iris.ev.on('group-participants.update', async (anu) => {
  if (global.groupevent) { // Check if group event handling is enabled
    console.log(anu);

    try {
      let metadata = await iris.groupMetadata(anu.id);
      let participants = anu.participants;
      for (let num of participants) {
        try {
          ppuser = await iris.profilePictureUrl(num, 'image')
        } catch {
          ppuser = 'https://images6.alphacoders.com/690/690121.jpg'
        }

        try {
          ppgroup = await iris.profilePictureUrl(anu.id, 'image')
        } catch {
          ppgroup = 'https://telegra.ph/file/4cc2712eee93c105f6739.jpg'
        }

        let targetname = await iris.getName(num)
        grpmembernum = metadata.participants.length

        if (anu.action == 'add') {
          let WAuserName = num
          iristext = `
Hello @${WAuserName.split("@")[0]},

I am *Iris-Md*, Welcome to ${metadata.subject}.

*Group Description:*
${metadata.desc}
`
          let buttonMessage = {
            image: await getBuffer(ppgroup),
            mentions: [num],
            caption: iristext,
            footer: `${global.BotName}`,
            headerType: 4,
          }
          iris.sendMessage(anu.id, buttonMessage)
        } else if (anu.action == 'remove') {
          let WAuserName = num
          iristext = `
Okay Bye 👋, @${WAuserName.split("@")[0]},

See ya!
`
          let buttonMessage = {
            image: await getBuffer(ppuser),
            mentions: [num],
            caption: iristext,
            footer: `${global.BotName}`,
            headerType: 4,
          }
          iris.sendMessage(anu.id, buttonMessage)
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
});
//
//
//
iris.decodeJid = (jid) => {
  if (!jid) return jid;
  if (/:\d+@/gi.test(jid)) {
    let decode = jidDecode(jid) || {};
    return (
      (decode.user && decode.server && decode.user + "@" + decode.server) ||
      jid
    );
  } else return jid;
};
//
//
//
iris.ev.on("contacts.update", (update) => {
  for (let contact of update) {
    let id = iris.decodeJid(contact.id);
    if (store && store.contacts)
      store.contacts[id] = { id, name: contact.notify };
  }
});
//
//
//
iris.getName = (jid, withoutContact = false) => {
  id = iris.decodeJid(jid);
  withoutContact = iris.withoutContact || withoutContact;
  let v;
  if (id.endsWith("@g.us"))
    return new Promise(async (resolve) => {
      v = store.contacts[id] || {};
      if (!(v.name || v.subject)) v = iris.groupMetadata(id) || {};
      resolve(
        v.name ||
        v.subject ||
        PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
          "international"
        )
      );
    });
  else
    v =
      id === "0@s.whatsapp.net"
        ? {
          id,
          name: "WhatsApp",
        }
        : id === iris.decodeJid(iris.user.id)
          ? iris.user
          : store.contacts[id] || {};
  return (
    (withoutContact ? "" : v.name) ||
    v.subject ||
    v.verifiedName ||
    PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
      "international"
    )
  );
};
//
//
//
//
//
//
//
//
//
//
//
iris.sendContact = async (jid, kon, quoted = "", opts = {}) => {
  let list = [];
  for (let i of kon) {
    list.push({
      displayName: await iris.getName(i + "@s.whatsapp.net"),
      vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await iris.getName(
        i + "@s.whatsapp.net"
      )}\nFN:${global.OwnerName
        }\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.websitex
        }\nitem2.X-ABLabel:GitHub\nitem3.URL:${global.websitex
        }\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location
        };;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
    });
  //
  //
  }
  iris.sendMessage(
    jid,
    {
      contacts: { displayName: `${list.length} Contact`, contacts: list },
      ...opts,
    },
    { quoted }
  );
};
//
//
//
//
iris.setStatus = (status) => {
  iris.query({
    tag: "iq",
    attrs: {
      to: "@s.whatsapp.net",
      type: "set",
      xmlns: "status",
    },
    content: [
      {
        tag: "status",
        attrs: {},
        content: Buffer.from(status, "utf-8"),
      },
    ],
  });
  return status;
};
//
//
//
//
iris.public = true;
//
//
iris.serializeM = (m) => smsg(iris, m, store);
//
//
iris.ev.on("connection.update", async (update) => {
  const { connection, lastDisconnect } = update;
  if (connection === "close") {
    let reason = lastDisconnect.error ? lastDisconnect?.error?.output.statusCode : 0;
    switch (reason) {
      case DisconnectReason.badSession:
        console.log(`[ Iris.Inc ] =>  Bad Session ID, Please Replace Session with New One`);
        process.exit();
        break;
      case DisconnectReason.connectionClosed:
      case DisconnectReason.connectionLost:
      case DisconnectReason.restartRequired:
      case DisconnectReason.timedOut:
        console.log("[ Iris.Inc ] =>  Connection closed, reconnecting...");
        startiris();
        break;
      case DisconnectReason.connectionReplaced:
        console.log("[ Iris.Inc ] =>  Connection Replaced, Another New Session Opened, Please Close Current Session First");
        process.exit();
        break;
      case DisconnectReason.loggedOut:
        console.log(`[ Iris.Inc ] =>  Device Logged Out, Please Delete Session and Scan Again.`);
        process.exit();
        break;
      default:
        console.log(`[ Iris.Inc ] =>  Unknown DisconnectReason: ${reason}|${connection}`);
        break;
    }
  }
});

iris.ev.on("creds.update", saveCreds);
//
//
//
//
//
//
//
//
//
//
//
//
//
/** Send Button 5 Images
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} image
   * @param [*] button
   * @param {*} options
   * @returns
   */
iris.send5ButImg = async (
  jid,
  text = "",
  footer = "",
  img,
  but = [],
  thumb,
  options = {}
) => {
  let message = await prepareWAMessageMedia(
    { image: img, jpegThumbnail: thumb },
    { upload: iris.waUploadToServer }
  );
  var template = generateWAMessageFromContent(
    m.chat,
    proto.Message.fromObject({
      templateMessage: {
        hydratedTemplate: {
          imageMessage: message.imageMessage,
          hydratedContentText: text,
          hydratedFooterText: footer,
          hydratedButtons: but,
        },
      },
    }),
    options
  );
  iris.relayMessage(jid, template.message, { messageId: template.key.id });
};
//
//
//
/**
 *
 * @param {*} jid
 * @param {*} buttons
 * @param {*} caption
 * @param {*} footer
 * @param {*} quoted
 * @param {*} options
 */
iris.sendButtonText = (
  jid,
  buttons = [],
  text,
  footer,
  quoted = "",
  options = {}
) => {
  let buttonMessage = {
    text,
    footer,
    buttons,
    headerType: 2,
    ...options,
  };
  iris.sendMessage(jid, buttonMessage, { quoted, ...options });
};
//
//
//
/**
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} quoted
 * @param {*} options
 * @returns
 */
iris.sendText = (jid, text, quoted = "", options) =>
  iris.sendMessage(jid, { text: text, ...options }, { quoted });
//
//
//
//
/**
 *
 * @param {*} jid
 * @param {*} path
 * @param {*} caption
 * @param {*} quoted
 * @param {*} options
 * @returns
 */
iris.sendImage = async (jid, path, caption = "", quoted = "", options) => {
  let buffer = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
        ? await await getBuffer(path)
        : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
  return await iris.sendMessage(
    jid,
    { image: buffer, caption: caption, ...options },
    { quoted }
  );
};
//
//
//
//
/**
 *
 * @param {*} jid
 * @param {*} path
 * @param {*} caption
 * @param {*} quoted
 * @param {*} options
 * @returns
 */
iris.sendVideo = async (
  jid,
  path,
  caption = "",
  quoted = "",
  gif = false,
  options
) => {
  let buffer = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
        ? await await getBuffer(path)
        : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
  return await iris.sendMessage(
    jid,
    { video: buffer, caption: caption, gifPlayback: gif, ...options },
    { quoted }
  );
};
//
//
//
/**
 *
 * @param {*} jid
 * @param {*} path
 * @param {*} quoted
 * @param {*} mime
 * @param {*} options
 * @returns
 */
iris.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
  let buffer = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
        ? await await getBuffer(path)
        : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
  return await iris.sendMessage(
    jid,
    { audio: buffer, ptt: ptt, ...options },
    { quoted }
  );
};
//
//
/**
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} quoted
 * @param {*} options
 * @returns
 */
iris.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
  iris.sendMessage(
    jid,
    {
      text: text,
      contextInfo: {
        mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
          (v) => v[1] + "@s.whatsapp.net"
        ),
      },
      ...options,
    },
    { quoted }
  );
//
//
//
/**
 *
 * @param {*} jid
 * @param {*} path
 * @param {*} quoted
 * @param {*} options
 * @returns
 */
iris.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
        ? await await getBuffer(path)
        : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
  let buffer;
  if (options && (options.packname || options.author)) {
    buffer = await writeExifImg(buff, options);
  } else {
    buffer = await imageToWebp(buff);
  }
//
//
//
  await iris.sendMessage(
    jid,
    { sticker: { url: buffer }, ...options },
    { quoted }
  );
  return buffer;
};
//
//
//
/**
 *
 * @param {*} jid
 * @param {*} path
 * @param {*} quoted
 * @param {*} options
 * @returns
 */
iris.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
  let buff = Buffer.isBuffer(path)
    ? path
    : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
        ? await await getBuffer(path)
        : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
  let buffer;
  if (options && (options.packname || options.author)) {
    buffer = await writeExifVid(buff, options);
  } else {
    buffer = await videoToWebp(buff);
  }

  await iris.sendMessage(
    jid,
    { sticker: { url: buffer }, ...options },
    { quoted }
  );
  return buffer;
};
//
//
//
iris.sendMedia = async (
  jid,
  path,
  fileName = "",
  caption = "",
  quoted = "",
  options = {}
) => {
  let types = await iris.getFile(path, true);
  let { mime, ext, res, data, filename } = types;
  if ((res && res.status !== 200) || file.length <= 65536) {
    try {
      throw { json: JSON.parse(file.toString()) };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }
  let type = "",
    mimetype = mime,
    pathFile = filename;
  if (options.asDocument) type = "document";
  if (options.asSticker || /webp/.test(mime)) {
    let { writeExif } = require("./lib/exif");
    let media = { mimetype: mime, data };
    pathFile = await writeExif(media, {
      packname: options.packname ? options.packname : global.packname,
      author: options.author ? options.author : global.author,
      categories: options.categories ? options.categories : [],
    });
    await fs.promises.unlink(filename);
    type = "sticker";
    mimetype = "image/webp";
  } else if (/image/.test(mime)) type = "image";
  else if (/video/.test(mime)) type = "video";
  else if (/audio/.test(mime)) type = "audio";
  else type = "document";
  await iris.sendMessage(
    jid,
    { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
    { quoted, ...options }
  );
  return fs.promises.unlink(pathFile);
};
/**
 *
 * @param {*} message
 * @param {*} filename
 * @param {*} attachExtension
 * @returns
 */
iris.downloadAndSaveMediaMessage = async (
  message,
  filename,
  attachExtension = true
) => {
  let quoted = message.msg ? message.msg : message;
  let mime = (message.msg || message).mimetype || "";
  let messageType = message.mtype
    ? message.mtype.replace(/Message/gi, "")
    : mime.split("/")[0];
  const stream = await downloadContentFromMessage(quoted, messageType);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  let type = await FileType.fromBuffer(buffer);
  trueFileName = attachExtension ? filename + "." + type.ext : filename;
  // save to file
  await fs.writeFileSync(trueFileName, buffer);
  return trueFileName;
};
//
//
//
iris.downloadMediaMessage = async (message) => {
  let mime = (message.msg || message).mimetype || "";
  let messageType = message.mtype
    ? message.mtype.replace(/Message/gi, "")
    : mime.split("/")[0];
  const stream = await downloadContentFromMessage(message, messageType);
  let buffer = Buffer.from([]);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }

  return buffer;
};

/**
 *
 * @param {*} jid
 * @param {*} message
 * @param {*} forceForward
 * @param {*} options
 * @returns
 */
iris.copyNForward = async (
  jid,
  message,
  forceForward = false,
  options = {}
) => {
  let vtype;
  if (options.readViewOnce) {
    message.message =
      message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
        ? message.message.ephemeralMessage.message
        : message.message || undefined;
    vtype = Object.keys(message.message.viewOnceMessage.message)[0];
    delete (message.message && message.message.ignore
      ? message.message.ignore
      : message.message || undefined);
    delete message.message.viewOnceMessage.message[vtype].viewOnce;
    message.message = {
      ...message.message.viewOnceMessage.message,
    };
  }
//
//
//
  let mtype = Object.keys(message.message)[0];
  let content = await generateForwardMessageContent(message, forceForward);
  let ctype = Object.keys(content)[0];
  let context = {};
  if (mtype != "conversation") context = message.message[mtype].contextInfo;
  content[ctype].contextInfo = {
    ...context,
    ...content[ctype].contextInfo,
  };
  const waMessage = await generateWAMessageFromContent(
    jid,
    content,
    options
      ? {
        ...content[ctype],
        ...options,
        ...(options.contextInfo
          ? {
            contextInfo: {
              ...content[ctype].contextInfo,
              ...options.contextInfo,
            },
          }
          : {}),
      }
      : {}
  );
  await iris.relayMessage(jid, waMessage.message, {
    messageId: waMessage.key.id,
  });
  return waMessage;
};
//
//
//
iris.sendListMsg = (
  jid,
  text = "",
  footer = "",
  title = "",
  butText = "",
  sects = [],
  quoted
) => {
  let sections = sects;
  var listMes = {
    text: text,
    footer: footer,
    title: title,
    buttonText: butText,
    sections,
  };
  iris.sendMessage(jid, listMes, { quoted: quoted });
};
//
//
iris.cMod = (
  jid,
  copy,
  text = "",
  sender = iris.user.id,
  options = {}
) => {
  //let copy = message.toJSON()
  let mtype = Object.keys(copy.message)[0];
  let isEphemeral = mtype === "ephemeralMessage";
  if (isEphemeral) {
    mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
  }
  let msg = isEphemeral
    ? copy.message.ephemeralMessage.message
    : copy.message;
  let content = msg[mtype];
  if (typeof content === "string") msg[mtype] = text || content;
  else if (content.caption) content.caption = text || content.caption;
  else if (content.text) content.text = text || content.text;
  if (typeof content !== "string")
    msg[mtype] = {
      ...content,
      ...options,
    };
  if (copy.key.participant)
    sender = copy.key.participant = sender || copy.key.participant;
  else if (copy.key.participant)
    sender = copy.key.participant = sender || copy.key.participant;
  if (copy.key.remoteJid.includes("@s.whatsapp.net"))
    sender = sender || copy.key.remoteJid;
  else if (copy.key.remoteJid.includes("@broadcast"))
    sender = sender || copy.key.remoteJid;
  copy.key.remoteJid = jid;
  copy.key.fromMe = sender === iris.user.id;

  return proto.WebMessageInfo.fromObject(copy);
};
//
//
//
/**
 * Get file data from various sources
 * @param {*} PATH - Path or buffer of the file
 * @param {boolean} save - Whether to save the file locally
 * @returns {Object} - Object containing file data
 */
iris.getFile = async (PATH, save) => {
  let res;
  let data = Buffer.isBuffer(PATH)
    ? PATH
    : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split(',')[1], "base64")
      : /^https?:\/\//.test(PATH)
        ? await (res = await getBuffer(PATH))
        : fs.existsSync(PATH)
          ? ((filename = PATH), fs.readFileSync(PATH))
          : typeof PATH === "string"
            ? PATH
            : Buffer.alloc(0);
  
  // Determine file type
  let type = (await FileType.fromBuffer(data)) || {
    mime: "application/octet-stream",
    ext: ".bin",
  };
  
  // Generate a unique filename
  let filename = path.join(__filename, "../src/" + new Date() * 1 + "." + type.ext);
  
  // Save the file if requested
  if (data && save) fs.promises.writeFile(filename, data);
  //
  //
  return {
    res,
    filename,
    size: await getSizeMedia(data),
    ...type,
    data,
  };
};

/**
 * Send a message with a GIF and up to 5 buttons
 * @param {string} jid - Target JID
 * @param {string} text - Message text
 * @param {string} footer - Footer text
 * @param {string} gif - URL of the GIF
 * @param {Array} but - Array of button objects
 * @param {Object} options - Additional options
 */
iris.send5ButGif = async (jid, text = "", footer = "", gif, but = [], options = {}) => {
  let message = await prepareWAMessageMedia(
    { video: gif, gifPlayback: true },
    { upload: iris.waUploadToServer }
  );
  
  let template = generateWAMessageFromContent(
    jid,
    proto.Message.fromObject({
      templateMessage: {
        hydratedTemplate: {
          videoMessage: message.videoMessage,
          hydratedContentText: text,
          hydratedFooterText: footer,
          hydratedButtons: but,
        },
      },
    }),
    options
  );
  
  iris.relayMessage(jid, template.message, { messageId: template.key.id });
};

/**
 * Send a message with a video and up to 5 buttons
 * @param {string} jid - Target JID
 * @param {string} text - Message text
 * @param {string} footer - Footer text
 * @param {string} vid - URL of the video
 * @param {Array} but - Array of button objects
 * @param {Object} options - Additional options
 */
iris.send5ButVid = async (jid, text = "", footer = "", vid, but = [], options = {}) => {
  let message = await prepareWAMessageMedia(
    { video: vid },
    { upload: iris.waUploadToServer }
  );
  
  let template = generateWAMessageFromContent(
    jid,
    proto.Message.fromObject({
      templateMessage: {
        hydratedTemplate: {
          videoMessage: message.videoMessage,
          hydratedContentText: text,
          hydratedFooterText: footer,
          hydratedButtons: but,
        },
      },
    }),
    options
  );
  
  iris.relayMessage(jid, template.message, { messageId: template.key.id });
};

/**
 * Send a message with up to 5 buttons
 * @param {string} jid - Target JID
 * @param {string} text - Message text
 * @param {string} footer - Footer text
 * @param {Array} but - Array of button objects
 */
iris.send5ButMsg = (jid, text = "", footer = "", but = []) => {
  let templateButtons = but;
  let templateMessage = {
    text: text,
    footer: footer,
    templateButtons: templateButtons,
  };
  iris.sendMessage(jid, templateMessage);
};

/**
 * Send a file to a JID
 * @param {string} jid - Target JID
 * @param {*} PATH - Path or buffer of the file
 * @param {string} fileName - Name of the file
 * @param {Object} quoted - Quoted message object
 * @param {Object} options - Additional options
 * @returns {Promise<void>}
 */
iris.sendFile = async (jid, PATH, fileName, quoted = {}, options = {}) => {
  let types = await iris.getFile(PATH, true);
  let { filename, size, ext, mime, data } = types;
  let type = "",
      mimetype = mime,
      pathFile = filename;
  //
  //
  if (options.asDocument) type = "document";
  if (options.asSticker || /webp/.test(mime)) {
    let { writeExif } = require("./lib/sticker.js");
    let media = { mimetype: mime, data };
    pathFile = await writeExif(media, {
      packname: global.packname,
      author: global.packname,
      categories: options.categories ? options.categories : [],
    });
    await fs.promises.unlink(filename);
    type = "sticker";
    mimetype = "image/webp";
  } else if (/image/.test(mime)) type = "image";
  else if (/video/.test(mime)) type = "video";
  else if (/audio/.test(mime)) type = "audio";
  else type = "document";
  
  await iris.sendMessage(
    jid,
    { [type]: { url: pathFile }, mimetype, fileName, ...options },
    { quoted, ...options }
  );
  //
  //
  return fs.promises.unlink(pathFile);
};
//
//
/**
 * Parse mentioned users from a text message
 * @param {string} text - Text message
 * @returns {Array} - Array of mentioned user JIDs
 */
iris.parseMention = async (text) => {
  return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
    (v) => v[1] + "@s.whatsapp.net"
  );
};
//
//
// Start the Iris bot
startiris();
//
//
process.on('uncaughtException', function (err) {
  let e = String(err)
  if (e.includes("Socket connection timeout")) return
  if (e.includes("not-authorized")) return
  if (e.includes("already-exists")) return
  if (e.includes("rate-overlimit")) return
  if (e.includes("Connection Closed")) return
  if (e.includes("Timed Out")) return
  if (e.includes("Value not found")) return
  console.log('Caught exception: ', err)
  })
  
  let file = require.resolve(__filename);
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`${__filename} Updated`));
    delete require.cache[file];
    require(file);
  });
