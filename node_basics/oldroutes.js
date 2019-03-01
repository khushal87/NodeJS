const fs= require('fs');  
const requestHandler = (req,res) => {
    const url=req.url;
    const method=req.method;  
    if(url==='/')
    {
    res.setHeader('Content-Type','text/html');   //used to set header(sort of a metadata)
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");      //html code
    res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
        );
    res.write("</html>") ;  
    return res.end();                                               //we have done it because without it the lines after the if statement is executed and which will create a error.
    }
    if(url==='/message'&&method==='POST')
    {
        const body=[];
        req.on('data', chunk =>
        {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',() =>
        {
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err =>           //
            {
                res.statusCode=302;
                res.setHeader('Location','/');                      //a non blocking code system.Thats why nodeJS is good as it never blocks your code.It just goes ahead and tells the operating system do that do this and then eventually comes back and does something in the callback
                return res.end();
            });
        });  
    }
    res.setHeader('Content-Type','text/html');   //used to set header(sort of a metadata)
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");      //html code
    res.write("<body><h1>Hello from my node js server.</h1></body>");
    res.write("</html>") ;  
    res.end();                                           //using standard functions
};  
module.exports =requestHandler;
