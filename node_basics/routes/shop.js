const path=require('path');                                            //we need this as the directory name doesnt work in form of slash so we use it.
const express=require('express');                                    //to import express js
const rootDir=require('../util/path.js')
const adminData=require('./admin');

const router=express.Router();



router.get('/',(req,res,next )  => {
    const products = adminData.products;
    res.render('shop',{prods : products,docTitle : 'Shop' , path:'/',pathTitle:'Shop'});                                //res.render is used to render the templating file it will have first argument as the file name and the other arguments are the arguments of the feature which we give to render dynamic template
    });                                                            //path join detects the operating system and then manually provid ethe correct path

 module.exports=router;                                                    //to export router  
