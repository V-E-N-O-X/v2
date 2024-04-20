const fs = require("fs");



const config = {
    owner: process.env.SUDO || ["8801853262586", "8801928502256"],
    prefa: process.env.PREFIX || ["."],
    OwnerName: process.env.OWNER_NAME || "VenoxSenpai",
    sessionID: process.env.SESSION_ID || "",
    BotName: process.env.BOT_NAME || "iris-md",
    gptapi: process.env.GPT_API || "",
    packname: "Iris Bot",
    author: "By: Venox",
    reactmoji: "🎌",
    themeemoji: "🍀",
    available: true,
    autoReadAll: false,
    antitags: true,
    autoTyping: false,
    autoRecord: false,
    groupevent: false,
    autoreadgc: true,
    BotLogo: fs.readFileSync("./lib/assets/iris1.jpg"),
    Thumb: fs.readFileSync("./lib/assets/iris2.jpg"),
    Thumb1: fs.readFileSync("./lib/Assets/iris3.jpg"),
    ErrorPic: fs.readFileSync("./lib/assets/iris4.jpg"),
    links: {
        ntilinkytvid: ["https://youtube.com"], 
        ntilinkytch: ["https://youtube.com/channel"],
        ntilinkig: ["https://instagram.com"],
        ntilinkfb: ["https://facebook.com"],
        ntilinktg: ["https://t.me"],
        ntilinktt: ["https://tiktok.com"],
        ntilinktwt: ["https://twitter.com"],
        ntilinkall: ["https://example.com"],
        ntilink: ["https"]
    },
    devs: {
        ownertag: "8801853262586",
        location: "Framgate, Dhaka Divison",
        sc: "https://github.com/V-E-N-O-X/IRIS-MD",
        channel: "https://whatsapp.com/channel/0029VaHt1710AgWB1B0Lkg0Q",
        vidmenu: { url: 'https://media1.tenor.com/m/62BV0H4Pnq8AAAAC/anime.gif' },
        websitex: "https://github.com/V-E-N-O-X",
        lolhuman: "KaysaS"
    },
    messages: {
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
        nonsfw: 'This is a safe space. NSFW commands are disabled. 🚫🔞'
    },
    limitawal: {
        premium: "Infinity",
        free: 2,
        monayawal: 1000,
        rakyat: "Infinity",
        free: 100
    },
    APIs: {
        zenz: "https://zenzapis.xyz"
    },
    APIKeys: {
        "https://zenzapis.xyz": "5d1197db351b"
    }
};

module.exports = global;
