// BASIC HTTP APP TEMPLATE
const http = require('http')
const path = require('path')
const {readFileSync} = require('fs')

// get All FIles
const homePage = readFileSync(path.join(__dirname, '/public/index.html'))
const homeStyles = readFileSync(path.join(__dirname, '/public/styles.css'))
const homeImage = readFileSync(path.join(__dirname, '/public/logo.svg'))
const homeLogic = readFileSync(path.join(__dirname, '/public/browser-app.js'))

const server = http.createServer(function (req, res) {
    const url = req.url
    console.log(url)
    // Homepage
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
    // styles
    else if(url == '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write('<h1>About us</h1>');
        res.end()
    }
    // styles
    else if(url == '/logo.svg'){
        res.writeHead(200, {'content-type': 'text/svg+xml'});
        res.write('<h1>About us</h1>');
        res.end()
    }
    // logic
    else if(url == '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write('<h1>About us</h1>');
        res.end()
    }
    // error 404
    else{
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Error 404</h1>');
        res.end()
    }
})