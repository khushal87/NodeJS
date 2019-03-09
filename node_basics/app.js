//const http = require('http');                                       //after importing expressjs we can remove our http also as we dont need it                                       
const express=require('express');                                     //to import express js
const bodyParser=require('body-parser');
const path=require('path');
const adminData=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const app=express();                                                  //execute express as a function

app.set('view engine' , 'pug');                                         //allows us to set any value globally on our express application.Basically allows us to tell express hey for any dynamic templates we're trying to render please use this engine(here pug).
app.set('views','views');                             //allows us to tell express where to find these dynamic views mentioned above. 2nd parameter is the file name
// app.use((req,res,next )=> {
//     console.log("In the middleware!");
//     next();                                                        //Allows the request to continue to the next middleware in line.
// });

app.use(bodyParser.urlencoded({extended:false}));                     //used to parse the body.It(urlencoded()) can basically parse body,form-data etc but not files.
app.use(express.static(path.join(__dirname,'public')));               //serving file statically               
app.use('/admin', adminData.routes);                                                 //order matters
app.use(shopRoutes);
// const server=http.createServer(app);                               //pass app here
// server.listen(3000);
app.use('/',(req,res,next) =>
{
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));                 //if the page accessed is not found we return the error with error code 404 which is commen for page not found 
    res.status(404).render('404', {pathTitle:'Page not found'});
});
app.listen(3000);
