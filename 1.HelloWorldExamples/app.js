/*Program to Display Hello World On Browser*/
const http=require('http');

http.createServer((req,res)=>function(){
    res.writeHead(200,{'contentType':'text/plain'});
    res.write('Hello World....');
    res.end();
}).listen(3001);