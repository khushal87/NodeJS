//const http = require('http');                                       //after importing expressjs we can remove our http also as we dont need it                                       
const express=require('express');                                    //to import express js
const bodyParser=require('body-parser');
const path=require('path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const app=express();                                                    //execute express as a function
// app.use((req,res,next )=> {
//     console.log("In the middleware!");
//     next();                                                          //Allows the request to continue to the next middleware in line.
// });

app.use(bodyParser.urlencoded({extended:false}));                      //used to parse the body.It(urlencoded()) can basically parse body,form-data etc but not files.
app.use(express.static(path.join(__dirname,'public')));             //serving file statically   
app.use(adminRoutes);                                                  //order matters
app.use(shopRoutes);
// const server=http.createServer(app);                                 //pass app here
// server.listen(3000);
app.use('/',(req,res,next) =>
{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));                 //if the page accessed is not found we return the error with error code 404 which is commen for page not found 
});
app.listen(3000);

 
