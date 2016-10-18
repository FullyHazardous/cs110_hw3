const http = require('http');
const server = http.createServer(function(request, response) {
    if(request.url === '/hey'){
        response.writeHead('200', {'Content-Type' : 'text/plain'});
        response.write('WASSUP bruh!');
        response.end();
    }
    else if (request.url === '/Bye'){
      response.writeHead('203', {'Content-Type' : 'text/plain'});
      response.write('See you later, bye');
      response.end();
    }
    else if(request.url === '/bands a make her dance'){
      response.writeHead('201', {'Content-Type' : 'text/plain'});
      response.write('Classic bro!');
      response.end();
    }
    else if(request.url === '/what is wrong'){
      response.writeHead('202');
      response.end('Too MUCH homework this week"kidding"');
    }
    else {
      response.writeHead('404', {'Content-Type' : 'text/plain'});
      response.write('Not FOUND');
      response.end();
    }
})
server.listen(4500, () => console.log('working on port:4500'));