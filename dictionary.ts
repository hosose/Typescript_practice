// ⬇ property or key 가 string인것을 정의하기 위해 저렇게 작성함
type Words = {
  [key: string]: string;
};

let dict: Words = {
  maratang: 'food',
};

class Dict {
  private words: Words;
}
