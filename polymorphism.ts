interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear(key: string) {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();

stringStorage.get('key');

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get('x');
