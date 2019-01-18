const _data = require('../lib/data');
const _helpers = require('../lib/helpers');

class Base {

    constructor() {
        this._id = null;
        console.log(this.constructor.name);
        console.log(_data.baseDir);
    }

    save() {
        if (this.id == null) {
            this.id = _helpers.uid();
        }
        const dataObject = {};

        Object.keys(this).forEach((key) => {
            const realKey = key.replace(/^_/g, '');
            dataObject[realKey] = this[realKey];
        });

        _data.create(this.constructor.name, this.id, dataObject, (err) => {
            console.log(err);
        });
    }

    load(id) {
        console.log(Object.keys(this));
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }
}

module.exports = Base;
