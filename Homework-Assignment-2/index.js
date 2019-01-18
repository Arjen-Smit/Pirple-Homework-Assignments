/*
 * Start http server and forward all requests to the server function
 */

// const http = require('http');
// const environment = require('./environment');
// const server = require('./server');
//
// const httpServer = http.createServer(server);
//
// httpServer.listen(environment.port, () => {
//     console.log('Server started on port: ' + environment.port);
// });

const User = require('./model/user');
const myuser = new User();

// myuser.load(123);
myuser.name = "Arjen Smit";
myuser.email = "arjen@alnitak.nl";
myuser.address = "Kratonkade 9";
myuser.save();


const newUser = new User();
newUser.name = "Klaar";
newUser.email = "klaar@kees.org";
newUser.address = "Nowhere";
newUser.save();
