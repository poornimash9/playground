/* Write a program to calculate (X4,Y4) of box given that (x1,y1) and height,width of box. */
var args=require('yargs').argv;

var x4,y4;

console.log("Width and Height of Canvas is "+args.canvas_width+" "+args.canvas_height);
console.log("Width and Height of box is "+args.box_width+" "+args.box_height);
console.log("X1 and Y1 of Box is "+args.x1+" "+args.y1);

x4=args.x1+args.box_width;
y4=args.y1+args.box_height;

console.log("X4 of Box is "+x4);
console.log("Y4 of Box is "+y4);
