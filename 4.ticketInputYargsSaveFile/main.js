/*Program to Save the data of tickets from command line aruguments using 3rd party module YARGS and saving into files*/

const res=require('./tickets.js');
var args=require('yargs').argv;

if(args.cmd==='saveTicket'){
    res.saveTicket();
        console.log("Saved ticket successfully");
    
}else if(args.cmd==='updateTicket'){
    res.updateTicket(args.phone);
    console.log("Updated data successfully")
}else{
    console.log("Unknown Command");
}
