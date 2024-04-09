// Importing required modules
var info = require("../info");

// Array to store commands
var commands = [];

// Function to add commands
function iris(info, func) {
    // Copying info object
    var data = Object.assign({}, info);

    // Setting default values if not provided
    data.function = func;
    data.dontAddCommandList = data.dontAddCommandList || false;
    data.desc = info.desc || '';
    data.fromMe = data.fromMe || false;
    data.category = info.category || 'misc';

    // Adding command to the list
    commands.push(data);
    
    // Returning the added command data
    return data;
}

// Exporting functions and commands
module.exports = {
    iris,
    AddCommand: iris,
    Function: iris,
    Module: iris,
    xmd: iris,
    commands
}; 
