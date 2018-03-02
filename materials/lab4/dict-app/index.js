var fs = require('fs');
var generateDict = require('./dict-generator');

// 1. generate a dictionary for five
var dict = generateDict('earth');
// 2. save our dictionary to a file
var data = "var dictionary = " 
    + JSON.stringify(dict);
fs.writeFileSync('dictionary.js', data);