var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysecretpassword',
  database : 'mysql'
});
 
// -----------------------------------
//  Your Code
//    1) connect to the database
//    2) read or write to database
// -----------------------------------
