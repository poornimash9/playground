/*Program to Save the data of tickets from the HTML form*/
var express = require("express");
var app     = express();
var path    = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "nodedb"
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/ticket_support.html'));
});
app.post('/submit',function(req,res){

  var product=req.body.product_type;
  var name=req.body.cx_name;
  var phone=req.body.phone;
  var imei=req.body.imei;
  var b_loc=req.body.buy_loc;
  var vendor=req.body.vendor;
  var ven_loc=req.body.ven_loc;
  var reason=req.body.desc;
 
  res.write('You sent the product "' + req.body.product_type+'".\n');
  res.write('You sent the name "' + req.body.cx_name+'".\n');
  res.write('You sent the phone "' + req.body.phone+'".\n');
  res.write('You sent the imei "' + req.body.imei+'".\n');
  res.write('You sent the buy_loc "' + req.body.buy_loc+'".\n');
  res.write('You sent the vendor "' + req.body.vendor+'".\n');
  res.write('You sent the ven_loc "' + req.body.ven_loc+'".\n');
  res.write('You sent the desc "' + req.body.desc+'".\n');

  con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO tickets (type_product,buyer_name,phone,imei,buyer_location,vendor_name,vendor_location,ticket_reason) VALUES ('"+product_type+"', '"+cx_name+"','"+phone+"','"+imei+"', '"+buy_loc+"','"+vendor+"','"+ven_loc+"', '"+desc+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
     res.end();
  });
  });
})
app.listen(3000);
console.log("Running at Port 3000");
