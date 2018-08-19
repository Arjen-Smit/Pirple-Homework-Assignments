const util = {};

// Validate if string can be converted to a json object
util.isValidJSON = (jsonString) => {
    try {
        JSON.parse(jsonString);
        return true;
    } catch(e) {
        return false;
    }
};

module.exports = util;