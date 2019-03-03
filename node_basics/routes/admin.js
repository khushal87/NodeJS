const express=require('express');                                    //to import express js

const router=express.Router();                                        //this is like a mini express app tied to other express app or pluggable to the other express app.

router.get('/add-product',(req,res,next )=> {           
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add Product</form>');               //remember middleware execution in express goes from top to bottom so this route is defined first or else '/' would mislead us to wrong page. 
});
router.post('/product',(req,res,next)=> {                                  //there are two methods get and post.Here we are getting a post data or working with post request thus we need app.post
    console.log(req.body);
    res.redirect('/');                                                   //used for redirecting 
});
module.exports=router; 
