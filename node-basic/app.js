//console.log("hello from node.js");
//console.log("PROCESS: ", process);
//function test(x,y){
//    return x-y;
//}
//module.exports.one = test;
////console.log("sum: ", exports.two(2,3));
//console.log("PROCESS: ", process);
//
//const http = require("http");
//const server = http.createServer((req,res) => {
//    res.end("server for nodejs");
//});
//
//server.listen(3000);

//const express = require('express')
//const app = express()
//
//app.get('/', (req, res) => {
//  res.send('Hello World');
//});
//
//app.listen(3000)
const fs = require('fs');
const filename = "target.txt"
fs.watch(filename, ()=> {console.log("file is changed")});