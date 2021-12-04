import fs from "fs";
import express from "express";
const app = express()

let year = new Date().getFullYear().toString();
let month = new Date().getMonth()+1;   //the month of a date as a number from 0 to 11.                             
let date = new Date().getDate();  //To get the correct month, you must add 1:
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();

month = month <10? "0"+month:month
date = date < 10? "0"+date:date
hour = hour < 10? "0"+hour:hour
minute = minute <10? "0"+minute:minute
second = second <10? "0"+second:second

const dateTime = year+month+date+"-"+hour+minute+second;
const timeStamp ="Current TimeStamp in seconds : " + Math.floor(Date.now()/1000);// timeStamp in seconds

const PORT=process.env.PORT
app.get('/',(request,response)=>{
  response.send("hello")
})

// to create file
app.get('/createfile',(request,response)=>{
  fs.writeFile(`./files/${dateTime}.txt`,`${timeStamp}`,function (err){
    if(err){
      console.log(err)
    }
})
response.send("file created successfully")
 })

 //to read file directory
app.get('/allfiles',(request,response)=>{
fs.readdir("./files",(err,files)=>{
    if(err){
        console.log(err)
    }
    response.send(files.toString());
})
})

app.listen(PORT,()=>console.log("App is started",PORT));

