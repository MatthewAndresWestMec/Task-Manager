const http = require('http');
const path = require('path');

// basic local host server
const server = http.createServer((req, res) => {
    console.log(req.method)
    const url = req.url;
    // home page
    if(url == '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Welcome to the Home Page</h1>');
        res.end()
    }
    // about page
    else if(url == '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About us</h1>');
        res.end()
    }
    // error 404
    else{
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Error 404</h1>');
        res.end()
    }
}).listen(6000)

server.listen(6000)