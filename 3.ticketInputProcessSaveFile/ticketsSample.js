const fs=require('fs');

module.exports.result=function(product_num,phone,email,location){
    fs.writeFile('saveTicket.txt',product_num+" "+phone+" "+email+" "+location,function(err){
        if(err) throw err;
        console.log("saved..");
    })
}