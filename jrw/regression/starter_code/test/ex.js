var fs = require('fs');
var vm = require('vm');
var api = {};

api.load = function(path) {
    // load code into script
    var text = fs.readFileSync(path);
    var script = new vm.Script(text);

    // run script in new context
    var sandbox = {};
    script.runInNewContext(sandbox);

    // return exercise object
    return sandbox.exercise;
};

// package API
module.exports = api;