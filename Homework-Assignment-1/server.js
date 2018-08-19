/*
 * The main server body where the request and response is handled.
 */

const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;
const router = require('./router');
const handlers = require('./handlers');
const util = require('./util');

const server = (req, res) => {

    // parse Url (not parsing the queryString since it won't be used
    const parsedUrl = url.parse(req.url);

    // Parse the request path leaving the leading slash. This makes it a absolute path (personal preference).
    const path = parsedUrl.pathname.replace(/\/+$/g, '');

    // Starting a decoder to handle the incomming json from the request.
    const decoder = new stringDecoder('utf-8');
    let buffer = '';

    // Add data to buffer.
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    // Finish adding data to buffer.
    req.on('end', () => {
        buffer += decoder.end();

        // Create data object with the payload from the request if it's valid json
        const data = {
            payload: util.isValidJSON(buffer) ? JSON.parse(buffer) : {},
        };

        // Select handler by given route.
        const routedHandler = router.hasOwnProperty(path) ? router[path] : handlers.unknown;

        // Run Handler
        routedHandler(data, (statusCode, payload) => {
            statusCode = typeof(statusCode) === 'number' ? statusCode : 200;
            payload = typeof(payload) === 'object' ? payload : {};

            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(JSON.stringify(payload));

            console.log(path, data, 'resulted in: ', statusCode, payload);
        });
    });
};

module.exports = server;