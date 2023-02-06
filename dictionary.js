class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    delete(term) {
        return delete this.words[term];
    }
    update(term, def) {
        return (this.words[term] = def);
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const maratang = new Word('maratang', 'Chinese food');
const kimchi = new Word('kimchi', 'Korean food');
const dict = new Dict();
dict.add(maratang);
dict.add(kimchi);
console.log(dict);
dict.update('kimchi', 'Korean food, there is nothing to alternate this food');
console.log(dict);
dict.def('maratang');
