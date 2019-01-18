const config = require('../config');
const crypto = require('crypto');

const helpers = {};

// Parse a JSON string to an object in all cases, without throwing
helpers.parseJsonToObject = (str) => {
    try{
        const obj = JSON.parse(str);
        return obj;
    } catch(e){
        return {};
    }
};

// Create a SHA512 hash
helpers.hash = (str) => {
    if(typeof(str) === 'string' && str.length > 0){
        return crypto.createHmac('sha512', config.hashingSecret).update(str).digest('hex');
    } else {
        return false;
    }
};

helpers.uid = () => {
    return Math.random().toString(36).substr(2, 9);
};

module.exports = helpers;
