var info = require("../info");
var commands = [];

function iris(info, func) {
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!info.desc) info.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!info.category) data.category = 'misc';
    commands.push(data);
    return data;
}
module.exports = {
    iris,
    AddCommand:iris,
    Function:iris,
    Module:iris,
    xmd:iris,
    commands,
}; 
