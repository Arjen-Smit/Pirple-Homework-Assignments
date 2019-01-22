const _data = require('../lib/data');
const _helpers = require('../lib/helpers');

class Base {

    constructor() {
        this._id = null;
        this._saved = false;
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

        dataObject['saved'] = true;
        if (this._saved) {
            _data.update(this.constructor.name, this.id, dataObject, (err) => {
            });
        } else {
            _data.create(this.constructor.name, this.id, dataObject, (err) => {
                this.saved = true;
            });
        }
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

    get saved() {
        return this._saved;
    }

    set saved(value) {
        this._saved = value;
    }
}

module.exports = Base;
