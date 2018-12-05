
var fs=require('fs');
var args=require('yargs').argv;

module.exports={
    saveTicket:function(){
        
        fs.appendFile('saveTickets.txt',"\n"+args.product+" "+args.phone+" "+args.email+" "+args.location,function(err){
            if(err) throw err;
        })
    },
    updateTicket:function(){
        fs.readFile('saveTickets.txt','utf8',function(err,data){
            if(err) throw err;
            console.log("File contents are"+data.toString());
        })
    }
}














//product_num,phone,email,location
//console.log(args);

















/*fs.writeFile('saveTicket.txt',product_num+" "+phone+" "+email+" "+location,function(err){
            if(err) throw err;
            //console.log("saved..");
        })*/

/*const fs=require('fs');

//const phone=p.argv[2];
//const email=p.argv[3];
//const location=p.argv[4];


var result;
var fileName=fs.createWriteStream("saveTicket.txt");
console.log("file created");
fileName.end();


exports.result=function(phone,email,location){
    var writeStream=fs.createWriteStream("saveTicket.txt",'utf8');
    //fs.appendFile('saveTicket.txt',phone+""+email+""+location);
    writeStream.write(phone+" "+email+" "+ location);
    console.log("saved..");
    writeStream.end();
    console.log("Phone is "+phone,"Email is "+email, "Location is "+location);
}*/