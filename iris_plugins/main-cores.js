const { iris, commands } = require("../lib/iris_plugins.js");
const { performance } = require('perf_hooks');
const font = require("@viper-x/fancytext");
let venox = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "displayName": "IRIS-MD","vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=8801853262586:8801853262586\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//---------------------------------------------------------------------------
iris(
    {
        name: "ping",
        desc: "To check ping",
        category: "core",
    },
    async (Void, citel) => {
        const sendMessageAndMeasurePing = async (message) => {
            const start = performance.now();
            const pong = await void.sendMessage(citel.jid, message, { quoted: venox });
            const end = performance.now();
            return end - start;
        };

        const sendPongMessage = async (pingTime) => {
            await void.sendMessage(citel.jid, { text: `🍀 _Pong : ${pingTime} ms_`, edit: pong.key });
        };

        const pingTimes = [];
        for (let i = 0; i < 5; i++) {
            const pingTime = await sendMessageAndMeasurePing({ text: "```Checking Ping...```" });
            pingTimes.push(pingTime);
        }

        for (let i = 0; i < 5; i++) {
            await sendPongMessage(pingTimes[i]);
        }
    }
);
