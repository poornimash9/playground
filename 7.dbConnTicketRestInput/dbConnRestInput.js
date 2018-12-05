const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const db=require('mysql');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

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

        var server = app.listen(8083, function () {
            var host = server.address().address
            var port = server.address().port
            console.log("Save Ticket app listening at http://%s:%s", host, port)
        })

        app.post('/addTicket',function(req,res){

            data = req.body;        
            conn.query('INSERT INTO ticketTable SET ? ',data,function(err,results,fields){
                if(err) throw err;
                console.log("New ticket created successfully");
                conn.end();
            })

        })
    },

    updateTicket:function(){

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

        var server = app.listen(8083, function () {
            var host = server.address().address
            var port = server.address().port
            console.log("Update Ticket app listening at http://%s:%s", host, port)
        })

        app.put('/updateTicket/:id/:status',function(req,res){
            id = req.params.id;        
            status=req.params.status;

            conn.query('UPDATE ticketTable SET status=? WHERE ticketId=?',[status,id],function(err,results,fields){
                if(err) throw err;
                console.log("Ticket status updated Successfully");
                conn.end();
            })
        })
    }

}

