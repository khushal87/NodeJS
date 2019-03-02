
const http = require('http');           //after importing expressjs we can remove our http also as we dont need it
const express=require('express');           //to import express js

const app=express();                    //execute express as a function
app.use((req,res,next )=> {
    console.log("In the middleware!");
    next();                     //Allows the request to continue to the next middleware in line.
});
app.use((req,res,next )=> {
    console.log("In another middleware!");              //we see that the next app.use is not executed as we need a next() method to allow the request to travel on to the next middleware.
    res.send('<h1>Hello from express!</h1>');            //res.send() a utility which allows us to send/respond  any data
});

// const server=http.createServer(app);                 //pass app here
// server.listen(3000);

app.listen(3000);

 
