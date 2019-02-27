//we do it by first importing the module
//then to create the server we use the method createSever.
//it generally takes two arguments one is the request listener with request and response and the
const http = require('http'); 
// function reqlisten(req,res)
// {                                                //a way to define a request listener

// }

const server=http.createServer(function(req,res)
{
    console.log(req);                              //using standard functions
});

server.listen(3000);

// http.createServer((req,res) =>
// {
//     console.log(req);                                creating the srever request using aarrow functions using arrow function 
// });
