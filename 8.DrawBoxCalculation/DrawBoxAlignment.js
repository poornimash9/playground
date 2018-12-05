/*Write a program to calculate (X1,Y1) of box given that height,width of canvas,height,width of box and alignment of Box .*/

var args=require('yargs').argv;

var x1,y1;

console.log("Width and Height of Canvas is "+args.canvas_width+" "+args.canvas_height);
console.log("Width and Height of box is "+args.box_width+" "+args.box_height);

if(args.alignment==='left'){
    x1=0;
    y1=0;
    console.log("X1 of Box is "+x1);
    console.log("Y1 of Box is "+y1);

}else if(args.alignment==='center'){
    x1=((args.canvas_width-box_width)/2);
    y1=((args.canvas_height-box_height)/2);
    console.log("X1 of Box is "+x1);
    console.log("Y1 of Box is "+y1);
}else if(args.alignment==='right'){
    x1=(args.canvas_width-box_width);
    y1=0;
    console.log("X1 of Box is "+x1);
    console.log("Y1 of Box is "+y1);
}else{
    console.log("Enter the alignment as either left/center/right");
}


