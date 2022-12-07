const http = require('http');

const server = http.createServer((req, res) =>{
    const url = req.url;
    if(url == "/profile"){
        res.setHeader('Content-Type','text/html');
        res.write('<p>This is a profile page.</p>');
        return res.end();
    }
    else if(url == "/"){
        res.setHeader('Content-Type','text/html');
        res.write('<p>cheeseburgers</p>');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<p>Page not found</p>');
    res.end();

})

server.listen(3001);