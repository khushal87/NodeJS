//we do it by first importing the module
//then to create the server we use the method createSever.
//it generally takes two arguments one is the request listener with request and response and the
const http = require('http'); 
const fs= reuqire('fs');
// function reqlisten(req,res)
// {                                                //a way to define a request listener

// }

const server=http.createServer(function(req,res)
{
    const url=req.url;
    if(url==='/')                                                          //if '/' this code is executed or else the code following the curly braces is been processed 
    {
    res.setHeader('Content-Type','text/html');                             //used to set header(sort of a metadata)
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");                //html code
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write("</html>") ;  
    return res.end();                                                      //we have done it because without it the lines after the if statement is executed and which will create a error.
    }
    if(url==='/message'&&method==='POST')
    {
        fs.writeFileSync('message.txt','Dummy');
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');   //used to set header(sort of a metadata)
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");                //html code
    res.write("<body><h1>Hello from my node js server.</h1></body>");
    res.write("</html>") ;  
    res.end();                                                             //using standard functions
});

server.listen(3000);

// http.createServer((req,res) =>
// {
//     console.log(req);                                                   // creating the srever request using aarrow functions using arrow function 
// });
