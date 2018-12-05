/*Program to Display Hello World and username and hostname of current user in console*/
var os=require('os');

console.log('Hello World');
console.log('Hello '+ os.userInfo().username);
console.log(os.hostname());
