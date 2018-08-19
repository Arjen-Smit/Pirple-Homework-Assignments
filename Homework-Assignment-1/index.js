/*
 * Start http server and forward all requests to the server function
 */

const http = require('http');
const environment = require('./environment');
const server = require('./server');

const httpServer = http.createServer(server);

httpServer.listen(environment.port, () => {
   console.log('Server started on port: ' + environment.port);
});