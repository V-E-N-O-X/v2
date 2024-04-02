const fs = require('fs');
const dotenv = require('dotenv');
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[ GL_KEYS ]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

global.mongodb = process.env.DATABASE_URL || '', // ᴘᴀsᴛᴇ ʏᴏᴜʀ ᴍᴏɴɢᴏᴅʙ ᴏʀ ᴘᴏsᴛɢʀᴇsǫʟ ᴅʙ sᴛʀɪɴɢ ʜᴇʀᴇ
global.port = process.env.PORT || 5000,
global.BRANCH = 'main',
global.EMAIL = 'akd.bd880@gmail.com',


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~[ MODULES_VARS ]~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

module.exports = {

  SESSION_ID:  process.env.SESSION_ID ||  '', // ᴘᴀsᴛᴇ ʏᴏᴜʀ sᴇssɪᴏɴ-ɪᴅ ʜᴇʀᴇ

  SUDO: process.env.SUDO || '8801975492880', // sᴇᴛ ʏᴏᴜʀ sᴜᴅᴏ-ɴᴜᴍʙᴇʀ ꜰᴏʀ ʙᴏᴛ, sᴇᴘᴀʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴍᴍᴀ (,)

  URL: process.env.URL || 'https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q', // ᴘᴀsᴛᴇ ʏᴏᴜʀ ᴄʜᴀɴɴᴇʟ ᴏʀ ɢʀᴏᴜᴘ ʟɪɴᴋ ʜᴇʀᴇ

  STICKER_DATA: process.env.STICKER_DATA || '「 Cʀᴇᴀᴛᴇᴅ Bʏ; VᴇɴᴏxSᴇʀ 」', // sᴇᴛ ʏᴏᴜʀ sᴛɪᴄᴋᴇʀ ᴘᴀᴄᴋɴᴀᴍᴇ;ᴘᴀᴄᴋᴀᴜᴛʜᴏʀ ʜᴇʀᴇ, sᴇᴘᴀʀᴀᴛᴇᴅ ʙʏ  sᴇᴍɪᴄᴏʟᴏɴ (;)

  AUTO_BIO: process.env.AUTO_BIO || 'false', // ᴋᴇᴇᴘ ɪᴛ ᴀs ᴛʀᴜᴇ ɪꜰ ᴜ ᴡᴀɴɴᴀ ᴛᴜʀɴ ᴏɴ ᴀᴜᴛᴏ_ʙɪᴏ ɪɴ ʏᴏᴜʀ ʙᴏᴛ

  INFO: process.env.INFO || 'ɪʀɪs-ᴍᴅ;ᴠᴇɴᴏx-sᴇɴᴘᴀɪ;https://telegra.ph/file/5dc76c706095983fdb92d.mp4', // sᴇᴛ ʏᴏᴜʀ ɪɴꜰᴏ ʜᴇʀᴇ, ɴᴏᴛᴇ: .ᴍ4 sᴜᴘᴘᴏʀᴛᴇᴅ ᴏɴʟʏ

  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || 'false', // ᴋᴇᴇᴘ ɪᴛ ᴀs ᴛʀᴜᴇ ɪꜰ ᴜ ᴡᴀɴɴᴀ ᴜsᴇ ɪᴛ

  AUTO_REACT: process.env.AUTO_REACT || 'false', // ᴋᴇᴇᴘ ɪᴛ ᴀs ᴛʀᴜᴇ ɪꜰ ᴜ ᴡᴀɴɴᴀ ᴜsᴇ ɪᴛ

  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || 'bentai', // ᴀᴅᴅ ᴛʜᴇ ʙᴀᴅᴡᴏʀᴅs ʜᴇʀᴇ, ɪꜰ ᴍᴏʀᴇ ᴛʜᴀɴ ᴏɴᴇ sᴇᴘᴀʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴍᴍᴀ (,)

  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || 'true', // ᴋᴇᴇᴘ ɪᴛ ᴀs ᴛʀᴜᴇ ɪꜰ ᴜ ᴡᴀɴɴᴀ ᴜsᴇ ɪᴛ

  ANTI_FAKE: process.env.ANTI_FAKE || '212', // ᴀᴅᴅ ᴛʜᴇ ᴄᴄ ᴄᴏᴅᴇ ᴏꜰ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛʜᴀᴛ ᴜ ᴡᴀɴɴᴀ ʙʟᴏᴄᴋ, ᴍᴏʀᴇ ᴛʜᴀɴ ᴏɴᴇ sᴇᴘᴀʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴍᴍᴀ (,)

  READ_MSG: process.env.READ_MSG || 'false', // ᴋᴇᴇᴘ ɪᴛ ᴀs ᴛʀᴜᴇ ɪꜰ ᴜ ᴡᴀɴɴᴀ ᴜsᴇ ɪᴛ

  HANDLERS:  process.env.HANDLERS || '.', // ᴄʜᴏᴏsᴇ ʏᴏᴜʀ ᴘʀᴇꜰɪx ʜᴇʀᴇ, ᴇxᴀᴍᴘʟᴇ : (.'>;!~) ᴇᴛᴄ

  WARN_COUNT: process.env.WARN_COUNT || '5', // sᴇᴛ ᴜʀ ᴡᴀʀɴɪɴɢ ᴄᴏᴜɴᴛ ʟɪᴍɪᴛ ʜᴇʀᴇ

  DISABLE_PM:  process.env.DISABLE_PM || 'false', // ɪꜰ ᴜ sᴇᴛ ɪᴛ ᴀs ᴛʀᴜᴇ ʙᴏᴛ ᴡɪʟʟ ᴏɴʟʏ ᴡᴏʀᴋs ᴏɴ ɢʀᴏᴜᴘ ᴄʜᴀᴛs

  LEVEL_UP_MESSAGE: process.env.LEVEL_UP_MESSAGE || 'true', // ᴋᴇᴇᴘ ɪᴛ ᴀs ᴛʀᴜᴇ ɪꜰ ᴜ ᴡᴀɴɴᴀ ᴜsᴇ ɪᴛ

  ANTILINK_TYPES:  process.env.ANTILINK_TYPES || 'https://,chat.whatsapp.com', // sᴇᴛ ᴛʜᴇ ʙʟᴏᴄᴋᴇᴅ ᴜʀʟ ꜰᴏʀ ᴜʀ ᴀɴᴛɪʟɪɴᴋ

  ANTILINK_ACTION: process.env.ANTILINK_ACTION || 'remove', // ᴋᴇᴇᴘ ɪᴛ ᴀs "ʀᴇᴍᴏᴠᴇ" ɪꜰ ᴜ ᴡᴀɴɴᴀ ᴋɪᴄᴋ, ᴇʟsᴇ ᴛʀʏ "ᴡᴀʀɴ"

  ALIVE_MSG: process.env.ALIVE_MSG || 'ᴋᴏɴɴɪᴄʜɪᴡᴀ..sᴇɴᴘᴀɪ...ɪ ᴀᴍ ᴀʟɪᴠᴇ...ᴀʀɪɢᴀᴛᴏᴜ ꜰᴏʀ ᴄʜᴇᴄᴋɪɴɢ ᴍᴇ ᴜᴘ',// sᴇᴛ ʏᴏᴜʀ ᴀʟɪᴠᴇ-ᴍsɢ ʜᴇʀᴇ! 

  GPT_API: process.env.GPT_API || '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', // ᴏᴘᴇɴ_ᴀɪ ᴀᴘɪ ᴋᴇʏ...ɢʀᴀʙ ᴏɴᴇ ꜰʀᴏᴍ ʙᴇᴛᴀ.ᴏᴘᴇɴᴀɪ.ᴄᴏᴍ

  HAPP: process.env.HAPP || '', // ɪꜰ ɴᴏᴛ ʜᴇʀᴏᴋᴜ ᴋᴇᴇᴘ ɪᴛ ʙʟᴀɴᴋ

  HKEY: process.env.HKEY || '', // ɪꜰ ɴᴏᴛ ʜᴇʀᴏᴋᴜ ᴋᴇᴇᴘ ɪᴛ ʙʟᴀɴᴋ

  VERSION: process.env.VERSION || '2.0.9',

  LANG: process.env.LANG || 'DEFAULT',

  WORKTYPE: process.env.WORK_TYPE || 'public', // ɪꜰ "ᴘᴜʙʟɪᴄ" ᴛʜᴇɴ ᴇᴠᴇʀʏᴏɴᴇ ᴄᴀɴ ᴜsᴇ ɪᴛ, ᴏʀ "ᴘʀɪᴠᴀᴛᴇ" ᴛʜᴇɴ ᴏɴʟʏ ʏᴏᴜ...!
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
