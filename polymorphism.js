class LocalStorage {
    constructor() {
        this.storage = {};
    }
    set(key, value) {
        this.storage[key] = value;
    }
    remove(key) {
        delete this.storage[key];
    }
    get(key) {
        return this.storage[key];
    }
    clear(key) {
        this.storage = {};
    }
}
const stringStorage = new LocalStorage();
stringStorage.get('key');
const booleanStorage = new LocalStorage();
booleanStorage.get('x');
