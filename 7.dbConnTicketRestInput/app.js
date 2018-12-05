/*Program to Save and Update the data of tickets into mySQL Database using REST API*/
const db=require('./dbConnRestInput.js');
const args=require('yargs').argv; 

if(args.cmd==='saveTicket'){
    db.saveTicket();
}
else if(args.cmd==='updateTicket'){
    db.updateTicket();
}
else{
    console.log("Unknown Command");
}

