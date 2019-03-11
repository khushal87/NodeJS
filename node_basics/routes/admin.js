const express = require('express'); //to import express js
const path = require('path');
const router = express.Router(); //this is like a mini express app tied to other express app or pluggable to the other express app.
const productsController=require('../controllers/products')
// router.get('/add-product',(req,res,next )=> {           
//     res.send('<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Add Product</form>');               //remember middleware execution in express goes from top to bottom so this route is defined first or else '/' would mislead us to wrong page. 
// });

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);
    // // console.log("In another middleware!");                           //we see that the next app.use is not executed as we need a next() method to allow the request to travel on to the next middleware.
    // //res.sendFile(path.join(rootDir,'views','add-product.html'));                          //res.send() a utility which allows us to send/respond  any data
    // res.render('add-product', {
    //     pageTitle: 'Add Product',
    //     path: '/admin/add-product',
    //     pathTitle: 'Add Product'
    // }) //2nd key value pair (path) is for defining the path for which the following code will be rendered

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProducts);
// (req, res, next) => { //there are two methods get and post.Here we are getting a post data or working with post request thus we need app.post
//     products.push({
//         title: req.body.title
//     });
//     res.redirect('/'); //used for redirecting 
// }
module.exports=router;
