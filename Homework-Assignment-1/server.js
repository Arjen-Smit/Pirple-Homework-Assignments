/*
 * The main server body where the request and response is handled.
 */

const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;
const router = require('./router');
const handlers = require('./handlers');
const util = require('./util');

const server = (req, res) => {

    const parsedUrl = url.parse(req.url, true);

    const path = parsedUrl.pathname.replace(/\/+$/g, '');

    const decoder = new stringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        buffer += decoder.end();

        // Create data object with the payload from the request if it's valid json
        const data = {
            payload: util.isValidJSON(buffer) ? JSON.parse(buffer) : {},
        };

        const routedHandler = router.hasOwnProperty(path) ? router[path] : handlers.unknown;

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