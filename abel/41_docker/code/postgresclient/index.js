var connectionString = 'postgresql://postgres:mysecretpassword@localhost:5432/postgres';
var { Client } = require('pg');
var client = new Client({
  connectionString: connectionString,
});

// -----------------------------------
//  Your Code
//    1) connect to the database
//    2) read or write to database
// -----------------------------------
