const Base = require('./base');

class User extends Base {

    constructor() {
        super();
        this._name = null;
        this._email = null;
        this._address = null;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }
}

module.exports = User;
