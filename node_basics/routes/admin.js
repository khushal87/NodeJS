const express=require('express');                                    //to import express js

const router=express.Router();                                        //this is like a mini express app tied to other express app or pluggable to the other express app.

// router.get('/add-product',(req,res,next )=> {           
//     res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add Product</form>');               //remember middleware execution in express goes from top to bottom so this route is defined first or else '/' would mislead us to wrong page. 
// });
router.get('/add-product',(req,res,next )=> {
    // console.log("In another middleware!");                           //we see that the next app.use is not executed as we need a next() method to allow the request to travel on to the next middleware.
     res.sendFile(path.join(__dirname,'../','views','add-product.html'));                          //res.send() a utility which allows us to send/respond  any data
 }); 
router.post('/product',(req,res,next)=> {                                  //there are two methods get and post.Here we are getting a post data or working with post request thus we need app.post
    console.log(req.body);
    res.redirect('/');                                                   //used for redirecting 
});


//module.exports=router; 

exports.routes=router;
exports.products=products;                  //since we changed the way it is exported the app.js should also be modified
