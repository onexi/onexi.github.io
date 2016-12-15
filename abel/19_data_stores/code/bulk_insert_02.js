// bulk insert
var data = [
  { name : 'dan', email : 'dan@mit.edu'}, 
  { name : 'bob', email : 'bob@mit.edu'}, 
  { name : 'lou', email : 'lou@mit.edu'}, 
  { name : 'meg', email : 'meg@mit.edu'}, 
  { name : 'amy', email : 'amy@mit.edu'}, 
  { name : 'liv', email : 'liv@mit.edu'},         
];

var length = data.length;
for (var i = 0; i < length; i++) {
  db.students.insert(data[i]);
}


