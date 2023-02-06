// ⬇ property or key 가 number인것을 정의하기 위해 저렇게 작성함
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    return delete this.words[term];
  }
  update(term: string, def: string) {
    return (this.words[term] = def);
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
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
