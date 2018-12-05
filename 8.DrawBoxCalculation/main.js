
/**
 * Program to determine the number of lines required to place the given text into box
 */var fs=require('fs');

const box_width=300,box_height=700;
const line_height=18;

var lineCounter=0,charCounter=0;
var lineInBox=[];

var line=[];
var stringVal,val,i;
var sum=0;

fs.readFile("./paragraph.txt","utf8",function(err,data){
    if (err) throw err;
    for(i=0;i<data.length;i++){
        line.push(data[i]);
    }
})

fs.readFile("./font.json",'utf8',function(err,data){
    if(err) throw err;
    for(i=0;i<line.length;i++){
        stringVal=line[i];
        val=JSON.parse(data);
        sum=sum+(val[stringVal]-0);
        charCounter++;
        lineInBox.push(line[i]);

        if(sum===(box_width-1)||sum===(box_width-2)||sum===(box_width-3)||sum===(box_width-4)||sum===(box_width)||line===null){
            lineCounter++;
            sum=0;
            i=charCounter;
			lineInBox = lineInBox.toString();
			lineInBox = lineInBox.replace (/,/g, "");
            lineInBox = lineInBox.replace(/\n/g, ""); 
            console.log(lineInBox);
            lineInBox=[];      
              
        }
    }
    lineCounter++;
	lineInBox = lineInBox.toString();
	lineInBox = lineInBox.replace (/,/g, "");
    lineInBox = lineInBox.replace (/\n/g , "");
    console.log(lineInBox);
    console.log("Number of line required to add text to Box is "+lineCounter);	
    var textInBox=lineCounter*line_height;
    if(textInBox<=box_height){
        console.log("Entire paragraph will fit into box");
    }
    else{
        console.log("Oops!Paragraph will not fit into box");
    }
});


