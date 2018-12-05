/*Write a program to calculate (X1,Y1) of box given that height,width of canvas and height,width of box as 80% of canvas.*/

var args=require('yargs').argv;
var x1,y1;

console.log("Width and Height of Canvas is "+args.canvas_width+" "+args.canvas_height);
console.log("Percentage of box within canvas "+args.percentage);

var box_width=((args.canvas_width*args.percentage)/100);
var box_height=((args.canvas_height*args.percentage)/100);
console.log("Width and Height of box is "+box_width+" "+box_height);

x1=((args.canvas_width-box_width)/2);
y1=((args.canvas_height-box_height)/2);

console.log("X1 of Box is "+parseInt(x1));
console.log("Y1 of Box is "+parseInt(y1));

