const express = require('express');
const path = require('path');
const app = express();

/* Set up static middleware - express is the middleware. 
// nodejs (foundation) -> express (libraries)

// Middleware comes in the middle of the request and response cycle of the node.js execution. 
// It also provides access to many functions like request and response objects.


/////////////////////////////////////////////////////

// Response object is passed as the second parameter to the requestListener function.. The response
// object represents the writable stream back to the client

--write() sends text or text stream to the client
--writeHead() sends status and response headers to the client
--end() signals that the server should consider that the response is complete. Last
getHeader() returns the value of the specified header
setTimeout - sets timeout value by miliseconds
--statuscode - Sets the status code that will be sent to the client

For the writeHead and setStatusCode methods the Following are acceptable:
100-199 Information Resoponse
200-299 Successful Response
300-399 Redirect Message
400-499 Client Error
500-599 Server Error

list here: @https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


// Request object is made by a client to a named host which is located on the server. 
The aim of the request is to access resources on the server.
A proper HTTP request contains the following:
-- A request line
-- A series of HTTP header(s)
-- A message body if needed

Request Line: Had 3 main aspects
-- A method like GET, UPDATE, DELETE ... etc tells the server 
what it should do with the resource
-- The Path component identifies the resource on the server
-- The HTTP Version number showing what specification to which the client has tried to make 
the message comply

HTTP Headers:
HTTP headers are written on a message to provide the recipients with
information about the request, the sender and the way in which the sender
wants to communicate with the serve / recipient.
Ex. {'content-type': 'text/html'},
-host, user-agent ... 


app.use(express.static(path.join(__dirname, '/public'))); 


Middleware examples
get: It refers to the HTTP method

function: It is the middleware function

req: It refers to the HTTP request argument

res: It refers to the HTTP response argument

next: It refers to the callback argument
*/
app.get('/', (req, res) =>{
    console.log(req.url);
    res.sendFile(path.resolve(__dirname, '/public/index.html'));
})

app.get('*', (req, res) =>{
    res.status(404).send("wrong page 404")
});

app.listen(5000, (req, res) =>{
    console.log('server is listening on port 5000')
})