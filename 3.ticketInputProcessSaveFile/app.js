const process=require('process');
const res=require('./ticketsSample.js');

var p=new res.result(process.argv[2],process.argv[3],process.argv[4],process.argv[5]);
p.result;

