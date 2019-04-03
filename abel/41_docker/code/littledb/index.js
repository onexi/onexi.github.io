var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db 	    = low(adapter);

// Set some defaults
db.defaults({ posts: [], user: {} })
  .write();
 
// ----------------------
//    Your Code
// ----------------------
