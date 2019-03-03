//const http = require('http');                                       //after importing expressjs we can remove our http also as we dont need it                                       
const express=require('express');                                    //to import express js
const bodyParser=require('body-parser');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const app=express();                                                    //execute express as a function
// app.use((req,res,next )=> {
//     console.log("In the middleware!");
//     next();                                                          //Allows the request to continue to the next middleware in line.
// });

app.use(bodyParser.urlencoded({extended:false}));                      //used to parse the body.It(urlencoded()) can basically parse body,form-data etc but not files.
app.use(adminRoutes);                                                  //order matters
app.use(shopRoutes);
// const server=http.createServer(app);                                 //pass app here
// server.listen(3000);

app.listen(3000);

 
