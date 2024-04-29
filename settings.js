require('./settings');
const chalk = require('chalk');
const fs = require('fs');


// ~~~~~~~~~~~~~~~『 🇲‌🇦‌🇮‌🇳‌-🇸‌🇪‌🇹‌🇹‌🇮‌🇳‌🇬‌🇸‌ 』~~~~~~~~~~~~~~~~~~
global.ownernomer = process.env.SUDO?.split(",") || ["8801853262586"];
global.prefa = process.env.PREFIX?.split(",") || ['.'];
global.ownername = process.env.SUDO_NAME || "🍀 Sleeping Venox";
global.botname = process.env.BOT_NAME || 'ⁱʳⁱˢ ᵇᵃⁱˡᵉʸˢ ᵐᵈ';
global.SESSION_ID = process.env.SESSION_ID || '24_I_R_I_S_M_D_V_2~LethalMelting',
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    

// ~~~~~~~~~~~~~~~『 🇲‌🇦‌🇮‌🇳‌-🇸‌🇪‌🇹‌🇹‌🇮‌🇳‌🇬‌🇸‌ 』~~~~~~~~~~~~~~~~~~
global.ytname = "🌈 YT: Venox";
global.socialm = "💻 GitHub: flameX";
global.location = "🌍 Bangladesh, Dhaka, framgate";
global.packname = 'Sticker By';
global.author = '🍀 VenoxSenpai\n\n💬 Contact: +8801853262586';
global.themeemoji = '🎌';
global.wm = "ℑ𝔯𝔦𝔰𝔅𝔬𝔱𝔷ℑ𝔫𝔠";
global.link = 'https://gg.gg/irisbotz';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~『 🇲‌🇪‌🇳‌🇺‌ 🇹‌🇾‌🇵‌🇪‌🇸‌ 』~~~~~~~~~~~~~~~~~~
// Menu type 
// v1 is image menu, 
// v2 is link + image menu,
// v3 is video menu,
// v4 is call end menu
global.typemenu = process.env.MENU_TYPES || 'v1';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~『 🇹‌🇷‌🇺‌🇪‌ / 🇫‌🇦‌🇱‌🇸‌🇪‌‌ 』~~~~~~~~~~~~~~~~~~
global.autoread = process.env.AUTO_READ_MSG || false;
global.autobio = process.env.AUTO_BIO || false;
global.autoswview = process.env.AUTO_STS_SEEN || false;
//
//
global.autoRecording = false;
global.autoTyping = false;
global.autorecordtype = false;
global.anti92 = false;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// ~~~~~~~~~~~~~~~『 🇩‌🇪‌🇻‌🇸‌, 🇩‌🇴‌ 🇳‌🇴‌🇹‌ 🇨‌🇭‌🇦‌🇳‌🇬‌🇪‌! 』~~~~~~~~~~~~~~~~~~
global.ownernumber = '8801853262586';
global.ownername = '𝖁𝖊𝖓𝖔𝖝𝕾𝖊𝖓𝖕𝖆𝖎'; 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~『 ᴍᴇssᴀɢᴇs! 』~~~~~~~~~~~~~~~~~~
global.mess = {
    done: '✨ *Task complete, senpai!* ✨',
    prem: '🔒 *Apologies,* but this feature is exclusively for premium users, *senpai-sama.*',
    admin: '🛡️ *Only the mightiest administrators* possess the power to wield this feature, *dearest senpai!*',
    botAdmin: '🤖 The bot must *attain the rank of administrator* to access this feature, *senpai-sama!*',
    owner: '👑 This privilege is *reserved for the chosen one alone,* *honorable senpai-sama.*',
    group: '👥 Gather your allies, for this feature is *meant for group chats* exclusively, *esteemed senpai!*',
    private: '🔒 Let us converse in secrecy, for this feature is *intended for private chats* alone, *noble senpai-sama.*',
    nolink: 'Please provide me with a *link,* *Baka!* 🙏',
    banned: 'You have been *Banned* from issuing commands, *Baka!* 😠',
    bangc: 'This group has been *Banned* from issuing commands, *Baka!* 😡',
    nonsfw: 'Behold! This realm is *not meant for the lewd,* *Baka!* Keep it *SFW!* 😳',
    wait: '⏳ *Fear not,* for progress moves steadily but surely... ',    
    error: '❌ *Oh no!* An error has emerged on the battlefield! 💥',
};
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg');
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
