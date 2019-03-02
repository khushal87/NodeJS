
const http = require('http'); 
const express=require('express');           //to import express js

const app=express();                    //execute express as a function

const server=http.createServer(app);        //pass app here
app.use((req,res,next )=> {
    console.log("In the middleware!");
    next();                     //Allows the request to continue to the next middleware.
});
app.use((req,res,next )=> {
    console.log("In another middleware!");              //we see that the next app.use is not executed as we need a next() method to allow the request to travel on to the next middleware.
});
server.listen(3000);

 
