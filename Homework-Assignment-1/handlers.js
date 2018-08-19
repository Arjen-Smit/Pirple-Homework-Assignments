/*
 * Handlers that can be handled by the requests.
 *
 * Routed handlers are define in router.js
 */

const handlers = {};

handlers.hello = (data, callback) => {

    let response = {
        message: 'Hello stranger, what\'s your name?',
    };

    if (data.payload && data.payload.name) {
        response = {
            message: 'Hello ' + data.payload.name + ', My name is Nody the Node Application ;)',
        }
    }

    callback(200, response)
};

handlers.unknown = (data, callback) => {
    callback(406, {name: 'How rude, you could at least say hello first'});
};

module.exports = handlers;