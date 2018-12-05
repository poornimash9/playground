var db=require('mysql');
var args=require('yargs').argv;
//var valid=require('validator');


module.exports={
    saveTicket:function(){

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
        
        var ticket={productNum:args.product,phoneNum:args.phone,emailId:args.email,location:args.location,problem:args.problem,status:args.status};

        conn.query('INSERT INTO ticketTable SET ? ',ticket,function(err,results,fields){
            if(err) throw err;
            console.log("inserted");
            conn.end();
   
        })
    }
};






















 /*conn.query('INSERT INTO ticketTable(productNum,phoneNum,emailId,location,problem) VALUES '+args.product+','+args.phone+','+args.email+','+args.location+','+args.problem+'',function(err){
            if(err) throw err;
            console.log("inserted");
        })*/