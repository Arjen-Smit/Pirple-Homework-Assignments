/*
 * The router defines which handler should be run by the path
 */

const handlers = require('./handlers');

const router = {
    '/hello' : handlers.hello,
};

module.exports = router;