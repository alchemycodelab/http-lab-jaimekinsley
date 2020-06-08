const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.path === '/'){
      socket.end(createResponse({ body: 'hi' }));
    }
    else if(request.path === '/echo'){
      socket.end(createResponse({ body: request.body, status: '200 OK' }));
      console.log(request.body);
    }
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
