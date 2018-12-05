/*Program to Save the data of tickets from tickets.json file into mySQL Database*/
var fs=require('fs');
var db=require('mysql');

var conn=db.createConnection({
   host:"localhost",
   user:"root",
   password:"P@ssw0rd",
   database:"ticketDB"
});
conn.connect(function(err){
   if(err) throw err;
   console.log("Connected to DB");
});

fs.readFile("./tickets.json", 'utf8', function (err, data) {
   data = JSON.parse( data );
   console.log( data );
   conn.query('INSERT INTO ticketTable SET ? ',data,function(err,results,fields){
      if(err) throw err;
      console.log("New ticket created successfully");
      conn.end();
   })
});
