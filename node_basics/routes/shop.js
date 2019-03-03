const path=require('path');    
const express=require('express');                                    //to import express js
const router=express.Router();
// router.use('/',(req,res,next )=> {
//     // console.log("In another middleware!");                           //we see that the next app.use is not executed as we need a next() method to allow the request to travel on to the next middleware.
//      res.send('<h1>Hello from express!</h1>');                          //res.send() a utility which allows us to send/respond  any data
//  });
router.get('/',(req,res,next )=> {
    // console.log("In another middleware!");                           //we see that the next app.use is not executed as we need a next() method to allow the request to travel on to the next middleware.
     res.sendFile(path.join(__dirname,'../','views','shop.html'));                          //res.send() a utility which allows us to send/respond  any data
 });    //here we send html file using sendFile utility.
 module.exports=router;
