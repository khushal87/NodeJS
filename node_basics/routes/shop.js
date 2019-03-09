const path=require('path');                                            //we need this as the directory name doesnt work in form of slash so we use it.
const express=require('express');                                    //to import express js
const rootDir=require('../util/path.js')
const adminData=require('./admin');

const router=express.Router();



router.get('/',(req,res,next )=> {
    // console.log("In another middleware!");                           //we see that the next app.use is not executed as we need a next() method to allow the request to travel on to the next middleware.
    console.log('shop.js',adminData.products);
     res.sendFile(path.join(rootDir,'views','shop.html'));                          //res.send() a utility which allows us to send/respond  any data
 });                                                            //path join detects the operating system and then manually provid ethe correct path

 module.exports=router;                                                    //to export router  
