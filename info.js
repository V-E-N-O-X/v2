/*
Iris-Md-2.0 
 Coded By VenoxSenpai

Modified File : info.js
Modified Date : 04/17/2024
*/

const fs = require("fs");
const chalk = require("chalk");



global.owner = process.env.SUDO ||  [
 /*==>*/  ["916297175943", "919362639362"]
]; // [number, he creator/owner?, he developer?]


global.prefa = process.env.PREFIX || [
 /*==>*/  [".","!","-"]
]; // [prefix, want multiple?]


global.OwnerName = process.env.OWNER_NAME  || [
 /*==>*/  ["Venox"]
]; // [Who is he/she, a human?]


global.sessionID = process.env.SESSION_ID || [
 /*==>*/  [""]
]; // [session, paste here!]


global.BotName = process.env.BOT_NAME || [
  /*==>*/  ["Iris"]
]; // [does bot has any name?]


global.gptapi = process.env.GPT_API || [
/*==>*/  [""]
]; // [chatgpt, api-key here]





// =========================== [ REST 1 ] =================================== //
global.packname = "Iris Bot";
global.author    = "By: Venox";
global.reactmoji = "🎌";
global.themeemoji= "🍀";
// ========================================================================== //





// =========================== [ WA PRESENCE ] ============================== //
global.available = true;
global.autoReadAll = false;
global.antitags = true;
global.autoTyping = false;
global.autoRecord = false;
global.groupevent = false;
global.statusseen = true;
global.autoreadgc = true;
// ========================================================================== //






// =========================== [ IMAGES PATH ] ============================== //
global.BotLogo = fs.readFileSync("./lib/Assets/iris1.jpg");
global.Thumb = fs.readFileSync("./lib/Assets/iris2.jpg");
global.Thumb1 = fs.readFileSync("./lib/Assets/iris3.jpg");
global.ErrorPic = fs.readFileSync("./lib/Assets/iris4.jpg");
// ========================================================================== //




// =========================== [ LINK ARRAYS ] ============================== //
global.ntilinkytvid = ["https://youtube.com"];
global.ntilinkytch = ["https://youtube.com/channel"];
global.ntilinkig = ["https://instagram.com"];
global.ntilinkfb = ["https://facebook.com"];
global.ntilinktg = ["https://t.me"];
global.ntilinktt = ["https://tiktok.com"];
global.ntilinktwt = ["https://twitter.com"];
global.ntilinkall = ["https://example.com"];
global.nticall = ["https://example.com"];
global.ntwame = ["https://example.com"];
global.nttoxic = ["https://example.com"];
global.ntnsfw = ["https://example.com"];
global.ntvirtex = ["https://example.com"];
global.rkyt = ["https://example.com"];
global.wlcm = ["https://example.com"];
global.gcrevoke = ["https://example.com"];
global.autorep = ["https://example.com"];
global.ntilink = ["https"];
// ========================================================================== //







// =========================== [ DEVS STUFF ] ============================== //
global.ownertag = ["8801853262586"];
global.location = "Framgate, Dhaka Divison";
global.sc = "https://github.com/V-E-N-O-X/IRIS-MD";
global.channel = "https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q";
global.vidmenu = { url: '' };
global.websitex = "https://github.com/V-E-N-O-X";
global.lolhuman = "KaysaS";
// =============================================================================== //






// =========================== [ MESS ] ============================== //
global.mess = {
  jobdone: 'Task completed successfully. ✅',
  useradmin: 'Oops! Only *Group Admins* have access to this command. 🚫',
  botadmin: 'Sorry, I require *Admin* permissions to execute this command. 🤖',
  botowner: 'This command is exclusive to my *Owner*. 👑',
  grouponly: 'Hey there! This command is for *Group Chats* only. 🛡️',
  privateonly: 'This command works best in *Private Chats*. 🔒',
  botonly: 'This command is for me and me alone! 🤖',
  waiting: 'Please hold, processing your request... ⏳',
  nolink: 'Oops! Please provide a valid *link*. 🌐',
  error: 'Oh no! An error occurred. Please try again. ❌',
  banned: 'You\'ve been banned from using commands. 🚫',
  bangc: 'Sorry, this group has been banned from using commands. 🚷',
  nonsfw: 'This is a safe space. NSFW commands are disabled. 🚫🔞',
};
// ======================================================================== //






global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
